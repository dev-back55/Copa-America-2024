import { getFaseGrupos } from "@/lib/actions/partidos";
import { NextResponse } from "next/server";

export async function GET() {
    const faseGrupos = await getFaseGrupos();
    return NextResponse.json(faseGrupos);
}