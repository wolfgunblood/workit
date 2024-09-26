
"use client";
import { motion } from "framer-motion";
import { BookOpen, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cta } from "@/constants/data";

function CTA() {
  return (
    <section className="px-5 py-20 pb-32" id="contact">
      <motion.div
        className="mx-auto max-w-5xl rounded-bl-3xl rounded-tr-3xl bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 p-8 text-white"
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold">{cta.action_header}</h2>
        <p className="mb-6">{cta.action_copy}</p>
        <Button variant="secondary" size="lg" className="group">
          <span>Enroll Today</span>
          <motion.span
            className="ml-2 inline-block"
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
          >
            <BookOpen className="h-5 w-5" />
          </motion.span>
        </Button>
      </motion.div>
    </section>
  );
}

export default CTA;
