
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Image, Wand2 } from "lucide-react";

export default function ImageGenerationForm() {
  const [prompt, setPrompt] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [style, setStyle] = useState("realistic");
  const [size, setSize] = useState("512x512");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock image generation
    setGeneratedImageUrl("/placeholder.svg?height=512&width=512");
  };

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Image Generation
        </CardTitle>
        <CardDescription>
          Create stunning visuals with AI assistance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Image Description</Label>
            <Textarea
              id="prompt"
              placeholder="Describe the image you want to generate..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="style">Art Style</Label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger id="style">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="cartoon">Cartoon</SelectItem>
                <SelectItem value="abstract">Abstract</SelectItem>
                <SelectItem value="sketch">Sketch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Image Size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select image size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="256x256">256x256</SelectItem>
                <SelectItem value="512x512">512x512</SelectItem>
                <SelectItem value="1024x1024">1024x1024</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Image
          </Button>
        </form>
      </CardContent>
      {generatedImageUrl && (
        <CardFooter className="flex flex-col items-center">
          <h3 className="mb-2 text-lg font-semibold">Generated Image:</h3>
          <img
            src={generatedImageUrl}
            alt="Generated image"
            className="h-auto max-w-full rounded-md"
          />
        </CardFooter>
      )}
    </Card>
  );
}
