import React ,  { useContext }from "react";
import { FeatureCard } from "../ui/FeatureCard";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Community: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="w-full text-center mt-10 max-md:max-w-full">
      {/* Added data-aos="fade-up" */}
      <div data-aos="fade-up" className="flex w-full flex-col items-stretch max-md:max-w-full px-5"> {/* Added padding for small screens */}
        <h2 className={`text-4xl font-semibold leading-[44px] self-center w-full max-w-[542px] max-md:max-w-full  ${theme=='dark'?'text-white':'text-[#4D4D4D] '}`}> {/* Adjusted width */}
          Manage your entire community in a single system
        </h2>
        <p className={`text-base font-normal mt-2 w-full max-md:max-w-full   ${theme=='dark'?'text-white':'text-[#4D4D4D] '}`}> {/* Adjusted width */}
          Who is Nextcent suitable for?
        </p>
      </div>
      {/* Added data-aos="fade-up" */}
      <div data-aos="fade-up" className="flex w-full items-center gap-6 md:gap-[40px_100px] justify-center flex-wrap mt-4 px-5 xl:px-36 max-md:max-w-full"> {/* Adjusted gap, justify, and padding */}
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b19b1caadafcc5aec6acc6ce366a3662218577a1?placeholderIfAbsent=true"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/007c07a750cb5ee481b3caea48498b8e344e0da0?placeholderIfAbsent=true"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7881f72ebcedcc74fa628f7cab87138ec6e42da5?placeholderIfAbsent=true"
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </section>
  );
};
