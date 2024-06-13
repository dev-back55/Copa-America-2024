import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata = {
    title: 'Último Campeón',
}

export default function Ultimocampeon() {

    return (
      <div className="mt-20 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
          <div className="flex flex-col h-max relative">
                <div className="relative">
                    <Image 
                        src="/images/ultimo-campeon.webp" 
                        alt="Argentina Campeon Copa America 2011"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={950}
                        height={634}
                    />
                    <div className="md:absolute relative inset-0 flex justify-center items-start p-6">
                        <div className="bg-black bg-opacity-60 p-4 rounded-lg flex flex-col md:flex-row items-center justify-around w-full max-w-4xl">
                            <div className="flex gap-4 items-center">
                                <Image 
                                    src="/images/argentina.webp" 
                                    alt="Bandera Argentina"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '50%',
                                    }}
                                    width={100}
                                    height={100}
                                />
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-white">Argentina</h2>
                                    <h3 className="text-xl text-gray-100">La Albiceleste</h3>
                                </div>
                            </div>
                            <div className="text-gray-100 mt-4 md:mt-0 text-center">
                                <p className="text-base font-medium">CONMEBOL COPA AMÉRICA</p>
                                <p className="text-sm">Debut: 1916</p>
                                <p className="text-sm">Participaciones: 43</p>
                            </div>
                            <div className="text-gray-100 mt-4 md:mt-0 text-center">
                                <p className="text-sm font-medium">Histórico: 127V - 41E - 33D</p>
                                <p className="text-sm">Títulos: 15 (primero en 1921 - último en 2021)</p>
                                <p className="text-sm">Máximo anotador: Lionel Messi (106 goles)</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      
      <div className="flex flex-col items-center mt-10 justify-center w-full h-full p-4 md:p-8">
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
      </div>
    )
  }
