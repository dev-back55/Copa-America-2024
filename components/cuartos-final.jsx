import Image from "next/image";
import { obtenerDiaDeLaSemana } from "@/lib/utils";
import { getCuartos } from "@/lib/actions/partidos";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Cuartos de final',
}

export default async function Cuartos() {
  const cuartos = await getCuartos();

  return (
    <div className="mt-10 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
        <h2 className="text-2xl font-display">Cuartos de final</h2>
        
          <p className="text-zinc-500">4 de julio al 6 de julio</p>
          <p className="text-zinc-500 text-sm">Time zone Buenos Aires (GMT-3)</p>
          <Link href="https://futbol-libre.org/tv1/" target="_blank">
            <Button className="mt-4 lg:mt-0 gap-1 bg-red-600">Ver Partidos</Button>
          </Link>
       
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
        {cuartos.map((partido, index) => (
          <li key={index} className="flex flex-col items-center bg-background rounded-xl border border-green-300 p-4">
            {/* Desktop View */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1fr] gap-4 w-full">
              <div className="w-full flex flex-col items-center gap-3">
                <Image
                  alt={partido.pais1}
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  className="rounded-full bg-white"
                  src={partido.bandera1}
                />
                <span className="text-base text-center capitalize">{partido.pais1}</span>
                <span className="text-md font-semibold">{partido.gol1}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-base text-center">{partido.fecha.slice(0, 5)}</p>
                <p className="text-base text-center">{partido.hora}hs</p>
              </div>
              <div className="w-full flex flex-col items-center gap-3">
                <Image
                  alt={partido.pais2}
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  className="rounded-full bg-white"
                  src={partido.bandera2}
                />
                <span className="text-base text-center capitalize">{partido.pais2}</span>
                <span className="text-md font-semibold">{partido.gol2}</span>
              </div>
            </div>
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col items-center justify-center gap-4 w-full">
              <div className="flex items-center justify-center w-full gap-2">
                <Image
                  alt={partido.pais1}
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  className="rounded-full bg-white"
                  src={partido.bandera1}
                />
                <div className="flex-grow text-lg text-center capitalize">{partido.pais1}</div>
                <span className="flex text-lg font-semibold">{partido.gol1}</span>
              </div>
              <div className="flex items-center justify-center w-full gap-2">
                <Image
                  alt={partido.pais2}
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  className="rounded-full bg-white"
                  src={partido.bandera2}
                />
                <div className="flex-grow text-lg text-center capitalize">{partido.pais2}</div>
                <span className="flex text-lg font-semibold">{partido.gol2}</span>
              </div>
              <div className="text-center mt-2">
                <div className="text-md uppercase">{obtenerDiaDeLaSemana(partido.fecha).slice(0, 3)} - {partido.fecha.slice(0, 5)}</div>
                <div className="text-md">{partido.hora} hs</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
