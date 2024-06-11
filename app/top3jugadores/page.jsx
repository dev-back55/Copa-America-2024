import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'

export default function Topjugadores() {

    return (
    <div>
        <section className="mx-auto max-w-screen-xl gap-5 py-10 lg:py-16 px-5 bg-slate-400  mt-20">

        <h1 className="text-3xl md:text-5xl font-display mb-5 text-blue-600">Top 3: los jugadores con más partidos en la CONMEBOL Copa América™</h1>
        <p className="text-xl text-zinc-700">Lionel Messi y Sergio Livingstone lideran el ranking de jugadores históricos del torneo de selecciones.</p> 
        <br/>
        <div className="flex flex-col text-blue-950">
            <p>Sergio Livingstone y Lionel Messi están empatados con 34 partidos cada uno.</p>
            <p>Catorce jugadores han jugado al menos 25 partidos en la CONMEBOL Copa América™.</p>
           

            <div className="text-blue-950">
                <p>Con más de un siglo de historia, la CONMEBOL Copa América™ ha sido y sigue siendo el escenario de verdaderas leyendas del fútbol sudamericano y mundial: muchos de estos jugadores han hecho historia en múltiples ediciones del torneo, disputando una gran cantidad de partidos.</p>
            </div>
            <br/>

            <div className="text-blue-950">
                <p>Revisa quiénes son los tres atletas con más juegos en la historia del torneo de selecciones más antiguo del mundo:</p>
            </div>
            <br/>
        </div>
        
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h2 className='text-lg semibold'>1. Sergio Livingstone – Chile, Arquero – 34 partidos</h2>
        </div>
        <br/>
        <div className="text-blue-950">
        <Image 
            src="/images/livingstone.webp" 
            alt="Sergio Livingstone"
            sizes="100vw"
            style={{
                width: '70%',
                height: 'auto',
              }}
              width={420}
              height={400}
        />
        </div>
        <br/>
        <div className="text-blue-950">
        <p>El legendario Sergio Livingstone reinó en solitario durante décadas como el jugador con más apariciones en la CONMEBOL Copa América™, una verdadera hazaña. Hubo 34 partidos en la cancha para el chileno a lo largo de seis ediciones.</p>
        </div>
        <br/>
        <div className="text-blue-950">
        <h3>Partidos de Sergio Livingstone por edición de la CONMEBOL Copa América™</h3>
        </div>
        
        <br/>
        
        <div className="text-blue-950">
            <ul>
                <li>1941: 4 partidos</li>
                <li>1942: 4 partidos</li>
                <li>1945: 6 partidos</li>
                <li>1947: 7 partidos1949: 7 partidos</li>
                <li>1953: 6 partidos</li>
            </ul>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h2 className='text-lg semibold'>1. Lionel Messi – Argentina, Delantero – 34 partidos</h2>
        </div>
        <br/>
        <div className="text-blue-950">
        <Image 
        src="/images/messi.webp" 
        alt="LionelMESSI"
        sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
              }}
              width={900}
              height={450}
        />
        </div>
        <br/>
        <div className="text-blue-950">
        <p>El máximo goleador de la historia de la selección argentina puede romper otro récord si es parte de la CONMEBOL Copa América Estados Unidos 2024™: podría convertirse en el jugador que más veces ha disputado el torneo. Actualmente está empatado en 34 encuentros.</p>
        </div>
        <br/>
        <div className="text-blue-950">
        <h3>Partidos de Lionel Messi por edición de la CONMEBOL Copa América™</h3>
        </div>
        <br/>
        <div className="text-blue-950">
        <ul>
        <li>2007: 6 partidos</li>
        <li>2011: 4 partidos</li>
        <li>2015: 6 partidos</li>
        <li>2016: 5 partidos</li>
        <li>2019: 6 partidos</li>
        <li>2021: 7 partidos</li>
        </ul>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
            <h2 className='text-lg semibold'>3. Zizinho – Brasil, Mediocampista – 33 partidos</h2>
        </div>
        <br/>
        
        <div className="text-blue-950">
            <Image 
            src="/images/zizinho.webp" 
            alt="Zizinho"
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
              }}
              width={880}
              height={340}
            />
        </div>
        
        <br/>

        <div className="text-blue-950">
            <p>Zizinho no solo es uno de los máximos goleadores del torneo de selecciones más antiguo del fútbol mundial, sino que también es el poseedor del récord de Brasil en partidos de la CONMEBOL Copa América™. Sus increíbles 17 goles marcados en seis ediciones son tan impresionantes como sus 33 apariciones en la competición.</p>
        </div>
        
        <br/>
        
        <div className="text-blue-950">
            <h3>Partidos de Zizinho por CONMEBOL Copa América™</h3>
        </div>

        <br/>

        <div className="text-blue-950">
        <ul>
            <li>1942: 4 partidos</li>
            <li>1945: 6 partidos</li>
            <li>1946: 5 partidos</li>
            <li>1949: 7 partidos</li>
            <li>1953: 5 partidos</li>
            <li>1957: 6 partidos</li>
        </ul>
        </div>
        <br/>
        <Separator/>
        </section>
    </div>
  )
}
