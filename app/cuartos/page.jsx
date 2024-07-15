import Image from "next/image";
import { obtenerDiaDeLaSemana } from "@/lib/utils";
import { getCuartos } from "@/lib/actions/partidos";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Cuartos de final',
}

export default async function CuartosList() {
  const cuartos = await getCuartos();

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center mb-6">
        <div>
          <h2 className="text-2xl font-display">Cuartos de final</h2>
          <p className="text-zinc-500">4 de julio al 6 de julio</p>
          <p className="text-zinc-500 text-sm">Time zone Buenos Aires (GMT-3)</p>
        </div>
      </div>
      <ul className="space-y-6 lg:space-y-4">

        {cuartos.map((partido, index) => (
          
          <li key={index}>
          <div className="bg-background rounded-xl border border-green-300 grid grid-cols-4 items-center lg:p-5">
            <div className="col-span-full lg:col-span-1 p-5 lg:p-0">
              <div className="font-semibold">Partido {partido.partido}</div>
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
                    className="rounded-full bg-white"
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
                    className="rounded-full bg-white"
                    src={partido.bandera2}
                    
                    />
                </div>
                <span className="text-lg capitalize">{partido.pais2}</span>
              </div>
            </div>
            {/* Mobile View */}
            <div className="col-span-full lg:hidden flex items-center px-5 mb-4">
              <div className="flex flex-col gap-3 flex-grow">
                <div className="flex gap-3 items-center">
                  <div className="team-flag">
                    <Image
                      alt={partido.pais1}
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      className="rounded-full bg-white"
                      src={partido.bandera1}
                      
                      />
                  </div>
                  <p className="flex-grow capitalize">{partido.pais1}</p>
                  <span className="flex text-lg font-semibold">{partido.gol1}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="team-flag">
                    <Image
                      alt={partido.pais2}
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      className="rounded-full bg-white"
                      src={partido.bandera2}
                      
                      />
                  </div>
                  <p className="flex-grow capitalize">{partido.pais2}</p>
                  <span className="flex text-lg font-semibold">{partido.gol2}</span>
                </div>
              </div>
              <div className="rounded-xl px-3 py-2 text-center font-semibold">
                <div className="text-md uppercase md:text-xl">{obtenerDiaDeLaSemana(partido.fecha).slice(0, 3)} - {partido.fecha.slice(0, 5)}</div>
                <div className="text-md md:text-xl">{partido.hora} hs</div>
              </div>
            </div>
            {partido.resumen != "" &&
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
