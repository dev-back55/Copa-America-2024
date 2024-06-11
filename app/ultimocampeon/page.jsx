import React from 'react'

export default function Ultimocampeon() {

    return (
      <div className="flex flex-col items-center mt-20 justify-center w-full h-full p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            className="w-full h-full"
            width="660" 
            height="415" 
            src="https://www.youtube.com/embed/gUOPOXo50pU?si=L-QsA-LbeGwMMw1-" 
            title="Último campeón del la Copa America" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          </div>
          <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-bold">Final Copa América 2021 ARGENTINA CAMPEÓN - Resumen</h2>
            <p className="text-gray-500 dark:text-gray-400">La Copa América 2021 se jugó en Brasil y Argentina se consagró como el campeón de la copa, logrando así su decimoquinto título.</p>
            <p className="text-gray-500 dark:text-gray-400">Gentileza @RpTimaoTV.</p>
          </div>
        </div>
      </div>
    )
  }
