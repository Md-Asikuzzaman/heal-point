import { NextResponse } from "next/server";
import { prisma } from "./prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate here if you want

    const newOrder = await prisma.order.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
        items: {
          create: data.items.map((item: any) => ({
            productId: item.productId,
            title: item.title,
            image: item.image,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            brand: item.brand,
            medicineType: item.medicineType,
            medicineQuantity: item.medicineQuantity,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
