import React from "react";

function Possibility() {
  return (
    <div className="bg-[#00040F] flex flex-col md:flex-row gap-10 px-4 md:px-8 py-6 items-center">
      <img
        className="w-full md:w-[520px] object-contain"
        src="big.png"
        alt=""
      />

      <div className="text-center md:text-left space-y-4">
        <p className="text-white font-poppins font-semibold text-[32px] md:text-[48px] leading-[160%] tracking-[0.01em]">
          Easily control your billing & invoicing.
        </p>
        <p className="text-white font-poppins font-normal text-[16px] md:text-[18px] leading-[160%] tracking-[0.01em]">
          Elit enim sed massa etiam. Mauris eu adipiscing{" "}
          <br className="hidden md:block" />
          ultrices ametodio aenean neque. Fusce ipsum orci{" "}
          <br className="hidden md:block" />
          rhoncus aliporttitor integer platea placerat.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <img src="icon.png" alt="" />
          <img src="Group.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Possibility;
