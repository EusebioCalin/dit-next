import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "../../service/mailService";

type Email = {
  name: string,
  email: string,
  message: string
}
export async function POST(request: NextRequest) {

  const data: Email = await request.json()
  try {
    const res = await sendMail(
      data.name,
      data.email,
      data.message
    );
    console.log('res', res)
  } catch (e) {
    console.log('e', e)
  }
  return Response.json(data)
}