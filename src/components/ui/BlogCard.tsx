import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

interface BlogCardProps {
  image: string;
  title: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => {
  const { theme } = useContext(ThemeContext);
  const titleColor = theme === "dark" ? "text-gray-300" : "text-[#717171]";
  const readMoreColor = theme === "dark" ? "text-green-300" : "text-[#4CAF4F]"; // Assuming a lighter green for dark mode

  return (
    <div className="self-stretch flex min-w-60 flex-col items-center w-[368px] my-auto">
      <img
        src={image}
        className="aspect-[1.29] object-contain w-[368px] max-w-full rounded-lg"
        alt={title}
      />
      <div className={`items-stretch mt-[-40px] shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] flex w-[317px] max-w-full flex-col  p-4 rounded-lg  ${theme=='dark'?'bg-[#0d0715]':'bg-[#F5F7FA]'}`}>
        <div className={`${titleColor} text-center leading-7 self-center`}>
          {title}
        </div>
        <div className={`flex w-full items-center gap-2 ${readMoreColor} whitespace-nowrap leading-[1.4] justify-center mt-4 p-2`}>
          <div className={`${readMoreColor} self-stretch flex justify-center items-center w-full  my-auto`}>
           <a href="" className="text-center"> Read more</a>
          </div>
        
        </div>
      </div>
    </div>
  );
};
