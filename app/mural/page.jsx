import React from 'react'

export default function Mural() {
  return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-24">
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h3 className="text-3xl font-bold uppercase">El Mural más Grande del Mundo</h3>
            <p className="mt-2 text-xl font-light">EL IMPRESIONANTE MURAL DE LEO MESSI 😍</p>
            <p className="mt-2 text-xl font-light">Está en un edificio de Santa Fe y llevó un año y dos meses de trabajo con pintura en spray.</p>
            <p className="mt-2 text-xl font-light">El nivel de detalle es impresionante. 🎥 📸 @cobreart</p>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
            
            <video 
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1719595925/EL_IMPRESIONANTE_MURAL_DE_LEO_MESSI_mutt0h.mp4" 
                width="auto"
                height="auto"
                controls
                className="rounded-lg">
            </video>
            
            
          </div>  
        </div>
  )
}
