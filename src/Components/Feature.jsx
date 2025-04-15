import React from "react";
import Button from "../content/button";

function Feature() {
  return (
    <div className="px-6 py-16 bg-[#00040E] text-white font-poppins flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="font-semibold text-[48px] leading-[160%] tracking-[1%]">
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className="text-[16px] leading-[100%] tracking-[0%] mt-4">
          With the right credit card, you can improve your financial life by{" "}
          <br />
          building credit, earning rewards and saving money. But with <br />
          hundreds of credit cards on the market.
        </p>
        <Button />
      </div>

      {/* Right Section with Three Blocks */}
      <div className="md:w-1/2 space-y-8">
        <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg flex items-start gap-4">
          <img src="Star.png" alt="Star Icon" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[18px] leading-[130%] tracking-[1%] capitalize">
              Rewards
            </h3>
            <p className="text-[16px] font-normal leading-[100%] tracking-[0%] mt-2">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes.
            </p>
          </div>
        </div>

        <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg flex items-start gap-4">
          <img src="shield.png" alt="Security Icon" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[18px] leading-[130%] tracking-[1%] capitalize">
              100% Secured
            </h3>
            <p className="text-[16px] font-normal leading-[100%] tracking-[0%] mt-2">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg flex items-start gap-4">
          <img src="Send.png" alt="Savings Icon" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[18px] leading-[130%] tracking-[1%] capitalize">
              Balance Transfer
            </h3>
            <p className="text-[16px] font-normal leading-[100%] tracking-[0%] mt-2">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
