import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

interface FeatureSectionProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  imageLeft?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  image,
  title,
  description,
  buttonText,
  imageLeft = true,
}) => {
  const { theme } = useContext(ThemeContext);
  const titleColor = theme === "dark" ? "text-white" : "text-[#4D4D4D]";
  const descriptionColor = theme === "dark" ? "text-gray-300" : "text-[#717171]";

  return (
    <section className="overflow-x-auto overflow-hidden flex w-full mt-12 max-md:max-w-full max-md:mt-10">
      {/* Adjusted width, gap, justify, and padding for responsiveness */}
      {/* Added data-aos attribute */}
      <div className="flex w-full overflow-hidden max-w-[1440px] items-center gap-6 md:gap-[40px_49px] justify-center flex-wrap px-5 md:px-10 lg:px-20 xl:px-36 mx-auto" data-aos="fade-up">
        {imageLeft ? (
          <>
            {/* Adjusted image width for responsiveness */}
            <img
              src={image}
              className="aspect-[1.02] overflow-hidden object-contain w-full md:w-[442px] self-stretch min-w-60 my-auto max-md:max-w-full"
              alt={title}
            />
            {/* Adjusted text content width for responsiveness */}
            <div className="self-stretch flex min-w-60 flex-col w-full md:w-[661px] my-auto max-md:max-w-full">
              {/* Adjusted inner div width for responsiveness */}
              <div className="w-full max-w-[601px] max-md:max-w-full">
                <h2 className={`${titleColor} text-4xl font-semibold leading-[44px] max-md:max-w-full`}>
                  {title}
                </h2>
                <p className={`${descriptionColor} text-sm font-normal leading-5 mt-4 max-md:max-w-full`}>
                  {description}
                </p>
              </div>
              <button className="text-white self-stretch rounded gap-2.5 text-base font-medium text-center bg-[#4CAF4F] mt-8 px-8 py-3.5 max-md:px-5">
                {buttonText}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Adjusted text content width for responsiveness */}
            <div className="self-stretch flex min-w-60 flex-col w-full md:w-[661px] my-auto max-md:max-w-full">
              {/* Adjusted inner div width for responsiveness */}
              <div className="w-full max-w-[601px] max-md:max-w-full">
                <h2 className={`${titleColor} text-4xl font-semibold leading-[44px] max-md:max-w-full`}>
                  {title}
                </h2>
                <p className={`${descriptionColor} text-sm font-normal leading-5 mt-4 max-md:max-w-full`}>
                  {description}
                </p>
              </div>
              <button className="text-white self-stretch rounded gap-2.5 text-base font-medium text-center bg-[#4CAF4F] mt-8 px-8 py-3.5 max-md:px-5">
                {buttonText}
              </button>
            </div>
            {/* Adjusted image width for responsiveness */}
            <img
              src={image}
              className="aspect-[1.02] object-contain w-full md:w-[442px] self-stretch min-w-60 my-auto max-md:max-w-full"
              alt={title}
            />
          </>
        )}
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
  return (
    <>
      <FeatureSection
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/76d86429f086b4b07e58283e4371f322294b4dbb?placeholderIfAbsent=true"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        buttonText="Learn More"
      />
      <FeatureSection
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/af9a5ff572c09e23587e41ba2790a90b79952b3f?placeholderIfAbsent=true"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        buttonText="Learn More"
        imageLeft={false}
      />
    </>
  );
};
