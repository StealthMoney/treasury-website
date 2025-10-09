import React from "react";
import Hero from "./hero";
import Navigation from "../reusables/navigation";
import BitcoinFocusedSection from "./bitcoin_focused_section";
import WhyBitcoinSection from "./why_bitcoin_section";
import UnlockLiquiditySection from "./unlock_liquidity";
import CTASection from "./cta_section";
import Footer from "../reusables/footer";

export default function Index() {
  return (
    <>
      <section className="background-image">
        <Navigation />
        <Hero />
      </section>
      <BitcoinFocusedSection />
      <WhyBitcoinSection />
      <UnlockLiquiditySection />
      <CTASection />
      <Footer />
    </>
  );
}
