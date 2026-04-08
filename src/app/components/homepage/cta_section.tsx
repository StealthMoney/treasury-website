"use client";
import Button from "../reusables/button";
import { consultationRedirect } from "../reusables/functions";
import { useConsultationModal } from "../reusables/context/consultation";

export default function CTASection() {
  const { openModal } = useConsultationModal();

  return (
    <div className="w-full flex justify-center items-center md:my-[120px] my-[100px]">
      <section className="bg-[#161616] rounded-4xl overflow-y-hidden w-[85%]">
        <section className="bg14 w-full h-full overflow-y-hidden">
          <div className=" mx-auto rounded-4xl md:px-8 px-4 text-center relative overflow-hidden md:py-12 py-6 bg-[#5e5e5e]/60">
            <div className="relative z-10 md:max-w-[85%] mx-auto">
              <h2 className="text-[24px] md:text-[32px] lg:text-5xl font-bold text-white mb-6 leading-tight font-montserrat">
                Join the forward-thinking companies globally who have a digital
                treasury reserve.
              </h2>
              {/* <p className="md:text-[18px] text-[28px] md:max-w-[60%] max-w-[80%] m-auto text-white mb-8 leading-relaxed">
                Diversify your corporate treasury with an asset that hedges
                against depreciation and drives long-term value.
              </p> */}
              <Button
                onClick={openModal}
                text="Book a consultation"
                type="button"
                className="bg-[var(--color-primary)] text-white px-8 py-3.5 border border-[#FDE3C4] cursor-pointer font-medium transition-colors text-lg md:w-auto w-full"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
