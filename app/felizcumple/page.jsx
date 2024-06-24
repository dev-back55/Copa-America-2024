import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

export default async function FelizCumple() {
  
  const titulo="¡Feliz Cumple!🐑​​🇦🇷🏆​💯​⚽​​" 
  const descrip="¡FELICES 37, CAPITÁN! 🩵​🤍​🩵 LAS ESTRELLAS TE VIERON GANAR ⭐️⭐️⭐️ ¡GRACIAS POR TANTAS ALEGRIAS! 🩵​🤍​🩵" 
  const url="https://res.cloudinary.com/dqg1afwty/video/upload/v1719240810/LAS_ESTRELLAS_TE_VIERON_GANAR_%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_FELICES_37_CAPIT%C3%81N_bhfr2x.mp4"

  

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 bg-blue-900 xl:max-w-6xl md:max-w-5xl lg:mx-auto rounded-lg">
        <Image 
              src={"https://res.cloudinary.com/dqg1afwty/image/upload/v1719241652/lionel-messi_ksbxft.webp"}
              alt="feliz cumple leo messi"
              sizes="100vw"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
        />
    <div className="flex flex-col justify-center align-center">
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 gap-1 bg-cyan-600">¡Feliz Cumple Leo!​​</Button>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>{titulo}</DialogTitle>
            <DialogDescription>
                {descrip}
            </DialogDescription>
            </DialogHeader>
            <video 
                src={url} 
                width="auto"
                height="auto"
                controls
                autoPlay
                className="rounded-lg">
            </video>
           
        </DialogContent>
    </Dialog>

    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 gap-1 bg-cyan-600">¡Feliz Cumple desde Rosario!​​</Button>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>¡FELICES 37, CAPITÁN!🩵​🤍​🩵</DialogTitle>
            <DialogDescription>
                Te saludan mas de 6000 niños desde Rosario ¡Feliz cumple Leo!🐑​​🇦🇷🏆​💯​⚽​
            </DialogDescription>
            </DialogHeader>
            <video 
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1719241058/feliz_cumple_goat_t3u1tq.mp4" 
                width="auto"
                height="auto"
                controls
                autoPlay
                className="rounded-lg">
            </video>
           
        </DialogContent>
    </Dialog>
    </div>
  </div>
  </div>  
    
  )
}
