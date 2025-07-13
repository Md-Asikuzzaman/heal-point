import { productSchema } from "@/app/admin/_components/ProductForm";
import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

// Define specific response types
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

type ProductSchema = z.infer<typeof productSchema>;

// POST Request - Create a product
export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse<{ product: Product }>>> {
  try {
    const data: ProductSchema = await req.json();

    console.log("📦 Received Product Data:", data);

    const product = await prisma.product.create({ data });

    return NextResponse.json(
      { success: true, data: { product } },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}
