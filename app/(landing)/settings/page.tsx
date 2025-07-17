import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import React from "react";
import SettingsForm from "./_components/SettingsForm";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const address = await prisma.address.findUnique({
    where: { userId: session?.user?.id },
  });

  const defaultValues = {
    fullName: address?.fullName ?? "",
    phone: address?.phone ?? "",
    address: address?.address ?? "",
    city: address?.city ?? "",
    zipCode: address?.zipCode ?? "",
  };

  return (
    <>
      <SettingsForm defaultValues={defaultValues} />
    </>
  );
}
