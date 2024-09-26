
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { z } from "zod";

import { db } from "@/server/db";

const SelectedTeamSchema = z.object({
  created_at_millis: z.number(),
  id: z.string(),
  display_name: z.string(),
  profile_image_url: z.string().nullish(),
});

const UserIDSchema = z.string().describe("The unique identifier of this user");

const UserCreatedEventPayloadSchema = z.object({
  id: UserIDSchema,
  primary_email_verified: z
    .boolean()
    .describe(
      "Whether the primary email has been verified to belong to this user",
    ),
  signed_up_at_millis: z
    .number()
    .describe(
      "The time the user signed up (the number of milliseconds since epoch, January 1, 1970, UTC)",
    ),
  has_password: z
    .boolean()
    .describe("Whether the user has a password associated with their account"),
  primary_email: z.string().nullish().describe("Primary email"),
  display_name: z
    .string()
    .nullish()
    .describe(
      "Human-readable user display name. This is not a unique identifier.",
    ),
  profile_image_url: z
    .string()
    .nullish()
    .describe(
      "URL of the profile image for user. Can be a Base64 encoded image. Please compress and crop to a square before passing in.",
    ),
  client_metadata: z
    .record(z.string(), z.any())
    .nullish()
    .describe(
      "Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.",
    ),
  server_metadata: z
    .record(z.string(), z.any())
    .nullish()
    .describe(
      "Server metadata. Used as a data store, only accessible from the server side. You can store secret information related to the user here.",
    ),
});

const UserUpdatedEventPayloadSchema = UserCreatedEventPayloadSchema;

const UserDeletedEventPayloadSchema = z.object({
  id: UserIDSchema,
});

const StackAuthEventPayloadSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("user.created"),
    data: UserCreatedEventPayloadSchema,
  }),
  z.object({
    type: z.literal("user.updated"),
    data: UserUpdatedEventPayloadSchema,
  }),
  z.object({
    type: z.literal("user.deleted"),
    data: UserDeletedEventPayloadSchema,
  }),
]);

const SVIX_WEBHOOK_SIGNING_SECRET = process.env.SVIX_WEBHOOK_SIGNING_SECRET!;

export async function POST(request: Request) {
  // const body = await request.text();
  const body = await request.json();

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key, parent) => {
    headers[key] = value;
  });

  const wh = new Webhook(SVIX_WEBHOOK_SIGNING_SECRET);

  let payload: any = body;

  try {
    payload = wh.verify(body, headers);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Unable to verify webhook:" + (e as Error).message },
      { status: 500 },
    );
  }
  try {
    const parsedPayload = StackAuthEventPayloadSchema.parse(payload);
    console.log("Parsed Payload:", parsedPayload);

    switch (parsedPayload.type) {
      case "user.created":
        await db.user.create({
          data: {
            id: parsedPayload.data.id,
            display_name: parsedPayload.data.display_name,
            primary_email: parsedPayload.data.primary_email,
            primary_email_verified: parsedPayload.data.primary_email_verified,
            has_password: parsedPayload.data.has_password,
            signed_up_at_millis: parsedPayload.data.signed_up_at_millis,
            profile_image_url: parsedPayload.data.profile_image_url,
            client_metadata: parsedPayload.data.client_metadata!,
            server_metadata: parsedPayload.data.server_metadata!,
          },
        });
        break;

      case "user.updated":
        await db.user.update({
          where: { id: parsedPayload.data.id },
          data: {
            display_name: parsedPayload.data.display_name,
            primary_email: parsedPayload.data.primary_email,
            primary_email_verified: parsedPayload.data.primary_email_verified,
            has_password: parsedPayload.data.has_password,
            signed_up_at_millis: parsedPayload.data.signed_up_at_millis,
            profile_image_url: parsedPayload.data.profile_image_url,
            client_metadata: parsedPayload.data.client_metadata!,
            server_metadata: parsedPayload.data.server_metadata!,
          },
        });
        break;

      case "user.deleted":
        await db.user.delete({
          where: { id: parsedPayload.data.id },
        });
        break;
      default:
        console.log("Unhandled event type:", parsedPayload);
    }

    return NextResponse.json({ message: "Webhook handled successfully" });
  } catch (e: any) {
    console.error("Error handling webhook:", e);
    return NextResponse.json(
      { error: "Failed to handle webhook:" + e.message },
      { status: 400 },
    );
  }
}
