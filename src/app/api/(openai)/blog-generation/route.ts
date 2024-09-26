
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const BlogGeneratorInputSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  keywords: z.array(z.string()).min(1, "At least one keyword is required"),
  tone: z.string(),
  length: z
    .number()
    .min(50, "Length must be at least 50 words")
    .max(2000, "Length can't exceed 2000 words"),
});

interface BlogGeneratorOutput {
  postTitle: string;
  postContent: string;
  suggestions: string[];
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBlogContent(
  data: z.infer<typeof BlogGeneratorInputSchema>,
): Promise<BlogGeneratorOutput> {
  console.log("Generating blog content with data:" + JSON.stringify(data));

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            "Generate a blog post with the following specifications: Title: " +
            data.title +
            ", Keywords: " +
            data.keywords.join(", ") +
            ", Tone: " +
            data.tone +
            ", Length: " +
            data.length +
            " words. Provide a catchy title, well-structured content, and a few suggestions for related topics.",
        },
      ],
    });

    console.log("OpenAI API response:" + JSON.stringify(response));

    const postTitle =
      response.choices[0]?.message?.content?.split("\n")[0] ?? "Untitled Post";
    const postContent =
      response.choices[0]?.message?.content ?? "No content generated.";
    const suggestions =
      response.choices[0]?.message?.content?.split("\n").slice(1) ?? [];

    return { postTitle, postContent, suggestions };
  } catch (error: any) {
    console.error("Error in generateBlogContent:" + error.message);
    throw error;
  }
}

export async function POST(req: Request) {
  console.log("Received POST request");

  try {
    const data = await req.json();
    console.log(data);
    const result = BlogGeneratorInputSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: result.error.format() },
        { status: 400 },
      );
    }

    const blogResult = await generateBlogContent(result.data);

    console.log("Blog content generated successfully");

    return NextResponse.json(blogResult, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST handler:" + error.message);
    return NextResponse.json(
      {
        error: "Failed to generate blog post.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
