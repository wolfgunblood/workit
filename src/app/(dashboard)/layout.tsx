
"use client";
import { SidebarContent } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/Header";
import { useState } from "react";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = {
    name: "John Doe",
    email: "john@example.com",
    plan: "Pro",
    avatar: "/placeholder.svg?height=100&width=100",
  };
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col bg-gray-100">
          <Header
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            user={user}
          />

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar for desktop */}
            <div className="hidden w-64 bg-white shadow-md md:block">
              <SidebarContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-white md:hidden">
                <SidebarContent
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            )}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
