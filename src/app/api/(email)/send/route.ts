
import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const request = await req.json();
    console.log(request.email);
    const { data, error } = await resend.emails.send({
      from: "Acme <team@yourdomain.one>",
      to: [request.email],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
