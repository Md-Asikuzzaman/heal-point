import { productSchema } from "@/app/admin/_components/ProductForm";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { getPublicIdFromUrl } from "@/utils/cloudinary";
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

    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // 1. Get publicId from Cloudinary image URL
    const publicId = getPublicIdFromUrl(product.image);
    if (publicId) {
      // 2. Delete image from Cloudinary
      await cloudinary.uploader.destroy(publicId);
    }

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

    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Extract old public_id to delete old image
    const oldPublicId = getPublicIdFromUrl(product.image);

    // Upload new base64 image to Cloudinary
    const uploaded = await cloudinary.uploader.upload(data.image, {
      folder: "products",
    });

    // Delete old image from Cloudinary if possible
    if (oldPublicId) {
      await cloudinary.uploader.destroy(oldPublicId);
    }

    // Update product with new image URL & other data
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        ...data,
        image: uploaded.secure_url, // store new URL, not base64
      },
    });

    return NextResponse.json(
      { success: true, data: updatedProduct },
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
