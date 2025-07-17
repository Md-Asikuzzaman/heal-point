import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface SearchProduct {
  id: string;
  title: string;
  slug: string;
  price: number;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// GET Request - Returns a list of products
export async function GET(
  request: Request
): Promise<NextResponse<ApiResponse<SearchProduct[]>>> {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";

    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: q,
          mode: "insensitive",
        },
      },

      select: {
        id: true,
        title: true,
        slug: true,
        price: true,
      },
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
