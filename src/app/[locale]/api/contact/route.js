import { NextResponse } from "next/server";
import { sendEmail } from "@/features/contact/services/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { errorCode: "requiredFields" }, // Zwracamy czysty klucz do JSONa
        { status: 400 }
      );
    }

    await sendEmail(body); // przekazuje czyste dane, bez locale!

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mailer Error:", error);
    return NextResponse.json({ errorCode: "sendFailed" }, { status: 500 });
  }
}
