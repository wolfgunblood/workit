
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const LogoGeneratorInputSchema = z.object({
  brandName: z.string().min(1, "Brand name is required"),
  styles: z.array(z.string()).nonempty("At least one style is required"),
  colors: z.array(z.string()).nonempty("At least one color is required"),
});

interface LogoGeneratorInput {
  brandName: string;
  styles: string[];
  colors: string[];
}

interface LogoGeneratorOutput {
  logos: string[];
  message: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateLogos(
  data: z.infer<typeof LogoGeneratorInputSchema>,
): Promise<LogoGeneratorOutput> {
  console.log("Generating logos with data:" + JSON.stringify(data));

  try {
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt:
        "Generate logo designs for the brand '" +
        data.brandName +
        "' in these styles: " +
        data.styles.join(", ") +
        " and colors: " +
        data.colors.join(", ") +
        ".",
      n: 5,
      size: "1024x1024",
    });

    console.log("OpenAI API response:" + JSON.stringify(response));

    const logos = response.data.map((item: any) => item.url);
    return {
      logos,
      message: "Logos generated successfully",
    };
  } catch (error: any) {
    console.error("Error in generateLogos:" + error.message);
    throw new Error("Failed to generate logos from OpenAI");
  }
}

export async function POST(req: Request) {
  console.log("Received POST request for logo generation");

  try {
    const data = await req.json();
    console.log("Parsed request data:" + JSON.stringify(data));

    // Validate input using Zod
    const result = LogoGeneratorInputSchema.safeParse(data);

    if (!result.success) {
      console.error("Validation failed");
      return NextResponse.json(
        {
          error: "Invalid input data",
          details: result.error.format(),
        },
        { status: 400 },
      );
    }

    const logoResponse = await generateLogos(result.data);
    console.log("Logos generated successfully:" + JSON.stringify(logoResponse));

    return NextResponse.json(logoResponse, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST handler:" + error.message);
    return NextResponse.json(
      {
        error: "Failed to generate logos.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
