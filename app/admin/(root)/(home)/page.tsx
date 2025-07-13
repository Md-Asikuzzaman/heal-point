import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductTable from "../../_components/ProductTable";

export default function HomePage() {
  return (
    <Card>
      <CardHeader>Products Table</CardHeader>
      <CardContent>
        <ProductTable />
      </CardContent>
    </Card>
  );
}
