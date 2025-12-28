import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json(
      { error: "domain is required" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.godaddy.com/v1/domains/available?domain=${domain}`,
    {
      method: "GET",
      headers: {
        Authorization: `sso-key ${process.env.GODADDY_API_KEY}:${process.env.GODADDY_API_SECRET}`,
      },
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
