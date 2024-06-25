import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'


export const metadata = {
    title: 'Primer Gol Figuras',
}

export default function PrimerGol() {

    return (
    <div>
      <section className="mx-auto max-w-screen-xl gap-5 py-10 lg:py-16 px-5 bg-slate-400  mt-20">

        <h1 className="text-3xl md:text-5xl font-display mb-5 text-blue-600">Las grandes figuras que marcaron su primer gol en la CONMEBOL Copa América™</h1>
        <p className="text-xl text-zinc-700">25 de junio de 2024. Julián Álvarez, Christian Pulisic, Darwin Núñez y Julio Enciso anotaron por primera vez en el torneo de selecciones más antiguo del mundo.</p> 
        <br/>
        <div className="text-blue-950">
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719341634/julian-alvarez_h5exgy.webp" 
            alt="Julian Alvarez primer gol"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        </div>
        <br/>
        <div className="text-blue-950">
            <ul>
                <li>· La primera fecha de la CONMEBOL Copa América 2024™ dejó nuevos goleadores en los registros.</li>
                <li>· Tres de ellos ya habían jugado el torneo: Julián Álvarez, Julio Enciso y Christian Pulisic.</li>
            </ul>
            <br/>
        </div>
        <div className="flex flex-col text-blue-950">
            <p>Ocho partidos de la CONMEBOL Copa América 2024™ se jugaron entre el 20 y el 24 de junio.</p>
            <p>En ellos, cuatro grandes jugadores lograron marcar un gol por primera vez en el torneo de selecciones más antiguo del mundo.</p>
            <br/>

        </div>
        
        <br/>
        <div className="text-blue-950">
        <h3 className='text-lg semibold'>Julian Alvarez</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719344180/julian_alvarez_campeon_yzggkk.webp" 
            alt="Julian Alvarez foto gol"
            sizes="100vw"
              width={700}
              height={350}
              className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>Campeón de la edición 2021, el delantero surgido de River Plate no había anotado en su primera edición disputada.</p>
                
                <p>En su debut tenía apenas 21 años y entró desde el banco, en el partido ante Bolivia por la Fase de Grupos.</p>
                
                <p>En 2024, marcó el primer gol de Argentina ante Canadá en el partido inaugural del torneo.</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h3 className="text-lg semibold">Christian Pulisic</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719344187/Christian-Pulisic_uf7txu.webp" 
            alt="Christian Pulisic"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>El 10 de Estados Unidos había jugado la edición de 2016, con apenas 17 años.</p>
                <p>Jugó tres partidos, ingresando desde el banco de suplentes, incluido el duelo por el tercer puesto ante Colombia.</p>
                <p>En 2024, se jugaban poco más de 2 minutos cuando la clavó al ángulo en el partido ante Bolivia.</p>
                <p>Fue el gol más rápido de Estados Unidos en toda la historia de la CONMEBOL Copa América™.</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h3 className='text-lg semibold'>Darwin Núñez</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719344626/darwin_nunez_myv5jz.webp" 
            alt="Darwin Nuñez"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>El delantero del Liverpool se perdió la edición de 2021 por lesión y tuvo su debut en el torneo en 2024.</p>
                <p>Ante Panamá, en el cierre del partido, Darwin aprovechó un rebote y con zurda logró poner el 2-0 parcial-</p>
                <p>para Uruguay, que terminaría imponiéndose por 3-1.</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h3 className='text-lg semibold'>Julio Enciso</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719344630/julio_enciso_ifqf3j.webp" 
            alt="Julio Enciso"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>La joya paraguaya debutó a los 17 años en la selección en la CONMEBOL Copa América 2021™.</p>
                <p>Ingresando en el cierre ante Bolivia en la Fase de Grupos. Enciso volvería a ingresar ante Perú, en Cuartos de Final.</p>
                <p>En la edición de 2024, ya como una de las figuras del equipo dirigido por Daniel Garnero,</p>
                <p>el volante del Brighton & Hove anotó el descuento en la caída por 2-1 ante Colombia.</p>
        </div>
        <br/>
        <Separator/>
        <br/>
      </section>
    </div>
  )
}