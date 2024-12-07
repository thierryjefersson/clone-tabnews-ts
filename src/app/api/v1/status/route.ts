import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ chave: "Primeiro endpoint" }, { status: 200 });
};
