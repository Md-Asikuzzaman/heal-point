"use client";

import { Skeleton } from "@/components/ui/skeleton";

const CartDetailsSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200 animate-pulse">
      {/* Title */}
      <Skeleton className="h-7 w-40 bg-gray-200 rounded mb-6" />

      {/* Product Skeleton Items */}
      <div className="space-y-6">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-6"
          >
            {/* Image */}
            <Skeleton className="w-full sm:w-24 h-24 bg-gray-200 rounded-md" />

            {/* Info and controls */}
            <div className="flex-1 w-full space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-44 bg-gray-200 rounded" />
                  <Skeleton className="h-4 w-28 bg-gray-200 rounded" />
                </div>
                <Skeleton className="h-5 w-20 bg-gray-200 rounded sm:ml-auto" />
              </div>

              <div className="flex items-center justify-between mt-2">
                {/* Quantity buttons */}
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full bg-gray-200" />
                  <Skeleton className="h-4 w-6 bg-gray-200 rounded" />
                  <Skeleton className="w-8 h-8 rounded-full bg-gray-200" />
                </div>

                {/* Remove */}
                <Skeleton className="w-5 h-5 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
        <Skeleton className="h-6 w-40 bg-gray-200 rounded" />

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Skeleton className="h-11 w-full sm:w-40 bg-gray-200 rounded-lg" />
          <Skeleton className="h-11 w-full sm:w-40 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CartDetailsSkeleton;
