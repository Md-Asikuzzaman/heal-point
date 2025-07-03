import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export const CategoryCard = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-green-400 hover:bg-green-500 w-48 h-48 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h4>{title}</h4>
    </div>
  );
};
