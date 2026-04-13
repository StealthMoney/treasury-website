"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { X, Plus } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQComponent({
  items,
  title = "Frequently Asked Questions",
  subtitle = "We have answers to your questions",
}: FAQProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-[90%] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-[20px] md:text-[40px] text-[var(--color-dark)] font-bold mb-4 text-balance font-tt!">
          {title}
        </h1>
        <p className="text-[14px] md:text-[20px] text-[var(--color-gray2)] text-balance">
          {subtitle}
        </p>
      </div>

      <div className="w-full space-y-6">
        {items.map((item) => (
          <Collapsible.Root
            key={item.id}
            open={openItem === item.id}
            onOpenChange={() => toggleItem(item.id)}
          >
            <div className="border-b border-border pb-6">
              <Collapsible.Trigger className="w-full flex items-center gap-3 group cursor-pointer focus:outline-none">
                {openItem === item.id ? (
                  <X className="w-5 h-5 text-foreground flex-shrink-0 group-hover:opacity-70 transition-opacity" />
                ) : (
                  <Plus className="w-5 h-5 text-foreground flex-shrink-0 group-hover:opacity-70 transition-opacity" />
                )}

                <span className="text-[16px] md:text-[20px] font-tt! font-semibold text-[var(--color-dark)] text-left">
                  {item.question}
                </span>
              </Collapsible.Trigger>

              <Collapsible.Content className="overflow-hidden">
                <div className="border-t border-border mt-4 pt-4">
                  <p className="text-[12px] md:text-[16px] lg:max-w-[93%] md:max-w-[90%] max-w-[80%] m-auto text-[var(--color-gray2)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </Collapsible.Content>
            </div>
          </Collapsible.Root>
        ))}
      </div>
    </div>
  );
}
