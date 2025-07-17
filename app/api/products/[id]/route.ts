import { productSchema } from "@/app/admin/_components/ProductForm";
import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
import z from "zod";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Define the expected URL params type
interface Params {
  params: Promise<{ id: string }>;
}

// DELETE API Endpoint
export async function DELETE(
  req: NextRequest,
  ctx: Params
): Promise<NextResponse<ApiResponse<null>>> {
  try {
    const { id } = await ctx.params;

    await prisma.product.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}

type ProductSchema = z.infer<typeof productSchema>;

// UPDATE API Endpoint
export async function PATCH(
  req: NextRequest,
  ctx: Params
): Promise<NextResponse<ApiResponse<Product>>> {
  try {
    const { id } = await ctx.params;

    const data: ProductSchema = await req.json();
    const updatedData = await prisma.product.update({ where: { id }, data });

    return NextResponse.json(
      { success: true, data: updatedData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, ctx: Params) {
  try {
    const { id } = await ctx.params;
    const slug = slugify(id, { lower: true, strict: true });

    const product = await prisma.product.findFirst({
      where: {
        slug,
      },
    });

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
