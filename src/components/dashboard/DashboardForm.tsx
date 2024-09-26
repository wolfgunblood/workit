
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Type, Image, Clock, Settings, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardForm() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Text",
      description: "Generate text content",
      icon: Type,
      route: "/text-generation",
      color: "bg-blue-100",
      textColor: "text-blue-600",
      usage: 65,
      recentPrompt: "Write a story about a magical forest",
    },
    {
      title: "Image",
      description: "Create visual content",
      icon: Image,
      route: "/image-generation",
      color: "bg-purple-100",
      textColor: "text-purple-600",
      usage: 40,
      recentPrompt: "A futuristic cityscape at sunset",
    },
    {
      title: "History",
      description: "View past creations",
      icon: Clock,
      route: "/history",
      color: "bg-green-100",
      textColor: "text-green-600",
      totalGenerations: 127,
    },
    {
      title: "Settings",
      description: "Manage preferences",
      icon: Settings,
      route: "/settings",
      color: "bg-orange-100",
      textColor: "text-orange-600",
      lastUpdated: "2 days ago",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-4xl font-light text-gray-800">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={
              "relative overflow-hidden transition-all duration-300 ease-in-out " +
              card.color +
              " border-none"
            }
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle
                  className={"flex items-center text-xl " + card.textColor}
                >
                  <card.icon className="mr-2 h-6 w-6" />
                  {card.title}
                </CardTitle>
                {card.usage && (
                  <Badge variant="secondary" className="text-xs font-normal">
                    {card.usage}% used
                  </Badge>
                )}
                {card.totalGenerations && (
                  <Badge variant="secondary" className="text-xs font-normal">
                    {card.totalGenerations} total
                  </Badge>
                )}
              </div>
              <CardDescription className="text-gray-600">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {card.usage && (
                <div className="mt-2">
                  <Progress value={card.usage} className="h-1" />
                </div>
              )}
              {card.recentPrompt && (
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Recent Prompt:
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    {card.recentPrompt}
                  </p>
                </div>
              )}
              {card.totalGenerations && (
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Total Generations:
                  </p>
                  <p className="text-2xl font-light text-gray-700">
                    {card.totalGenerations}
                  </p>
                </div>
              )}
              {card.lastUpdated && (
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Last Updated:
                  </p>
                  <p className="text-sm text-gray-700">{card.lastUpdated}</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className={
                  "group w-full " +
                  card.textColor +
                  " hover:" +
                  card.color +
                  " border-none shadow-none"
                }
                variant="ghost"
                onClick={() => router.push(card.route)}
              >
                <span className="mr-2">View</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
