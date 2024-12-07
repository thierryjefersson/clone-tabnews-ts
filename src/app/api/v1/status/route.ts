import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  return NextResponse.json({ chave: "Primeiro endpoint" }, { status: 200 });
};
