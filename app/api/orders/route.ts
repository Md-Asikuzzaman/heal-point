import { prisma } from "@/lib/prisma";
import { Order } from "@prisma/client";
import { NextResponse } from "next/server";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// GET Request - Returns a list of orders
export async function GET(): Promise<NextResponse<ApiResponse<Order[]>>> {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
    });

    return NextResponse.json({ success: true, data: orders }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
