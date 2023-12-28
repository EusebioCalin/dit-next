import { NextRequest } from "next/server";

export async function GET(Request: NextRequest) {
  console.log('aici')
  return new Response("This is a new API route");
}