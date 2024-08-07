"use server";

import dbConnect from "../dbConnect";
import FaseGrupos from "@/models/faseGrupos";
import Paises from "@/models/paises";
import Cuartos from "@/models/cuartos";
import Semis from "@/models/semis";
import Final from "@/models/final";
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

export async function getCuartos() {
    await dbConnect()
    const cuartos = await Cuartos.find()
    revalidatePath('/cuartos')
    return cuartos
}

export async function getSemis() {
    await dbConnect()
    const semis = await Semis.find()
    revalidatePath('/semis')
    return semis
}

export async function getFinal() {
    await dbConnect()
    const final = await Final.find()
    revalidatePath('/final')
    return final
}