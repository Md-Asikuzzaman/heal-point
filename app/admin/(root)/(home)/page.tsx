import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductTable from "../../_components/ProductTable";
// import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  // const projectCount = await prisma.product.count();
  // const orderCount = await prisma.order.count();

  return (
    <Card>
      <CardHeader>Products Table</CardHeader>
      <CardContent>
        <ProductTable />
      </CardContent>
    </Card>
  );
}
