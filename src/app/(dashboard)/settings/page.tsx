
"use client";
import { Settings } from "@/components/dashboard/Settings";

export default function SettingsPage() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    plan: "Pro",
    avatar: "/placeholder.svg?height=100&width=100",
  };

  return (
    <div className="flex-1 overflow-auto p-4 md:p-8">
      <Settings user={user} />
    </div>
  );
}
