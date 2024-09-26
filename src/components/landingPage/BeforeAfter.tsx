
"use client";
import { beforeAfterContent } from "@/constants/data";
import { useState } from "react";

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState("without");

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        {beforeAfterContent.mainTitle}
      </h1>
      <div className="mb-4">
        <div className="flex border-b">
          <button
            className={
              "px-4 py-2 " +
              (activeTab === "without"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500")
            }
            onClick={() => setActiveTab("without")}
          >
            Without
          </button>
          <button
            className={
              "px-4 py-2 " +
              (activeTab === "without"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500")
            }
            onClick={() => setActiveTab("with")}
          >
            With
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        {activeTab === "without" ? (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-red-600">
              {beforeAfterContent.without.title}
            </h2>
            <ul className="space-y-2">
              {beforeAfterContent.without.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-green-600">
              {beforeAfterContent.with.title}
            </h2>
            <ul className="space-y-2">
              {beforeAfterContent.with.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
