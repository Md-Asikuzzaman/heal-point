// components/skeletons/OrderSummarySkeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

const OrderSummarySkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-200 h-fit animate-pulse">
      {/* Title */}
      <Skeleton className="h-6 w-32 mb-6 rounded" />

      {/* Product list (3 items) */}
      <div className="space-y-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 border-b pb-3">
            {/* Product image */}
            <Skeleton className="w-16 h-16 rounded-md" />

            {/* Product details */}
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-3 w-1/2 rounded" />
            </div>

            {/* Price */}
            <Skeleton className="h-4 w-10 rounded" />
          </div>
        ))}
      </div>

      {/* Price summary section */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-14 rounded" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-14 rounded" />
        </div>
        <div className="border-t pt-4 flex justify-between items-center">
          <Skeleton className="h-5 w-16 rounded" />
          <Skeleton className="h-6 w-20 rounded" />
        </div>
      </div>

      {/* Payment method note or extra info */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
        <Skeleton className="h-4 w-40 rounded" />
        <Skeleton className="h-3 w-3/4 rounded" />
      </div>
    </div>
  );
};

export default OrderSummarySkeleton;
