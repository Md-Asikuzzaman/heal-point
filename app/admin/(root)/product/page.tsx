import React from "react";
import ProductForm from "../../_components/ProductForm";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductPage() {
  return (
    <Card>
      <CardContent>
        <ProductForm />
      </CardContent>
    </Card>
  );
}
