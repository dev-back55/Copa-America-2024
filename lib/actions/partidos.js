"use server";

import dbConnect from "../dbConnect";
import FaseGrupos from "@/models/faseGrupos";
import Paises from "@/models/paises";
import ListVideos from "@/models/listVideos";
import { revalidatePath } from 'next/cache';


export async function getFaseGrupos() {
    await dbConnect()
    const faseGrupos = await FaseGrupos.find()
    revalidatePath('/fasegrupos')
    return faseGrupos
}

export async function getPaises() {
    await dbConnect()
    const paises = await Paises.find()
    revalidatePath('/grupos')
    return paises
}

export async function getListVideos() {
    await dbConnect()
    const listVideos = await ListVideos.find()
    revalidatePath('/media')
    return listVideos
}