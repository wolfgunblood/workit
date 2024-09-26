
import { Button } from "@/components/ui/button";
import {
  Home,
  Type,
  Clock,
  Settings,
  ChevronRight,
  Image,
  ImageDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SidebarContent({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4 space-y-2">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              router.push("/dashboard");
              setActiveTab("dashboard");
            }}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "text-generation" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab("text-generation");
              router.push("/text-generation");
            }}
          >
            <Type className="mr-2 h-4 w-4" />
            Text Generation
          </Button>
          <Button
            variant={activeTab === "image-generation" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab("image-generation");
              router.push("/image-generation");
            }}
          >
            <ImageDown className="mr-2 h-4 w-4" />
            Image Generation
          </Button>
          <Button
            variant={activeTab === "history" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab("history");
              router.push("/history");
            }}
          >
            <Clock className="mr-2 h-4 w-4" />
            History
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab("settings");
              router.push("/settings");
            }}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </div>
      <div className="p-4">
        <Button className="w-full justify-center">
          <span className="text-base font-semibold">Upgrade Plan</span>{" "}
        </Button>
      </div>
    </div>
  );
}
