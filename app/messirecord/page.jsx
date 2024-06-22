import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'


export const metadata = {
    title: 'Messi Record',
}

export default function MessiRecord() {

    return (
    <div>
        <section className="mx-auto max-w-screen-xl gap-5 py-10 lg:py-16 px-5 bg-slate-400  mt-20">

        <h1 className="text-3xl md:text-5xl font-display mb-5 text-blue-600">Messi rompió un nuevo récord en la CONMEBOL Copa América™</h1>
        <p className="text-xl text-zinc-700"> 20 de junio de 2024. Lionel Messi llegó a 35 presencias y rompió un nuevo récord en la CONMEBOL Copa América™.</p> 
        <br/>
        <div className="flex flex-col text-blue-950">
            <p>Se convirtió en el jugador con más presencias en la historia del torneo de selecciones más antiguo del mundo.</p>
            <p>Superó al histórico arquero chileno Sergio Livingstone, quien lo había logrado en 1953.</p>
            <br/>

            <div className="text-blue-950">
                <p>Lionel Messi se convirtió el 20 de junio de 2024 en el jugador con más presencias en la historia de la CONMEBOL Copa América™: con su partido ante Canadá, el argentino llegó a 35 partidos, a lo largo de siete ediciones.</p>
                <br/>
                <p>El 10 fue titular en el seleccionado argentino en el partido inaugural de la 48° edición del torneo, ante Canadá en el Mercedes-Benz Stadium de Atlanta (Georgia).</p>
                
            </div>
            <br/>
        </div>
        
        <br/>
        <div className="text-blue-950">
        <h2 className='text-lg semibold'>1. Lionel Messi – Argentina, Delantero, capitan  – 35 partidos</h2>
        </div>
        <br/>
        <div className="text-blue-950">
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719066250/leo_nuevo_record_rexkqq.webp" 
            alt="Lionel Messi nuevo record, jugador con más partidos."
            sizes="100vw"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
        />
        </div>
        <br/>
        <div className="text-blue-950">
        <br/>
                <p>Messi debutó en la CONMEBOL Copa América™ con 20 años, cuando fue convocado por Alfio Basile. Sergio Batista (2011), Gerardo Martino (2015 y 2016) y Lionel Scaloni (2019, 2021 y 2024) fueron los otros entrenadores que tuvo el rosarino en este certamen.</p>
                <br/>
                <p>En las seis ediciones anteriores, Messi logró un título (2021), tres subcampeonatos (2007, 2015 y 2016), un tercer puesto (2019) y en 2011 llegó hasta cuartos de final.</p>
        </div>
        <br/>
        <div className="text-blue-950">
            <h3 className='text-lg semibold'>Partidos y goles del torneo CONMEBOL Copa América™</h3>
        </div>
        <div className="text-blue-950">
            <ul>
                <li>· Venezuela 2007: seis partidos, dos goles.</li>
                <li>· Argentina 2011: cuatro partidos, sin goles.</li>
                <li>· Chile 2015: seis partidos, un gol.</li>
                <li>· Estados Unidos 2016: cinco partidos, cinco goles.</li>
                <li>· Brasil 2019: seis partidos, un gol.</li>
                <li>· Brasil 2021: siete partidos, cuatro goles.</li>
                <li>· Estados Unidos 2024 (en proceso): 1 partido</li>
            </ul>
            <br/>
            <p>Total: 35 partidos, 13 goles</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        
        </section>
    </div>
  )
}