"use client";

import Container from "@/components/shared/Container";
import dynamic from "next/dynamic";
import OrderSummarySkeleton from "./components/OrderSummarySkeleton";
import ShippingDetailsForm from "./components/ShippingDetailsForm";
import z from "zod";
import { orderFormSchema } from "@/schema";

const OrderSummary = dynamic(() => import("./components/OrderSummary"), {
  ssr: false,
  loading: () => <OrderSummarySkeleton />,
});

type orderFormTypes = z.infer<typeof orderFormSchema>;
interface Props {
  defaultValues: orderFormTypes;
}

const CheckOutClientWrapper = ({ defaultValues }: Props) => {
  return (
    <section className="w-full py-10 px-4">
      <Container className="grid md:grid-cols-2 gap-10">
        {/* Left: Shipping Form */}
        <ShippingDetailsForm defaultValues={defaultValues} />

        {/* Right: Order Summary */}
        <OrderSummary />
      </Container>
    </section>
  );
};

export default CheckOutClientWrapper;
