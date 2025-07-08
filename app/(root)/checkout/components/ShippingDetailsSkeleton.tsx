import { Skeleton } from "@/components/ui/skeleton";

const ShippingDetailsSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-green-100 animate-pulse">
      {/* Header */}
      <Skeleton className="h-6 w-40 rounded mb-6" />

      {/* Form Fields */}
      <div className="space-y-4 max-w-3xl mx-auto py-10 bg-white p-5">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />

        <div className="grid grid-cols-12 gap-4">
          <Skeleton className="h-10 col-span-6 rounded-md" />
          <Skeleton className="h-10 col-span-6 rounded-md" />
        </div>

        <div className="my-6 lg:my-8 space-y-3">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Note Box */}
        <div className="mt-4 space-y-2 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-4 w-60 rounded" />
          <Skeleton className="h-4 w-52 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ShippingDetailsSkeleton;
