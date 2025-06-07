import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Clients: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "text-white" : "text-[#4D4D4D]";
  const paragraphColor = theme === "dark" ? "text-gray-300" : "text-[#717171]";

  return (
    <section className="flex w-full flex-col items-stretch mt-10 px-36 max-md:max-w-full max-md:px-5">
      <div className="self-center w-[1110px] max-w-full text-center">
        <h2 className={`${textColor} text-4xl font-semibold leading-none max-md:max-w-full`}>
          Our Clients
        </h2>
        <p className={`${paragraphColor} text-base font-normal mt-2 max-md:max-w-full`}>
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      {/* Added data-aos="fade-up" */}
      <div className="flex min-h-[98px] w-full items-center gap-[40px_100px] justify-between flex-wrap mt-4 max-md:max-w-full" data-aos="fade-up">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0896ce1f57d95c9f9a5fcee1aa9c4174f1b34fc2?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1870d77e25a89b6049c8c9bd51d8c061fc2a038a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e77c7004bd1965d545dddaf855aacc2a171421a1?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 3"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f22a0061d8cf1a8189003958b747f782cc52a9ed?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 4"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/982dda6ca684b0a0ce8f05da16b8be143a74c18a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 5"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ef7dc4362567c9fe38852b2b7bda3fc2c6a8cc?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 6"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/177ca097c864a7a074df08f6bf885bf2a992248c?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-lg"
          alt="Client logo 7"
        />
      </div>
    </section>
  );
};
