import { getPaises } from "@/lib/actions/partidos";
import { NextResponse } from "next/server";

export async function GET() {
    const paises = await getPaises();
    return NextResponse.json(paises);
}