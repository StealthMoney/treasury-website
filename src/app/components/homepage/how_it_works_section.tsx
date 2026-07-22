import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Complete your KYB Verification",
  },
  {
    number: "2",
    title: "Upload your invoices or receivables",
  },
  {
    number: "3",
    title: "Get access to cash within a few hours",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]/90">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center flex-col my-3">
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold font-tt text-gray-900">
            How It Works
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-md">
            Unlock working capital in three simple steps and keep your business
            moving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center md:mt-24 mt-auto">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#F5F7FB] p-4 shadow-sm">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/new_dashboard.png"
                alt="Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="lg:mt-0 mt-12 relative">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Timeline */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.number}
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="w-[2px] flex-1 bg-gradient-to-b from-[var(--color-primary)] to-[#C7D2FE] min-h-14 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 font-tt">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
