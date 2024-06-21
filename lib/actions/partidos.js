"use server";

import dbConnect from "../dbConnect";
import FaseGrupos from "@/models/faseGrupos";
import Paises from "@/models/paises";


export async function getFaseGrupos() {
    await dbConnect()
    const faseGrupos = await FaseGrupos.find()
    return faseGrupos
}

export async function getPaises() {
    await dbConnect()
    const paises = await Paises.find()
    return paises
}