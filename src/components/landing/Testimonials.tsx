import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Testimonials: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "bg-gray-800" : "bg-[#F5F7FA]";
  const quoteColor = theme === "dark" ? "text-gray-300" : "text-[#717171]";
  const authorNameColor = theme === "dark" ? "text-green-300" : "text-[#4CAF4F]"; // Lighter green for dark mode
  const authorTitleColor = theme === "dark" ? "text-gray-400" : "text-[#89939E]"; // Lighter gray for dark mode
  const linkColor = theme === "dark" ? "text-green-300" : "text-[#4CAF4F]"; // Lighter green for dark mode link

  return (
    <section className={`items-center flex w-full gap-[40px_78px] justify-center flex-wrap ${bgColor} mt-12 px-36 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5`} data-aos="fade-up">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74c946a24fab828063399d30ebc572ecdce7d07a?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[326px] shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] self-stretch min-w-60 my-auto"
        alt="Testimonial author"
      />
      <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <blockquote className={`${quoteColor} text-base font-medium leading-6 max-md:max-w-full`}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
            eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
            laoreet elit at ligula molestie, nec molestie mi blandit.
            Suspendisse cursus tellus sed augue ultrices, quis tristique
            nulla sodales. Suspendisse eget lorem eu turpis vestibulum
            pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque,
            eget efficitur libero condimentum id. Curabitur id nibh id sem
            dignissim finibus ac sit amet magna.
          </blockquote>
          <div className="w-full mt-4 max-md:max-w-full">
            <div className={`${authorNameColor} text-xl font-semibold leading-[1.4] max-md:max-w-full`}>
              Tim Smith
            </div>
            <div className={`${authorTitleColor} text-base font-normal mt-2 max-md:max-w-full`}>
              British Dragon Boat Racing Association
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-8 flex-wrap mt-8 max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-[40px_41px] flex-wrap my-auto max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8365183e3cda017085f7b09d2cf9babae9b58b7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e97a94da6ffb8eeccfa51e47a418de364a37544?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d0d562aa043fabc2d1e5fcd80399641bb42942?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7ed08cdec888a4ae1dcc492b848e45ca9bafd3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf6ee819ebb53d7059853d237a69d4982e636a3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 5"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da5cf35b0c48d4e0797b5110d46d307f4c23906c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
              alt="Client logo 6"
            />
          </div>
          <div className={`self-stretch flex items-center gap-2 text-xl ${linkColor} font-semibold leading-[1.4] flex-1 shrink basis-[0%] my-auto pl-2 py-2`}>
            <a href="#" className={`${linkColor} self-stretch w-[188px] my-auto`}>
              Meet all customers
            </a>
            <div className="rotate-[3.1415925661670165rad] self-stretch flex w-6 shrink-0 h-6 my-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
