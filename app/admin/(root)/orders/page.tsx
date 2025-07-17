import { Card, CardHeader, CardContent } from "@/components/ui/card";
import OrderTable from "../../_components/OrderTable";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>Orders Table</CardHeader>
      <CardContent>
        <OrderTable />
      </CardContent>
    </Card>
  );
}
