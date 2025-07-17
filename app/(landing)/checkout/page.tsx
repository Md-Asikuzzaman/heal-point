import { auth } from "@/lib/auth";
import CheckOutClientWrapper from "./CheckOutClientWrapper";
import { prisma } from "@/lib/prisma";

export default async function CheckOutPage() {
  const session = await auth();
  let address = null;

  if (session?.user?.id) {
    address = await prisma.address.findUnique({
      where: { userId: session?.user?.id },
    });
  }

  const defaultValues = {
    fullName: address?.fullName ?? "",
    phone: address?.phone ?? "",
    address: address?.address ?? "",
    city: address?.city ?? "",
    zipCode: address?.zipCode ?? "",
  };

  return <CheckOutClientWrapper defaultValues={defaultValues} />;
}
