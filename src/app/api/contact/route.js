import { NextResponse } from "next/server";
import { sendEmail } from "@/features/contact/services/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, service, email, message, locale } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { errorCode: "requiredFields" },
        { status: 400 }
      );
    }

    await sendEmail({ name, service, email, message, locale });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mailer Error:", error);
    return NextResponse.json({ errorCode: "sendFailed" }, { status: 500 });
  }
}
