"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schema";
import z from "zod";

export async function RegisterAction(data: z.infer<typeof registerSchema>) {
  const res = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return { success: true, message: "User created successfully", data: res };
}
