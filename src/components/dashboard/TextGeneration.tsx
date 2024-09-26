
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
import { Wand2 } from "lucide-react";

export default function TextGenerationForm() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("standard");
  const [length, setLength] = useState(100);
  const [generatedText, setGeneratedText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/blog-generation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: prompt,
          keywords: ["example", "blog"],
          tone: style,
          length,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedText(data.postContent as string);
      } else {
        setError((data.error as string) ?? "Failed to generate text.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Blog Generation
        </CardTitle>
        <CardDescription>
          Create compelling content with AI assistance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Your Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Enter your text generation prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="style">Writing Style</Label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger id="style">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="length">Content Length (words)</Label>
            <Slider
              id="length"
              min={50}
              max={500}
              step={10}
              value={[length]}
              onValueChange={(value) => setLength(value[0]!)}
            />
            <p className="text-right text-sm text-gray-500">{length} words</p>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            <Wand2 className="mr-2 h-4 w-4" />
            {loading ? "Generating..." : "Generate Text"}
          </Button>
        </form>
      </CardContent>
      {error && <p className="mt-4 text-center text-red-500">Error: {error}</p>}
      {generatedText && (
        <CardFooter className="flex flex-col items-start">
          <h3 className="mb-2 text-lg font-semibold">Generated Text:</h3>
          <p className="w-full rounded-md bg-gray-100 p-4 text-gray-700">
            {generatedText}
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
