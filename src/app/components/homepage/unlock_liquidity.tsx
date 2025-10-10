import Image from "next/image";

export default function UnlockLiquiditySection() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col w-full gap-12 items-center">
          <div className="md:w-[60%] w-full">
            <h2 className="text-[32px] md:text-[44px] lg:text-5xl font-bold text-[var(--color-dark)] mb-6 leading-tight font-serif">
              Unlock Liquidity with Your Bitcoin Treasury Reserve.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--color-gray)]">
              Access capital while keeping your Bitcoin holdings intact.
            </p>
            <p className="text-[16px] md:text-[20px] text-[var(--color-gray)] leading-relaxed">
              With Bitcoin-collateralized loans, you can secure a line of credit
              against your treasury reserve, freeing up liquidity for business
              operations, growth, or new opportunities — all without triggering a
              taxable event or losing your upside exposure.
            </p>
          </div>

          <div className="flex md:w-[40%] w-full justify-center lg:justify-end md:h-full">
            <Image
              alt="bitcoin"
              width={100}
              height={100}
              src={"/images/bitcoin.svg"}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
