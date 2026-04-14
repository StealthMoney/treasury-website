"use client";
import Button from "../reusables/button";
import { useConsultationModal } from "../reusables/context/consultation";

export default function CTASection() {
  const { openModal } = useConsultationModal();

  return (
    <div className="w-full flex justify-center items-center md:my-[120px] my-[100px] bg12">
      <section className="overflow-y-hidden">
        <section className="w-full md:min-h-[600px] overflow-y-hidden flex flex-col justify-center">
          <div className="mx-auto md:px-8 px-4 text-center relative overflow-hidden md:py-12 py-6">
            <div className="relative z-10 md:max-w-[85%] lg:max-w-[65%] mx-auto">
              <h2 className="text-[32px] md:text-[32px] lg:text-5xl font-bold text-white mb-6 leading-tight font-tt">
                Upgrade your treasury management.
              </h2>
              <p className="md:text-[18px] text-[28px] md:max-w-[60%] max-w-[80%] m-auto text-white mb-8 leading-relaxed">
                Take control of your financial operations with a smarter, more
                connected treasury system. Optimize cash flow, unlock flexible
                credit facilities, and gain real-time visibility to efficiently
                scale your business.
              </p>
              <Button
                onClick={openModal}
                text="Book a call"
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
