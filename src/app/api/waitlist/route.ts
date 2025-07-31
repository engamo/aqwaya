import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY as string;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID as string;
    const DATACENTER = process.env.DATACENTER as string;

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: { FNAME: name || "" },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.detail || "Subscription failed" }, { status: 400 });
    }

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}