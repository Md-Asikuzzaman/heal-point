"use server";

import { prisma } from "@/lib/prisma";
import { orderFormSchema as addressSchema } from "@/schema";
import { auth } from "@/lib/auth";
import z from "zod";

type addressFormTypes = z.infer<typeof addressSchema>;

export async function updateAddressAction(formData: addressFormTypes) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: "Unauthorized" };
  }

  // Validate data
  const parsed = addressSchema.safeParse(formData);
  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
    };
  }

  // Check if address exists
  const existing = await prisma.address.findUnique({
    where: { userId: session.user.id },
  });

  if (existing) {
    await prisma.address.update({
      where: { userId: session.user.id },
      data: parsed.data,
    });
  } else {
    await prisma.address.create({
      data: {
        ...parsed.data,
        userId: session.user.id,
      },
    });
  }

  return {
    success: true,
    message: "Address updated successfully!",
  };
}
