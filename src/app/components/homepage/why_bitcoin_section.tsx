import Image from "next/image";

export default function WhyBitcoinSection() {
  const features = [
    {
      icon: "/images/money.svg",
      title: "Unlock growth capital",
      description:
        "Stealth Treasury enables businesses to finance operations, expansion, or capital expenditures using Bitcoin as collateral rather than equity or core assets. This provides non-dilutive capital while preserving ownership and balance sheet strength.",
    },
    {
      icon: "/images/chart.svg",
      title: "Preserve upside",
      description:
        "Companies can access liquidity without selling their Bitcoin, allowing them to maintain long-term exposure to a scarce, inflation-resistant asset. This avoids the opportunity cost and tax implications of liquidating strategic treasury holdings.",
    },
    {
      icon: "/images/lock.svg",
      title: "Reduce treasury risk",
      description:
        "By holding Bitcoin alongside fiat, companies hedge against local currency devaluation, capital controls, and banking instability. Bitcoin-backed credit offers liquidity without reintroducing excessive exposure to fragile financial systems.",
    },
    {
      icon: "/images/shield.svg",
      title: "Operational simplicity",
      description:
        "Stealth Treasury consolidates custody, lending, and reporting into a single, corporate-grade platform. Finance teams gain clear oversight, predictable processes, and audit-ready workflows without crypto-native complexity.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-light)]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">
          Why Stealth Treasury
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] border border-white p-8 rounded-4xl"
            >
              <div className="flex justify-center items-center p-6 rounded-full w-28 h-28 bg-white mb-8">
                <Image
                  alt={feature.title}
                  src={feature.icon}
                  width={120}
                  height={120}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
