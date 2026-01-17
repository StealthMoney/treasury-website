"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<
  ConsultationModalContextType | undefined
>(undefined);

export function ConsultationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ConsultationModalContext);
  if (context === undefined) {
    throw new Error(
      "useConsultationModal must be used within ConsultationModalProvider"
    );
  }
  return context;
}
