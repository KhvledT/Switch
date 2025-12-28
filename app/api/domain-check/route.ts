import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json(
      { error: "Domain is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://rdap.org/domain/${domain}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    // 404 = domain not found = AVAILABLE
    if (res.status === 404) {
      return NextResponse.json({
        domain,
        available: true,
        status: "AVAILABLE",
      });
    }

    // 200 = domain exists = TAKEN
    if (res.ok) {
      return NextResponse.json({
        domain,
        available: false,
        status: "TAKEN",
      });
    }

    // أي حالة تانية
    return NextResponse.json(
      { error: "Unexpected RDAP response" },
      { status: res.status }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to reach RDAP service" },
      { status: 500 }
    );
  }
}
