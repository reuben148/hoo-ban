import React from "react";
import Button from "../content/button";

function CTA() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#00040F] px-6 lg:px-20 py-10 gap-10">
      {/* Left Side Text Section */}
      <div className="flex-1">
        <h2 className="text-[#FFFFFF] font-poppins font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[160%] tracking-[0.01em] mb-4">
          Find a better card deal <br /> in few easy steps.
        </h2>
        <p className="font-abel font-normal text-[18px] leading-[170%] tracking-[0.01em] text-[#FFFFFF] mb-6">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet <br />
          quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center">
        <img
          className="w-full max-w-[500px] object-contain"
          src="pay.png"
          alt="Payment Illustration"
        />
      </div>
    </div>
  );
}

export default CTA;
