"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden bg-[var(--panel)] transition-all duration-300"
            style={{
              borderColor: isOpen ? "var(--primary)" : "var(--line)",
              boxShadow: isOpen ? "0 10px 30px -15px rgba(37, 99, 235, 0.08)" : "none",
            }}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-[var(--text)] font-[family-name:var(--font-outfit)] hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-[var(--text-soft)] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[var(--primary)]" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 border-t border-[var(--line-soft)] text-sm leading-relaxed text-[var(--text-muted)] bg-[var(--surface-muted)]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
