import ProductForm from "@/app/admin/_components/ProductForm";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductEditPage({ params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    redirect("/admin");
  }

  return (
    <Card>
      <CardContent>
        <ProductForm product={product} />
      </CardContent>
    </Card>
  );
}
