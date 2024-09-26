
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/constants/data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-center text-3xl font-light text-gray-800">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <button
              className="group w-full text-left focus:outline-none"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-700 group-hover:text-gray-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="h-5 w-5 flex-shrink-0 text-gray-500" />
                ) : (
                  <Plus className="h-5 w-5 flex-shrink-0 text-gray-500" />
                )}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "1rem" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0" },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
