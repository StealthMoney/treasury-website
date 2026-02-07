import { FAQComponent } from "../reusables/faq";

const sampleFAQData = [
  {
    id: "faq-1",
    question: "What are stablecoins?",
    answer:
      "Stablecoins are digital assets pegged to the US dollar, designed to maintain a stable value while operating on blockchain rails.",
  },
  {
    id: "faq-2",
    question: "Why stablecoins for corporate treasury?",
    answer:
      "They combine the liquidity of cash with digital finance infrastructure, enabling new pathways to yield and borrowing not traditionally available to fiat-only treasuries.",
  },
  {
    id: "faq-3",
    question: "How does this compare to keeping cash in a bank?",
    answer:
      "Traditional bank deposits often earn minimal yield and limit access to flexible financing. Stablecoin treasuries enable higher capital efficiency, transparent yield generation, and instant access to credit & loans.",
  },
  {
    id: "faq-4",
    question: "Is this suitable for conservative corporate treasuries?",
    answer:
      "Yes. Stealth Treasury is built for capital-preserving treasuries. Strategies are structured for companies seeking predictable returns, liquidity access, and risk controls, similar to modern cash-management or money-market alternatives.",
  },
  {
    id: "faq-5",
    question: "Can we access our funds at any time?",
    answer:
      "Yes. Treasury liquidity is a core design principle. Depending on the selected yield strategy, funds can be accessed on demand or within predefined settlement windows.",
  },
];

export default function FAQ_section() {
  return <FAQComponent items={sampleFAQData} />;
}
