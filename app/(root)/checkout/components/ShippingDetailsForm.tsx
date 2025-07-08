"use client";

import { createOrderAction } from "@/app/actions/create-order";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { orderFormSchema } from "@/schema";
import { useCartStore } from "@/store/useCartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";

import { z } from "zod";

import { triggerConfetti } from "@/lib/confetti";
import toast from "react-hot-toast";
import OrderPlaceButton from "./OrderPlaceButton";
import { useSession } from "next-auth/react";
import ShippingDetailsSkeleton from "./ShippingDetailsSkeleton";

const ShippingDetailsForm = () => {
  const [isPending, startTransition] = useTransition();
  const { cart, clearCart } = useCartStore();
  const { data: isLoggedIn, status } = useSession();

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    try {
      console.log(values);

      if (cart.length > 0) {
        startTransition(async () => {
          const res = await createOrderAction({ ...values, items: cart });

          if (res.success) {
            toast.success(res.message);
            form.reset();
            clearCart();
            triggerConfetti();
          } else {
            alert(res.message);
          }
        });
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  if (status === "loading") {
    return <ShippingDetailsSkeleton />;
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-green-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Shipping Details
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-3xl mx-auto py-10 bg-white p-5"
          method="POST"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="O1XXXXXXXXX" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street Address, house no"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Khulna" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input placeholder="1234" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="my-6 lg:my-8 space-y-3">
            {isLoggedIn ? (
              <OrderPlaceButton
                text="Place Order (Cash on Delivery)"
                cart={cart}
                isPending={isPending}
                className="bg-green-600 hover:bg-green-700"
              />
            ) : (
              <>
                <OrderPlaceButton
                  text="Place Order without login (Cash on Delivery)"
                  cart={cart}
                  isPending={isPending}
                  className="bg-orange-600 hover:bg-orange-700"
                />
                <Link href={"/api/auth/signin?callbackUrl=/checkout"}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all">
                    Login now
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="text-green-700 font-semibold mb-2">Note:</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>
                <span className="font-medium text-gray-800">Inside Dhaka:</span>{" "}
                Delivery charge is{" "}
                <span className="text-green-700 font-semibold">৳70</span>
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Outside Dhaka:
                </span>{" "}
                Delivery charge is{" "}
                <span className="text-green-700 font-semibold">৳120</span>
              </li>
            </ul>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ShippingDetailsForm;
