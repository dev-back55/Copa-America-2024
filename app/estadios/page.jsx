import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: 'Estadios de la Copa América 2024',
}

export default function Estadios() {

    return (
      <div className="flex flex-col items-center mt-20 justify-center w-full h-full p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              width="660" 
              height="415" 
              src="https://www.youtube.com/embed/fqgTmYMYPPg?si=hnMZm-IH4LzShtyE" 
              title="Estadios del la Copa America 2024" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
          <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-bold">Los INCREÍBLES estadios de la COPA AMÉRICA 2024</h2>
            <p className="text-gray-500 dark:text-gray-400">La Copa América 2024 se jugará en Estados Unidos y tendrá como sedes a algunos de los estadios más modernos y sorprendentes del mundo. Aquí repasamos los 14 estadios elegidos para el torneo, sus tecnologías y qué partidos se jugarán en cada uno.</p>
            <p className="text-gray-500 dark:text-gray-400">Gentileza @JuanPabloZaracho.</p>
          </div>
        </div>
       
        <div className="w-full max-w-4xl mt-14">
        <h2 className="text-2xl font-bold mb-1">Estadios y ciudades sedes</h2>
          <div className="aspect-video rounded-lg">
            <Image 
              src="/images/estadiosmapa.webp"
              alt="Mapa de los estadios de la Copa America 2024"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={1920}
              height={1080}
            />
          </div>  

          <div className="mt-4 space-y-2">
              
              <p className="text-gray-500 dark:text-gray-400">La CONMEBOL Copa América 2024™ se celebrará en 14 ciudades de los Estados Unidos, desde el 20 de junio hasta el 14 de julio de 2024. Cada sede acogerá entre 2 y 3 partidos.</p>
              <p className="text-gray-500 dark:text-gray-400">Los 14 estadios, distribuidos en 10 estados en la Costa Este, la Zona Central, y la Costa Oeste, se adornarán con los colores y la imagen de esta nueva edición del torneo de selecciones más antiguo y apasionante del mundo.</p>
              <p className="text-gray-500 dark:text-gray-400">En esta oportunidad, la competencia contará con 32 partidos durante los 25 días de competición, y participarán 16 equipos: 10 de la CONMEBOL y 6 de la Concacaf como invitados.</p>

              <div className="text-blue-700 mt-2">
              <h3 className="text-2xl font-bold mb-1">COSTA OESTE</h3>
              <p className="text-zinc-500">GMT -7H</p>
              <ul>
                  <li>Santa Clara, CA, Levi’s® Stadium</li>
                  <li>Las Vegas, NV, Allegiant Stadium</li>
                  <li>Inglewood, CA, SoFi Stadium</li>
                  <li>Glendale, AZ, State Farm Stadium</li>
              </ul>
              </div>

              <div className="mt-2">
              <h3 className="text-2xl font-bold mb-1">CENTRO</h3>
              <p className="text-zinc-500">GMT -5H</p>
              <ul>
                  <li>Kansas City, KS, Children’s Mercy Park</li>
                  <li>Kansas City, MO, GEHA Field at Arrowhead Stadium</li>
                  <li>Austin, TX, Q2 Stadium</li>
                  <li>Houston, TX, NRG Stadium</li>
                  <li>Arlington, TX, AT&T Stadium</li>
              </ul>
              </div>

              <div className="text-red-600 mt-2">
              <h3 className="text-2xl font-bold mb-1">COSTA ESTE</h3>
              <p className="text-zinc-500">GMT -4H</p>
              <ul>
                  <li>East Rutherford, NJ, MetLife Stadium</li>
                  <li>Charlotte, NC, Bank of America Stadium</li>
                  <li>Atlanta, GA, Mercedes-Benz Stadium {'  '}
                  <Badge>Apertura</Badge>
                  </li>
                  <li>Orlando, FL, Inter&Co Stadium</li>
                  <li>Miami Gardens, FL, Hard Rock Stadium {' '}
                  <Badge>Final</Badge>
                  </li>
              </ul>
              </div>

            </div>
          </div>
      </div>
    )
  }
