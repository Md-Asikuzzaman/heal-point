import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductTable from "../../_components/ProductTable";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const productCount = await prisma.product.count();
  const orderCount = await prisma.order.count();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-4">
        {/* Product Count */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              📦 Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{productCount}</p>
            <p className="text-sm text-muted-foreground">
              Total available products
            </p>
          </CardContent>
        </Card>

        {/* Orders Count */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              🧾 Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{orderCount}</p>
            <p className="text-sm text-muted-foreground">
              Total customer orders
            </p>
          </CardContent>
        </Card>
      </section>
      <Card>
        <CardHeader>Products Table</CardHeader>
        <CardContent>
          <ProductTable />
        </CardContent>
      </Card>
    </>
  );
}
