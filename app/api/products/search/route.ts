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

/**
 * @route GET /api/products/search?q={query}
 * @desc Search for products
 */
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

    return NextResponse.json(
      { success: true, data: products },
      { status: 200 }
    );
  } catch (error) {
    console.error("[PRODUCT_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
