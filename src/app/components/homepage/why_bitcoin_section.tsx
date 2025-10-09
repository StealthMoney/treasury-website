import Image from "next/image";

export default function WhyBitcoinSection() {
  const features = [
    {
      icon: "/images/gold.svg",
      title: "Bitcoin is Digital Gold",
      description:
        "Bitcoin combines the efficiency of the Internet. Unlike traditional commodities, it can be transferred globally in seconds, securely stored and easily divided into smaller units for everyday use.",
    },
    {
      icon: "/images/chart.svg",
      title: "Unmatched Liquidity",
      description:
        "Bitcoin is the most liquid asset in the world — you can instantly buy, sell, or trade it across thousands of markets globally, 24/7, with no banking hours, giving you true freedom to move value anytime, anywhere.",
    },
    {
      icon: "/images/lock.svg",
      title: "Verifiable, Fixed Supply",
      description:
        "There will only ever be 21 million Bitcoin, and you can verify this yourself at any time on the public blockchain. This hard cap is enforced by the network itself, giving Bitcoin a level of scarcity and trust that no government or central authority can alter.",
    },
    {
      icon: "/images/shield.svg",
      title: "Hedge Against Inflation",
      description:
        "As governments print more money and inflation rises, Bitcoin remains resistant. Its decentralized and predictable supply makes it a long-term store of value to preserve wealth across generations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-light)]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Why Bitcoin Only
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
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
