
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";
import { heroContent } from "@/constants/data";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          {heroContent.title}
        </h1>
        <p className="mb-12 text-xl text-gray-600 sm:text-2xl">
          {heroContent.subtitle}
        </p>
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {heroContent.reasons.map((reason, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={
                  "absolute inset-0 transform bg-gray-100 transition-all duration-300 " +
                  (hoveredIndex === index ? "scale-105" : "scale-95")
                }
              ></div>
              <div className="relative z-10 p-6">
                <Circle
                  className={
                    "mb-4 h-8 w-8 transition-colors duration-300 " +
                    (hoveredIndex === index ? "text-gray-900" : "text-gray-400")
                  }
                />
                <p
                  className={
                    "text-lg transition-colors duration-300 " +
                    (hoveredIndex === index ? "text-gray-900" : "text-gray-600")
                  }
                >
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          className="bg-gray-900 text-white transition-all duration-300 hover:bg-gray-800"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
}
