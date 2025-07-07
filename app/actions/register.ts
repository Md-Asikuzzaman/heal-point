"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schema";
import bcrypt from "bcryptjs";
import z from "zod";

export async function RegisterAction(data: z.infer<typeof registerSchema>) {
  try {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return { success: false, message: "Email already exists" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
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
