import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Define specific response types
interface Data {}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// GET Request - Returns a list of users
export async function GET(
  req: NextRequest
): Promise<NextResponse<ApiResponse<Data[]>>> {
  try {
    const res = await prisma.product.findMany({});

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
