import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export const CategoryCard = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-xl overflow-hidden border border-green-300 bg-white hover:shadow-xl hover:border-green-500 transition-all duration-300 group w-32 md:w-48 !min-h-[170px]">
      {/* Icon Section */}
      <div className="w-full h-24 md:h-44 flex items-center justify-center bg-green-200 group-hover:bg-green-300 transition-colors duration-300">
        <div className="text-green-600 text-4xl group-hover:scale-110 group-hover:text-green-700 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h4 className="text-base font-semibold text-center text-gray-800 group-hover:text-green-600 py-3 px-2 transition-colors duration-300">
        {title}
      </h4>
    </div>
  );
};
