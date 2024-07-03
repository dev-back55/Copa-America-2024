import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'


export const metadata = {
    title: 'Designaciones Arbitros',
}

export default function Arbitros() {

    return (
    <div>
      <section className="mx-auto max-w-screen-xl gap-5 py-10 lg:py-16 px-5 bg-slate-400  mt-20">

        <h2 className="text-3xl md:text-5xl font-display mb-5 text-blue-600">CONMEBOL Copa América USA 2024™: Árbitros para Argentina-Ecuador y Venezuela-Canadá</h2>
        <p className="text-xl text-zinc-700">3 de julio de 2024. Designación de árbitros para los dos primeros partidos en Cuartos de Final de la CONMEBOL Copa América 2024™</p> 
        <br/>
        <div className="text-blue-950">
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1720029593/arbitros_cr4d1m.webp" 
            alt="designaciones arbitros"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        </div>
        <br/>
        
        <div className="flex flex-col text-blue-950">
            <p>La Comisión de Árbitros de la CONMEBOL dio a conocer la designación de árbitros para los dos primeros partidos de Cuartos de Final de la CONMEBOL Copa América USA 2024™.</p>
            <p>Los partidos en cuestión son: Argentina vs. Ecuador el 4 de julio y Venezuela vs. Canadá 5 de julio.</p>
            <br/>

        </div>
        
        <br/>
        <div className="text-blue-950">
        <h3 className='text-lg semibold'>Argentina vs. Ecuador</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1720031183/FIDEO_DIMARIA_exes7r.webp" 
            alt="Julian Alvarez foto gol"
            sizes="100vw"
              width={700}
              height={350}
              className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>Árbitro: Andrés Matonte {'(URU)'} Árbitro asistente N°1: Nicolás Tarán {'(URU)'} </p>
                
                <p>Árbitro asistente N°2: Martín Soppi {'(URU)'} Cuarto árbitro: Gustavo Tejera {'(URU)'} Quinto árbitro: Pablo Llarena {'(URU)'}</p>
                
                <p>VAR: Leodán González {'(URU)'} AVAR: Richard Trinidad {'(URU)'} AVAR 2: Christian Ferreyra {'(URU)'}</p>

                <p>Asesor de árbitros: Manuel Bernal {'(PAR)'} Quality Manager: Víctor H. Carrillo{'(PER)'}</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        <div className="text-blue-950">
        <h3 className="text-lg semibold">Venezuela vs. Canadá</h3>
        </div>
        <br/>
        <Image 
            src="https://res.cloudinary.com/dqg1afwty/image/upload/v1720031307/VINOTINTO_ziwptr.webp" 
            alt="Christian Pulisic"
            sizes="100vw"
            width={700}
            height={350}
            className="w-full h-auto object-cover"
        />
        <div className="text-blue-950">
        <br/>
                <p>Árbitro: Wilton Sampaio {'(BRA)'} Árbitro asistente N°1: Bruno Pires {'(BRA)'}</p>
                <p>Árbitro asistente N°2: Bruno Boschilia {'(BRA)'} Cuarto árbitro: Juan Benítez {'(PAR)'} Quinto árbitro: Milcíades Saldidar {'(PAR)'}</p>
                <p>VAR: Rodolpho Toski {'(BRA)'} AVAR: Daniel Nobre {'(BRA)'} AVAR 2: Pablo Goncalves {'(BRA)'}</p>
                <p>Asesor de árbitros: Gregory Barkey {'(USA)'} Quality Manager: Roberto Silvera {'(URU)'}</p>
        </div>
        <br/>
        <Separator/>
        <br/>
        
      </section>
    </div>
  )
}