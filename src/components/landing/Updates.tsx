import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BlogCard } from "../ui/BlogCard";

export const Updates: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const titleColor = theme === "dark" ? "text-white" : "text-[#4D4D4D]";
  const paragraphColor = theme === "dark" ? "text-gray-300" : "text-[#717171]";

  return (
    <section data-aos="fade-up" className="flex w-full flex-col items-center mt-12 max-md:max-w-full max-md:mt-10">
      <div className="flex w-full max-w-[1110px] flex-col items-stretch text-center px-5"> {/* Adjusted width and added padding */}
        <h2 className={`${titleColor} text-4xl font-semibold leading-none max-md:max-w-full`}>
          Caring is the new marketing
        </h2>
        <p className={`${paragraphColor} text-base font-normal leading-6 self-center w-full max-w-[628px] mt-2`}> {/* Adjusted width */}
          The Nexcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the
          community, read about how our community are increasing their
          membership income and lot's more.​
        </p>
      </div>
      <div className="flex w-full items-center gap-6 text-xl font-semibold justify-center flex-wrap mt-4 px-5 md:px-36"> {/* Adjusted padding and justify */}
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/df26f46163684b5c832b2ecc0eb00c8f6e300244?placeholderIfAbsent=true"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/1a23aa62474d52a3c3f23ca395023091954fcc1d?placeholderIfAbsent=true"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/9f17e2516456b9e99ea00b4f32639d4dbf38bb0b?placeholderIfAbsent=true"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </section>
  );
};
