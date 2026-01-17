import endpoints from "@/app/config/endpoints";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = endpoints().consultation;
  const body = await request.json();
  if (!body) {
    return NextResponse.json(
      { success: false, message: "Bad input" },
      { status: 400 }
    );
  }
  try {
    const res = await fetch(url, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Request failed",
          error: data?.error,
        },
        { status: res.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: data?.message,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to book consultation" },
      { status: 500 }
    );
  }
}
