"use client";

import Container from "@/components/shared/Container";
import dynamic from "next/dynamic";
import OrderSummarySkeleton from "./components/OrderSummarySkeleton";
import ShippingDetailsForm from "./components/ShippingDetailsForm";

const OrderSummary = dynamic(() => import("./components/OrderSummary"), {
  ssr: false,
  loading: () => <OrderSummarySkeleton />,
});

const CheckOutClientWrapper = () => {
  return (
    <section className="w-full py-10 px-4">
      <Container className="grid md:grid-cols-2 gap-10">
        {/* Left: Shipping Form */}
        <ShippingDetailsForm />

        {/* Right: Order Summary */}
        <OrderSummary />
      </Container>
    </section>
  );
};

export default CheckOutClientWrapper;
