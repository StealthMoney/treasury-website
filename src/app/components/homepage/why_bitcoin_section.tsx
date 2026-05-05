import Image from "next/image";

export default function WhyBitcoinSection() {
  const features = [
    {
      icon: "/images/simplified.svg",
      title: "Inventory Financing",
      description:
        "Access upfront capital to restock inventory and meet customer demand without waiting for payments. Stay ahead of supply needs and avoid missed sales opportunities.",
    },
    {
      icon: "/images/earn.svg",
      title: "Payroll & Operations",
      description:
        "Keep your business running without disruption by unlocking cash tied up in unpaid invoices. Ensure salaries, rent, and day-to-day expenses are covered on time.",
    },
    {
      icon: "/images/borrow.svg",
      title: "Supplier Payments",
      description:
        "Pay suppliers on time and strengthen your relationships without straining your cash flow. Take advantage of early payment terms and better pricing.",
    },
    {
      icon: "/images/real.svg",
      title: "Advanced Receivables",
      description:
        "Turn predictable receivables into a flexible funding stream that scales with your revenue and grow your business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-light)]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-tt">
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-tt">
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
