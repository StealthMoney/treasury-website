import Image from "next/image";

export default function UnlockLiquiditySection() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col w-full gap-12 items-center">
          <div className="md:w-[60%] w-full">
            <h2 className="text-[32px] md:text-[44px] lg:text-5xl font-bold text-[var(--color-dark)] mb-6 leading-tight font-montserrat">
              Unlock Liquidity with Your Treasury Reserve.
            </h2>
            <p className="text-[16px] md:text-[20px] leading-relaxed text-[var(--color-gray)]">
              Unlock liquidity without touching your treasury reserve.
            </p>
            <p className="text-[16px] md:text-[20px] text-[var(--color-gray)] leading-relaxed">
              Secure a corporate line of credit with Stealth Treasury,
              leveraging your treasury to access working capital for operations,
              expansion, and inventory management.
            </p>
          </div>

          <div className="flex md:w-[40%] w-full justify-center lg:justify-end md:h-full">
            <Image
              alt="vault"
              src="/images/vault.svg"
              width={100}
              height={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/images/vault.webp"
              className="object-contain w-full h-full transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
