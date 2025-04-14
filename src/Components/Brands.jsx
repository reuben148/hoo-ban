import React from "react";

function Brands() {
  return (
    <section className="bg-[#00040F] text-white px-6 py-12 md:flex md:items-center md:justify-between">
      {/* Left Side - Text */}
      <div className="max-w-xl">
        <div className="font-poppins font-semibold tracking-[0.01em] leading-snug py-2 text-[48px] sm:text-[60px] lg:text-[72px]">
          <p>The Next</p>
          <p className="text-[#9DEDF0]">Generation</p>
          <p>Payment Method.</p>
        </div>
        <p className="font-poppins font-normal text-[18px] leading-[170%] tracking-normal mt-2 md:mt-4 text-white/80">
          Our team of experts uses a methodology to identify{" "}
          <br className="hidden md:block" />
          the credit cards most likely to fit your needs.
          <br className="hidden md:block" />
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          className="w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[669px] h-auto"
          src="new.png"
          alt="Hero Image"
        />
      </div>
    </section>
  );
}

export default Brands;
