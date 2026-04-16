export default function Privacy_policy_page() {
  return (
    <div className="min-h-screen bg-[var(--color-light)] font-sans">
      {/* Header Section */}
      <div className="bg-[#F5F5F5] border-b border-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-tt">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Stealth Treasury — Privacy &amp; Data Protection Policy
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Stealth Treasury (&quot;We&quot; or &quot;Us&quot;) is a treasury
            management tech platform that enables businesses access to credit
            using their unpaid invoices and yield solutions. This Privacy Policy
            guides your use of our Website:{" "}
            <a
              href="https://stealthtreasury.com/"
              className="text-gray-900 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://stealthtreasury.com/
            </a>{" "}
            (&quot;the Website&quot;) and your rights regarding our collection,
            use, storage and protection of your personal data when you visit,
            access, browse through and/or use our Website. Your privacy is
            important to us.
          </p>
        </div>

        {/* Personal Data We Process */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            2. Your Personal Data That We Process
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Personal data means any information about an individual from which
            that person can be directly or indirectly identified. We do not
            consider personal data to include information that has been made
            anonymous such that it does not identify a specific user.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            In connection with our services, we collect personal and financial
            information from you while you use our products, services, and
            websites when you create an account or sign into our Website. The
            personal data we obtain are:
          </p>
          <div className="space-y-3">
            {[
              "Your name",
              "Your email address",
              "Contact number",
              "Your home address",
              "Your Business name",
              "Company Location",
              "Company's official email",
              "Your work email address",
              "Your passport photograph",
              "Financial information (including, but not limited to, Bank Verification Number (BVN), credit history, card details etc.)",
              "Your Login email address and password",
              "The domain name of the Internet service provider (ISP)",
              "The Internet protocol address used to connect your device to the Internet",
              "Data that we obtain from other sources",
              "Additional personal data may be gotten from third-party applications and other identification/verification services (e.g., from your financial institution, background screening providers, a Credit Bureau, or law enforcement agencies).",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            3. Cookies
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Cookies are tools used to collect information from you when you
            automatically visit our website. We use cookies to improve user
            experience on our Website, and information about the usage is
            specified in our Cookie Notice.
          </p>
        </div>

        {/* Lawful Bases */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            4. Lawful Bases for Processing Data
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We are required to process your data under at least one of these
            lawful bases:
          </p>
          <div className="space-y-5">
            {[
              {
                title: "Legitimate Interest",
                body: "Processing your data is necessary for our legitimate interests or the legitimate interests of a third party, provided your rights and interests do not outweigh those interests.",
              },
              {
                title: "Consent",
                body: "You have given explicit consent for us to process your data for a specific purpose.",
              },
              {
                title: "Contract",
                body: "If your data processing is necessary for a contract you have with us or because we have asked you to take specific steps before entering into that contract.",
              },
              {
                title: "Legal Obligation",
                body: "If the processing of your data is necessary where there is a statutory obligation on us.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 font-tt">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose of Processing */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            5. Purpose of Processing Your Data
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We collect your data to:
          </p>
          <div className="space-y-3">
            {[
              "Guard against potential fraud and money laundering.",
              "Enhance data security.",
              "Identify your device when you access your account.",
              "Send you informative updates on money and finance.",
              "Run a credit check on you to determine your credit-worthiness.",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            6. Your Rights as a Data Subject
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            As a data subject, the law vests you with certain rights. They
            include the right to:
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Access personal data we hold about you by requesting a copy of the personal data we hold about you.",
              "Rectify such information where you believe it to be inaccurate.",
              "Restrict the processing of your data in certain circumstances.",
              "Object to the processing of your data where we intend to process such data for marketing purposes.",
              "Where feasible, receive all personal data you have provided to us — in a structured, commonly used, and machine-readable format — and to transmit the information to another data controller.",
              "Request the erasure of your data (also known as the right to be forgotten).",
              "Withdraw your consent to the processing of your personal data.",
              "Lodge a complaint with a relevant authority where you have reason to believe that we have violated the term(s) of this Privacy Notice (you may complain or seek redress from us within 30 days from the time you first detected the alleged violation).",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            You may seek to exercise any of the above rights at any time by
            sending us an email via{" "}
            <a
              href="mailto:hello@StealthTreasury.com"
              className="text-gray-900 font-semibold hover:underline"
            >
              hello@StealthTreasury.com
            </a>
            . The supervisory authority is the Nigeria Data Protection Bureau
            (NDPB), and the complaint can be sent via email at{" "}
            <a
              href="mailto:info@ndpb.gov.ng"
              className="text-gray-900 font-semibold hover:underline"
            >
              info@ndpb.gov.ng
            </a>
            .
          </p>
        </div>

        {/* Who We Share Data With */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            7. Who We Share Your Data With
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We may share your data with the following third parties:
          </p>
          <div className="space-y-3">
            {[
              "Financial institutions that we partner with to create and offer a product jointly — they may only use this information to market our related products unless the customer has given consent for other uses.",
              "Credit bureaus and collection agencies to report account information, as permitted by law.",
              "Banking partners as required by credit/debit card association rules for inclusion on their list of terminated merchants.",
              "Current and future Stealth Treasury subsidiaries and affiliated entities that provide services, including payment processing services or conduct data processing on our behalf, or for data verification, data centralisation and/or logistics purposes.",
              "Law enforcement, government officials, or other third parties — we may disclose your data pursuant to a subpoena, court order, when we need to do so to comply with law or credit/debit card rules; or when we believe, in our sole discretion, that the disclosure of personal information is necessary to prevent physical harm or financial loss.",
              "Legal/Regulatory Authority — we may disclose your data if we believe it is reasonably necessary to comply with a law, regulation, order, subpoena, audit, or to protect the safety of any person, to address fraud, security or technical issues.",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retention */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            8. Retention of Your Data
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Your personal data or any other information collected will be stored
            for as long as necessary to fulfil the purposes described in this
            Notice. However, we will also retain data subject to relevant
            provisions of applicable laws, resolve disputes, and enforce our
            legal agreements and policies. We delete your data for targeted
            marketing purposes once you unsubscribe from our marketing
            communications. Please note that your data may be retained for a
            more extended period, notwithstanding your request to remove your
            data, where there is a legal requirement to do so.
          </p>
        </div>

        {/* How Data Is Stored */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            9. How Your Data Is Stored
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We store and process your data using physical, technical, and
            administrative security measures to reduce the risks of loss,
            misuse, unauthorised access, disclosure and alteration. Some of the
            safeguards we use are firewalls and data encryption, physical access
            controls, and information access authorisation controls. Where there
            is an actual or suspected data breach capable of causing harm to
            your rights and freedoms, we will notify you without undue delay and
            use our best effort to remedy the violation within one (1) month
            from the date we notify you.
          </p>
        </div>

        {/* International Transfer */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            10. International Transfer of Data
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            To achieve the purposes described in this Notice, we may transfer
            your data to countries that may not offer an adequate protection
            level or not considered to have sufficient law by the National
            Information Technology Development Agency (NITDA). Where personal
            data is to be transferred to a country outside Nigeria, we shall put
            adequate measures to ensure data security.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Our data transfers to countries that do not offer an adequate
            protection level are subject to the conditions under the Nigeria
            Data Protection Regulation (NDPR). We will therefore only transfer
            Personal Data out of Nigeria on one of the following conditions:
          </p>
          <div className="space-y-3">
            {[
              "Your consent has been obtained.",
              "The transfer is necessary for the performance of a contract between Us and you or implementation of pre-contractual measures taken at your request.",
              "The transfer is necessary to conclude a contract between Us and the third party in your interest.",
              "The transfer is necessary for the reason of public interest.",
              "The transfer is for the establishment, exercise or defence of legal claims.",
              "The transfer is essential to protect your vital interests or other persons, where the Data Subject is physically or legally incapable of giving consent.",
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            11. Marketing and Communications
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We only send marketing communications to you with your consent. You
            may choose to opt out of our marketing emails by clicking on the
            &apos;unsubscribe&apos; button at the bottom of the page.
          </p>
        </div>

        {/* Security */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            12. Security of Your Data
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We are very particular about preserving your privacy and protecting
            your data. We deploy all reasonable and appropriate technical and
            organisational measures to keep your data safe. However, we cannot
            completely guarantee the security of any information you transmit
            via our Website, as the internet is not an entirely secure place. We
            are committed to doing our best to protect you.
          </p>
        </div>

        {/* Complaints */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            13. Complaints
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            If you are concerned about an alleged breach of data protection law
            or any other regulation by us, you can contact the Data Protection
            Officer (DPO) via{" "}
            <a
              href="mailto:info@StealthTreasury.com"
              className="text-gray-900 font-semibold hover:underline"
            >
              info@StealthTreasury.com
            </a>
            . The DPO will investigate your complaint and provide information
            about how your complaint is handled. Please be informed that you may
            complain to the relevant data protection authority where your
            complaints are not satisfactorily addressed.
          </p>
        </div>

        {/* Changes */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            14. Changes to This Notice
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We update our privacy notice from time to time. We will notify our
            users when we change it, and visitors will know this by checking the
            last date of update on this page whenever you visit.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-[#F5F5F5] border border-white rounded-4xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-tt mb-6 border-b border-gray-200 pb-3">
            15. Contact Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            If you have any questions relating to this Notice, your rights under
            this Notice, or are not satisfied about how we manage your personal
            data, kindly reach our Data Protection Officer at{" "}
            <a
              href="mailto:info@Stealthtreasury.com"
              className="text-gray-900 font-semibold hover:underline"
            >
              info@Stealthtreasury.com
            </a>
            .
          </p>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Stealth Treasury. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated:{" "}
            {new Date().toLocaleString("default", { month: "long" })}{" "}
            {new Date().getFullYear()}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            For questions, contact us at{" "}
            <a
              href="mailto:info@Stealthtreasury.com"
              className="text-gray-900 font-semibold hover:underline"
            >
              info@Stealthtreasury.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
