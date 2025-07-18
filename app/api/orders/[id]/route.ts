import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface Params {
  params: Promise<{ id: string }>;
}

/**
 * @route DELETE /api/orders/{id}
 * @desc Delete an order
 */
export async function DELETE(
  req: NextRequest,
  ctx: Params
): Promise<NextResponse<ApiResponse<null>>> {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access." },
        { status: 401 }
      );
    }

    // Validate product ID
    const { id } = await ctx.params;
    const order = await prisma.order.findUnique({ where: { id: id } });
    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found." },
        { status: 404 }
      );
    }

    await prisma.order.delete({ where: { id: order.id } });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[ORDER_DELETE_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
