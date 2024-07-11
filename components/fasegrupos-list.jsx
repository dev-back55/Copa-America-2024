import Image from "next/image";
import React from "react";
//import { faseGrupos } from "../lib/utils";
import { obtenerDiaDeLaSemana } from "../lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { getFaseGrupos } from "@/lib/actions/partidos";

export default async function FasegruposList() {
const faseGrupos = await getFaseGrupos();

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center mb-6">
        <div>
          <h2 className="text-2xl font-display">Fase de grupos</h2>
          <p className="text-zinc-500">20 de junio al 2 de julio</p>
          <p className="text-zinc-500 text-sm">Time zone Buenos Aires (GMT-3)</p>
          {/* <Link href="https://futbol-libre.org/tv1/" target="_blank">
            <Button className="mt-4 gap-1 bg-red-600">Ver Partidos</Button>
          </Link> */}
        </div>
      </div>
      <ul className="space-y-6 lg:space-y-4">

        {faseGrupos.map((partido, index) => (
          
          <li key={index}>
          <div className="bg-background rounded-xl border border-orange-300 grid grid-cols-4 items-center lg:p-5">
            <div className="col-span-full lg:col-span-1 p-5 lg:p-0">
              <div className="font-semibold">Grupo {partido.grupo}</div>
              <div className="text-zinc-500">
                {partido.estadio}
              </div>
            </div>
            <div className="col-span-full lg:col-span-2 hidden lg:grid lg:grid-cols-[1fr_128px_1fr]">
              <div className="flex gap-3 items-center md:justify-end">
                
                <span className="text-lg text-right capitalize">{partido.pais1}</span>
                
                <div className="team-flag">
                  <Image
                    alt={partido.pais1}
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    className="rounded-full text-transparent"
                    src={partido.bandera1}
                    />
                </div>
                <span className="flex text-lg font-semibold">{partido.gol1}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>
                   {obtenerDiaDeLaSemana(partido.fecha).slice(0, 3)} - {partido.fecha.slice(0, 5)}
                </p>
                <p>
                    {partido.hora} hs
                </p>
              </div>
              <div className="flex gap-3 items-center">
              <span className="flextext-lg font-semibold">{partido.gol2}</span>
                <div className="team-flag">
                  <Image
                    alt={partido.pais2}
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    className="rounded-full text-transparent"
                    src={partido.bandera2}
                    
                    />
                </div>
                <span className="text-lg capitalize">{partido.pais2}</span>
              </div>
            </div>
            <div className="col-span-full lg:hidden flex items-center px-5">
              <div className="flex flex-col gap-3 flex-grow mb-3">
                <div className="flex gap-3 items-center">
                  <div className="team-flag">
                    <Image
                      alt="alternative text"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      className="rounded-full text-transparent"
                      src={partido.bandera1}
                      
                      />
                  </div>
                  <div className="flex-grow capitalize">{partido.pais1}</div>
                  <span className="flex text-lg font-semibold">{partido.gol1}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="team-flag">
                    <Image
                      alt="alternative text"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      className="rounded-full text-transparent"
                      src={partido.bandera2}
                      
                      />
                  </div>
                  <div className="flex-grow capitalize">{partido.pais2}</div>
                  <span className="flex text-lg font-semibold">{partido.gol2}</span>
                </div>
              </div>
              <div className="rounded-xl px-3 py-2 text-center font-semibold">
                <div className="text-md uppercase md:text-xl">{obtenerDiaDeLaSemana(partido.fecha).slice(0, 3)} - {partido.fecha.slice(0, 5)}</div>
                <div className="text-md md:text-xl">{partido.hora} hs</div>
              </div>
            </div>
            {partido.resumen != "#" &&
            <div className="col-span-full lg:col-span-1 lg:text-right text-center p-5 lg:p-0">
              <Link href={partido.resumen} target="_blank">
                <Button className="gap-1 bg-green-500">Ver Resumen</Button>
              </Link>
            </div>
            }
          </div>
        </li>
        ))
        }
        </ul>
        </div>
      );
}
