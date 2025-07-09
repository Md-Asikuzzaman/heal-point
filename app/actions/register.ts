"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schema";
import bcrypt from "bcryptjs";
import z from "zod";

type registerFormTypes = z.infer<typeof registerSchema>;

export async function RegisterAction(formData: registerFormTypes) {
  try {
    // Validate data
    const parsed = registerSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed",
      };
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: formData.email },
    });

    if (existingUser) {
      return { success: false, message: "Email already exists" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("Register error:", error);
    return {
      success: false,
      message: "Something went wrong during registration.",
    };
  }
}
