
import React from "react";

interface StatCardProps {
  icon: string;
  number: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={icon}
        className="w-12 h-12 object-contain"
        alt={`${label} icon`}
      />
      <div className="flex flex-col">
        <div className="text-[28px] font-bold text-gray-800 dark:text-gray-100">
          {number}
        </div>
        <div className="text-base text-gray-500 dark:text-gray-400">
          {label}
        </div>
      </div>
    </div>
  );
};
