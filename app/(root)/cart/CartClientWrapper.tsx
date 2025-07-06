"use client";

import Container from "@/components/shared/Container";
import dynamic from "next/dynamic";
import CartDetailsSkeleton from "./components/CartDetailsSkeleton";

const CartDetails = dynamic(() => import("./components/CartDetails"), {
  ssr: false,
  loading: () => <CartDetailsSkeleton />,
});

const CartClientWrapper = () => {
  return (
    <Container className="max-w-6xl my-6">
      <CartDetails />
    </Container>
  );
};

export default CartClientWrapper;
