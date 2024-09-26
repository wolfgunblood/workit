
import crypto from "crypto";
import { db } from "@/server/db";

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    if (!secret) {
      throw new Error("Webhook signature secret is not defined.");
    }
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8",
    );
    const signature = Buffer.from(req.headers.get("X-Signature") ?? "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    if (eventType === "order_created") {
      const user_id = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";
      if (isSuccessful) {
        // Upgrade user's plan to "PRO"
        await db.user.update({
          where: { id: user_id },
          data: {
            plan_type: "PRO", // Assuming plan_type is an enum field in your User model
          },
        });
      }
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
