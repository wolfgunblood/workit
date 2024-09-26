
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Type, Image, Clock, Download } from "lucide-react";

export default function History() {
  const [activeTab, setActiveTab] = useState("text");

  const textHistory = [
    {
      id: 1,
      prompt: "Write a short story about a robot",
      result:
        "In a world where AI reigned supreme, one small robot named Pixel discovered the power of imagination...",
      date: "2023-06-01",
    },
    {
      id: 2,
      prompt: "Create a haiku about spring",
      result:
        "Cherry blossoms bloom.Gentle breeze whispers secrets.Nature awakens",
      date: "2023-06-02",
    },
  ];

  const imageHistory = [
    {
      id: 1,
      prompt: "A serene landscape with mountains and a lake",
      imageUrl: "/placeholder.svg?height=200&width=200",
      date: "2023-06-03",
    },
    {
      id: 2,
      prompt: "Abstract art with vibrant colors",
      imageUrl: "/placeholder.svg?height=200&width=200",
      date: "2023-06-04",
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-4xl bg-white shadow-sm">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-xl font-normal text-gray-700">
          Generation History
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="text" className="text-sm">
              <Type className="mr-2 h-4 w-4" />
              Text
            </TabsTrigger>
            <TabsTrigger value="image" className="text-sm">
              <Image className="mr-2 h-4 w-4" />
              Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <div className="space-y-4">
              {textHistory.map((item) => (
                <div key={item.id} className="rounded-md bg-gray-50 p-4">
                  <p className="mb-2 text-sm font-medium text-gray-700">
                    Prompt: {item.prompt}
                  </p>
                  <p className="mb-2 text-sm text-gray-600">{item.result}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      <Clock className="mr-1 inline h-3 w-3" /> {item.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="image">
            <div className="grid gap-4 md:grid-cols-2">
              {imageHistory.map((item) => (
                <div key={item.id} className="rounded-md bg-gray-50 p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.prompt}
                    className="mb-2 h-auto w-full rounded-md"
                  />
                  <p className="mb-2 text-sm font-medium text-gray-700">
                    Prompt: {item.prompt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      <Clock className="mr-1 inline h-3 w-3" /> {item.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
