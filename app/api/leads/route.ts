import { NextResponse } from "next/server";
import { contactFormSchema } from "@/src/lib/forms";
import { appendLead } from "@/src/lib/lead-storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const parsed = contactFormSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the inquiry details and try again." },
      { status: 400 },
    );
  }

  const id = await appendLead("contact-leads", parsed.data);
  return NextResponse.json({ id }, { status: 201 });
}
