import React from "react";

function Brands() {
  return (
    <div className="px-6 py-7">
      <div className="flex items-center gap-3 border border-[#272727] bg-[#272727] text-white px-4 py-2 rounded-xl sm:w-full md:w-90">
        <img
          src="Discount.png"
          alt="discount"
          className="w-8 h-8 object-contain"
        />
        <p className="text-sm font-medium">
          <span className="text-[#31BFFF]">20% DISCOUNT</span> FOR 1 MONTH
          ACCOUNT
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
        {/* Text Section */}
        <div
          className="text-white font-poppins font-semibold tracking-[0.01em] leading-snug py-2 text-center lg:text-left
                  text-[48px] sm:text-[60px] lg:text-[72px] max-w-xl"
        >
          <p>The Next</p>
          <p className="text-[#9DEDF0]">Generation</p>
          <p>Payment Method.</p>
        </div>

        {/* Image */}
        <img
          className="mt-4 lg:mt-0 lg:ml-[50px] w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[669px] h-auto"
          src="new.png"
          alt="hero"
        />
      </div>

      {/* Description Paragraph */}
      <p className="font-poppins font-normal text-[18px] leading-[170%] tracking-normal text-white mt-2 lg:mt-4 px-4 lg:px-1 text-center lg:text-left max-w-3xl">
        Our team of experts uses a methodology to identify{" "}
        <br className="hidden sm:block" />
        the credit cards most likely to fit your needs.{" "}
        <br className="hidden sm:block" />
        We examine annual percentage rates, annual fees.
      </p>
    </div>
  );
}

export default Brands;
