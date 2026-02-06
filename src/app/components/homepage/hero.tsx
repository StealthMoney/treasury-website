"use client";
import Button from "../reusables/button";
import { consultationRedirect } from "../reusables/functions";
import { useConsultationModal } from "../reusables/context/consultation";

export default function Hero() {
  const { openModal } = useConsultationModal();

  return (
    <div className="px-6 w-full flex justify-center items-center mt-12 md:mt-20">
      <div className="lg:w-[70%] md:w-[90%] w-full flex flex-col justify-center items-center gap-[20px] text-center">
        <div>
          <h1 className="leading-[1.2] font-bold text-[44px] text-white !font-satoshi text-center">
            <span className="inline">Every smart </span>

            <span className="text-animator-wrapper">
              <span className="text-animator text-[var(--color-primary)]">
                <span className="text-animator__sizer">business</span>

                <span className="text-animator__item is-visible">company</span>
                <span className="text-animator__item text-5xl">startup</span>
                <span className="text-animator__item">business</span>
              </span>
            </span>

            <span className="ok">needs a modern treasury strategy.</span>
          </h1>
        </div>

        <div className="w-full mt-8">
          <Button
            onClick={openModal}
            text="Book a Consultation"
            className="p-4 text-[var(--color-background)] border border-[#FDE3C4] bg-[var(--color-primary)] cursor-pointer md:w-auto w-full"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
