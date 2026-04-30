export default function LendingServiceAgreement() {
  return (
    <div className="min-h-screen bg-[var(--color-light)] font-sans">
      {/* Header Section */}
      <div className="bg-[#F5F5F5] border-b border-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-tt">
            Lending Service Agreement
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Stealth Treasury — Loan Agreement &amp; Terms of Financing
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Preamble */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            This Loan Agreement (&quot;Agreement&quot;) is created by Stealth
            Treasury (Stealthtech Solutions LTD).
          </p>
        </div>

        {/* 1. Definitions */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            1. Definitions
          </h2>
          <div className="space-y-3">
            {[
              {
                term: "Invoice(s)",
                def: "Approved receivables owed to the Business",
              },
              {
                term: "Advance Rate",
                def: "Percentage of invoice value financed (e.g. up to 50%)",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">
                  <span className="font-semibold text-gray-900">
                    {item.term}:
                  </span>{" "}
                  {item.def}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Invoice & Receivables */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            2. Invoice &amp; Receivables
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The Business represents and warrants that all invoices or receivable
            orders submitted are authentic, relate to goods delivered or
            services fully performed, are free from dispute, have not been
            previously assigned or pledged, and constitute valid, binding, and
            legally enforceable obligations of the respective Debtors.
          </p>
        </div>

        {/* 3. Application */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            3. Application
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Funds shall be disbursed to the Business within hours after
            approval.
          </p>
        </div>

        {/* 4. Fees */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            4. Fees
          </h2>
          <div className="space-y-3">
            {[
              "Interest Rates: 2% per 30 days, 5% per 60 days, 7% per 90 days",
              "Bank charges and taxes are the responsibility of the business.",
              "Late Payment Fee (3% monthly)",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Repayment & Settlement */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            5. Repayment &amp; Settlement
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
              <p className="text-gray-700 text-base md:text-lg">
                The Debtor shall pay the Invoice amount directly to our provided
                bank account
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
              <div>
                <p className="text-gray-700 text-base md:text-lg mb-2">
                  Upon receipt:
                </p>
                <div className="space-y-2 pl-4">
                  {[
                    "Loan is marked as repaid.",
                    "Business is eligible for future loans.",
                  ].map((sub, j) => (
                    <div key={j} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 flex-shrink-0" />
                      <p className="text-gray-700 text-base md:text-lg">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Payment Redirection */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            6. Payment Redirection
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            The Business agrees to:
          </p>
          <div className="space-y-3">
            {[
              "Notify the Debtor of assignment of the Invoice or Receivable",
              "Ensure payments are made directly to the Financier's designated account",
              "Not collect or redirect payments without consent",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Default */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            7. Default
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            If the Debtor fails to pay within agreed timeline:
          </p>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
            <p className="text-gray-700 text-base md:text-lg">
              The Business must repay the outstanding amount and the late
              repayment fee or risk being reported to the credit bureaus.
            </p>
          </div>
        </div>

        {/* 8. Representations & Warranties */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            8. Representations &amp; Warranties
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            The Business represents that:
          </p>
          <div className="space-y-3">
            {[
              "The Invoice or receivable order is valid, undisputed, and legally enforceable",
              "Goods/services have been delivered satisfactorily",
              "The Debtor is obligated to pay",
              "The Invoice or receivable has not been pledged or financed elsewhere",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Covenants */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            9. Covenants
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            The Business agrees:
          </p>
          <div className="space-y-3">
            {[
              "Not to reassign or encumber financed invoices",
              "To notify Financier of any disputes or delays",
              "To maintain accurate records",
              "To cooperate in collections if needed",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Default */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            10. Default
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Events of default include:
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Non-payment beyond agreed date.",
              "Fraud or misrepresentation",
              "Breach of agreement",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Upon default, Stealth Treasury may:
          </p>
          <div className="space-y-3">
            {[
              "Demand immediate repayment",
              "Offset against other invoices",
              "Initiate legal recovery",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Collections & Enforcement */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            11. Collections &amp; Enforcement
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Stealth Treasury has the right to:
          </p>
          <div className="space-y-3">
            {[
              "Contact Debtors directly",
              "Enforce payment",
              "Engage third-party collections if necessary",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Governing Law */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            12. Governing Law
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            This Agreement is governed by the laws of the Federal Republic of
            Nigeria.
          </p>
        </div>

        {/* 13. Dispute Resolution */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            13. Dispute Resolution
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Disputes shall be resolved via:
          </p>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
            <p className="text-gray-700 text-base md:text-lg">
              Negotiation → Arbitration / Courts in Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Stealthtech Solutions, Limited.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated:{" "}
            {new Date().toLocaleString("default", { month: "long" })}{" "}
            {new Date().getFullYear()}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            For complaints, contact us at{" "}
            <a
              href="mailto:info@StealthTreasury.com"
              className="text-gray-900 font-semibold hover:underline"
            >
              info@StealthTreasury.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
