import React from "react";
import Button from "../reusables/button";

export default function Hero() {
  return (
    <div className="px-6 w-full flex justify-center items-center mt-12 md:mt-20">
      <div className="md:w-[70%] w-full flex flex-col justify-center items-center gap-[20px] text-center">
        <div>
          <h1 className="leading-[72px] font-bold text-[48px] text-[var(--color-background)] !font-serif">
            Every smart company will hold Bitcoin. Stealth Treasury simplifies
            this.
          </h1>
        </div>
        <div className="text-center flex flex-col items-center justify-center w-full">
          <p className="leadin-[36px] text-[18px] text-[var(--color-background)] md:max-w-[90%]">
            Stay ahead of the curve. Stealth Treasury empowers companies to
            protect value and grow with Bitcoin, the world&apos;s strongest
            asset.
          </p>
        </div>

        <div className="w-full">
          <Button
            text="Book a Consultation"
            className="p-4 text-[var(--color-background)] border border-white bg-[var(--color-primary)] cursor-pointer md:w-auto w-full"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
