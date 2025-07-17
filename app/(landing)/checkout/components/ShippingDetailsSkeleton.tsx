import { Skeleton } from "@/components/ui/skeleton";

const ShippingDetailsSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8 border border-green-100 animate-pulse">
      {/* Header */}
      <Skeleton className="h-6 w-32 sm:w-40 rounded mb-4 sm:mb-6" />

      {/* Form Fields */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="space-y-3 mt-6 lg:mt-8">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Note Box */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
          <Skeleton className="h-4 w-20 sm:w-24 rounded" />
          <Skeleton className="h-4 w-40 sm:w-60 rounded" />
          <Skeleton className="h-4 w-36 sm:w-52 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ShippingDetailsSkeleton;
