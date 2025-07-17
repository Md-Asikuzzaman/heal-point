"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createOrderAction(data: {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  items: CartProductType[];
}) {
  try {
    const res = await prisma.order.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
        items: {
          create: data.items.map((item) => ({
            productId: item.id,
            title: item.title,
            image: item.image,
            quantity: item.quantity,
            price: item.price,
            brand: item.brand,
            medicineType: item.medicineType,
            medicineQuantity: item.medicineQuantity,
          })),
        },
      },
    });

    if (!res || !res.id) {
      return {
        success: false,
        message: "Something went wrong, please try again later.",
      };
    }

    revalidatePath("/admin");

    return {
      success: true,
      message: "Order placed successfully!",
    };
  } catch (error) {
    console.error("❌ Order create error:", error);

    return {
      success: false,
      message: "Failed to create order. Please try again.",
    };
  }
}
