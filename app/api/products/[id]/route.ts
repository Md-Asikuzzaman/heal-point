import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

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
