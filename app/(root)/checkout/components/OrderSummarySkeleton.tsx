const OrderSummarySkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-200 h-fit animate-pulse">
      {/* Title */}
      <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

      {/* Product list (2 items) */}
      <div className="space-y-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 border-b pb-3">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>

            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>

            <div className="h-4 w-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Price summary */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
        </div>
        <div className="border-t pt-4 flex justify-between items-center">
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Payment method note */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
        <div className="h-4 w-40 bg-gray-200 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default OrderSummarySkeleton;
