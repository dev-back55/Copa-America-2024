import React from 'react'

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
      </div>
    )
  }
