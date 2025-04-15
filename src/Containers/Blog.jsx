import React from "react";

function Blog() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-8 md:my-16 my-10 mx-8 md:mx-16 rounded-xl bg-[#6D6D6D]">
      <div className="text-[#0E0E0E]">
        <p className="font-medium text-[12px] leading-[30px] font-sans">
        Let’s try our service now!
        </p>
        <h3 className="font-extrabold text-[24px] leading-[45px] font-sans text-black md:text-[24px] md:leading-[45px] text-[18px] leading-[32px]">
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </h3>
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-8">
        <button className="bg-black text-white rounded-full font-bold text-[18px] leading-[30px] py-2 px-4 min-w-[150px] hover:opacity-90 transition duration-300 md:text-[18px] md:leading-[30px] text-[14px] leading-[28px]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Blog;
