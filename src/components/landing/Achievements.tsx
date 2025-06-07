import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StatCard } from "../ui/StatCard";

export const Achievements: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "bg-gray-800" : "bg-[#F5F7FA]";
  const titleColor = theme === "dark" ? "text-white" : "text-[#4d4d4d]";
  const spanColor = theme === "dark" ? "text-green-300" : "text-[#4CAF4F]"; // Assuming a lighter green for dark mode span
  const paragraphColor = theme === "dark" ? "text-gray-300" : "text-[#18191F]";

  return (
    <section className={`justify-between items-center flex w-full gap-[40px_70px] flex-wrap ${bgColor} mt-12 px-36 py-16 max-md:max-w-full max-md:mt-10 max-md:px-5`}>
      {/* Added data-aos="fade-right" */}
      <div data-aos="fade-right" className="self-stretch min-w-60 overflow-hidden w-[540px] my-auto max-md:max-w-full">
        <h2 className={`w-[408px] max-w-full overflow-hidden text-4xl ${titleColor} font-semibold leading-[44px]`}>
          Helping a local{" "}
          <span className={`${spanColor}`}>business reinvent itself</span>
        </h2>
        <p className={`${paragraphColor} text-base font-normal mt-2 max-md:max-w-full`}>
          We reached here with our hard work and dedication
        </p>
      </div>
      {/* Added data-aos="fade-left" */}
      <div data-aos="fade-left" className="self-stretch flex min-w-60 flex-col overflow-hidden items-center my-auto max-md:max-w-full">
        <div className="flex items-center gap-[30px] overflow-hidden whitespace-nowrap flex-wrap max-md:max-w-full">
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/34347ae2924b4469a70ebeec79155cc041ca0a12?placeholderIfAbsent=true"
            number="2,245,341"
            label="Members"
          />
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6228d89a6a88e7600eefb5876cb48916f5f1d37e?placeholderIfAbsent=true"
            number="46,328"
            label="Clubs"
          />
        </div>
        <div className="flex items-center gap-[30px] overflow-hidden flex-wrap mt-10 max-md:max-w-full">
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a9bced955729b8505887b33b88f37c10068735?placeholderIfAbsent=true"
            number="828,867"
            label="Event Bookings"
          />
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/748b19e4c3fc831108542b125536409ba3ae84a6?placeholderIfAbsent=true"
            number="1,926,436"
            label="Payments"
          />
        </div>
      </div>
    </section>
  );
};
