import React from "react";

const Whatgpt3 = () => {
  return (
    <div className="hidden sm:flex px-6 py-4 justify-between items-center">
    <div className="flex items-center gap-4">
      <p className="font-poppins font-semibold text-[40.89px] leading-[130%] tracking-[0px] text-white">
        3800+
      </p>
      <img
        className="w-[120px] h-[15px] mt-[5px]"
        src="active.png"
        alt="Active Users"
      />
    </div>

    <img src="Line 3.png" alt="" />

    <div className="flex items-center gap-4">
      <p className="font-poppins font-semibold text-[40.89px] leading-[130%] tracking-[0px] text-white">
        230+
      </p>
      <img
        className="w-[180px] h-[15px] mt-[5px]"
        src="trust.png"
        alt="Trusted Companies"
      />
    </div>

    <img src="Line 3.png" alt="" />

    <div className="flex items-center gap-4">
      <p className="font-poppins font-semibold text-[40.89px] leading-[130%] tracking-[0px] text-white">
        $230+
      </p>
      <img
        className="w-[140px] h-[15px] mt-[5px]"
        src="trans.png"
        alt="Transaction Volume"
      />
    </div>
  </div>
  );
};

export default Whatgpt3;
