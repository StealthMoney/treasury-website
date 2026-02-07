import Image from "next/image";

export default function WhyBitcoinSection() {
  const features = [
    {
      icon: "/images/money.svg",
      title: "Simplified Treasury Conversions",
      description:
        "Allocate a portion of your treasury to USD-pegged stablecoins. A liquid, safe digital dollar equivalent that retains value and supports yield generation.",
    },
    {
      icon: "/images/chart.svg",
      title: "Earn Predictable Yield",
      description:
        "Stealth Treasury deploys your treasury into regulated, secured yield opportunities where companies can generate yield on their idle cash.",
    },
    {
      icon: "/images/lock.svg",
      title: "Borrow Against Your Holdings",
      description:
        "Access liquidity by borrowing against your treasury reserve, unlocking capital for operations or strategic initiatives while keeping your reserve intact.",
    },
    {
      icon: "/images/shield.svg",
      title: "Real-Time Reporting & Treasury Tools",
      description:
        "Manage risk, monitor performance, and stay audit-ready with a transparent suite of treasury dashboards. Our easy to use and intuitive dashboards provide simple reports.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-light)]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-montserrat">
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-montserrat">
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
