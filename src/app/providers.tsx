"use client";
import React from "react";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ConsultationModalProvider } from "./components/reusables/context/consultation";
import { ConsultationModal } from "./components/reusables/consultation_modal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ConsultationModalProvider>
        {children}
        <ConsultationModal />
      </ConsultationModalProvider>
    </GoogleReCaptchaProvider>
  );
}
