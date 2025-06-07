
import React ,  { useContext }from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`items-center shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] self-stretch flex min-w-60 flex-col w-full xl:w-[299px] my-auto px-4 py-6 rounded-lg ${theme=='dark'? 'bg-[#E8F5E9]':'bg-white '}`}>
      <div className="flex max-w-full w-[267px] flex-col items-center text-[28px] text-[#4D4D4D] font-bold leading-9">
        <img
          src={icon}
          className="aspect-[1.16] object-contain w-[65px]"
          alt={`${title} icon`}
        />
        <div className={`text-[#4D4D4D] mt-4 `}>
          {title}
        </div>
      </div>
      <div className={`text-[#717171] w-[251px] max-w-full gap-2 text-sm font-normal leading-5 mt-2`}>
        {description}
      </div>
    </div>
  );
};
