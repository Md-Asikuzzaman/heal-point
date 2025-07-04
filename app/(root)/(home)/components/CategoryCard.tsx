import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export const CategoryCard = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center border border-green-500 rounded-lg overflow-clip hover:shadow-2xl group transition-colors">
      <div className="bg-green-400  group-hover:bg-green-500 w-48 h-48 flex items-center justify-center ">
        {icon}
      </div>
      <h4 className="text-lg font-semibold py-2.5">{title}</h4>
    </div>
  );
};
