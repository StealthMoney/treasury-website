"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WaitlistSidebar from "./sidebar";
import CountdownDisplay from "./countdown";

export default function WaitlistPage({
  launchDays = 85,
}: {
  launchDays?: number;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-switzer">
      <header className="w-full px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between bg-[#FDFDFD]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/stealth_logo1.png" alt="logo" width={100} height={100} />
        </Link>
        <CountdownDisplay daysFromNow={launchDays} />
      </header>

      <main className="flex flex-col items-center px-4 sm:px-8 pt-6 pb-20">
        <div className="w-full mx-auto">
          <Image
            src="/images/waitlist_hero.svg"
            alt="Stealth Treasury app preview"
            width={900}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center text-center gap-4 max-w-2xl">
          <h1 className="text-4xl sm:text-[32px] lg:text-[48px] font-medium text-[#090909] leading-tight tracking-tight">
            Treasury Infrastructure
            <br />
            Built for Modern Businesses
          </h1>
          <p className="text-sm sm:text-base text-[#707070] text-[14px] mt-1">
            Be the first to experience Stealth Treasury.
          </p>
          <button
            onClick={() => setSidebarOpen(true)}
            className="mt-3 px-8 py-4 bg-[#090909] cursor-pointer text-white text-sm font-semibold rounded-full active:scale-[0.98] transition-all duration-150 shadow-md"
          >
            Get early access
          </button>
        </div>
      </main>

      <WaitlistSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}
