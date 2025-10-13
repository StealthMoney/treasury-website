"use client";
import Button from "../reusables/button";
import { consultationRedirect } from "../reusables/functions";

export default function CTASection() {
  return (
    <div className="w-full flex justify-center items-center md:my-[120px] my-[100px]">
      <section className="bg-[#764304] rounded-4xl overflow-y-hidden w-[85%]">
        <section className="bg15 w-full h-full overflow-y-hidden">
          <div className=" mx-auto rounded-4xl md:px-8 px-4 text-center relative overflow-hidden md:py-12 py-6">
            <div className="relative z-10 md:max-w-[85%] mx-auto">
              <h2 className="text-[24px] md:text-[32px] lg:text-5xl font-bold text-white mb-6 leading-tight font-serif">
                Join the forward-thinking companies globally who have a bitcoin
                treasury reserve.
              </h2>
              <p className="md:text-[18px] text-[28px] text-white/90 mb-8 leading-relaxed">
                Diversify your corporate treasury with an asset that withstands
                inflation and allows long-term value.
              </p>
              <Button
                onClick={() => consultationRedirect()}
                text="Book a consultation"
                type="button"
                className="bg-[var(--color-primary)] text-white px-8 py-3.5 border cursor-pointer border-white font-medium transition-colors text-lg md:w-auto w-full"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
