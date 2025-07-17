"use client";

import { updateAddressAction } from "@/app/actions/update-address";
import SubmitButton from "@/app/auth/_components/SubmitButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { orderFormSchema as addressSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BuildingIcon,
  LandmarkIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type SettingsFormValues = z.infer<typeof addressSchema>;

interface Props {
  defaultValues: SettingsFormValues;
}

export default function SettingsForm({ defaultValues }: Props) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues,
  });

  const onSubmit = async (values: SettingsFormValues) => {
    try {
      startTransition(async () => {
        const res = await updateAddressAction(values);
        if (res.success) {
          toast.success(res.message);
          // form.reset();
          // router.replace("/auth/login");
        } else {
          toast.error(res.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Update Address Info</h2>
          <p className="text-sm text-muted-foreground">
            Update your address information below.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Fullname */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <UserIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Full Name"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Phone Number"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Street Address"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <BuildingIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="City"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ZIP Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <LandmarkIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="ZIP Code"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitButton
              text="Update"
              loadingText="Updating..."
              isPending={isPending}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
