import { productSchema } from "@/app/admin/_components/ProductForm";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
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
): Promise<NextResponse<ApiResponse<Product>>> {
  try {
    const data: ProductSchema = await req.json();
    const slug = slugify(data.title, { lower: true, strict: true });

    const uploaded = await cloudinary.uploader.upload(data.image, {
      folder: "products",
    });

    const product = await prisma.product.create({
      data: {
        ...data,
        image: uploaded.secure_url,
        slug,
      },
    });

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create product" },
      { status: 500 }
    );
  }
}

// GET Request - Returns a list of products
export async function GET(): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ success: true, data: products });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
