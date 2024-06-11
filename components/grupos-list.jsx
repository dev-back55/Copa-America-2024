"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {agruparPaisesPorGrupo} from '@/lib/utils'
import { paises } from "@/lib/utils"
import Image from "next/image";



export default function GruposList() {

// Uso de la función para obtener los arrays agrupados
const paisesPorGrupo = agruparPaisesPorGrupo(paises);

// Ejemplo de acceso a los grupos
const grupoA = paisesPorGrupo['A'];
const grupoB = paisesPorGrupo['B'];
const grupoC = paisesPorGrupo['C'];
const grupoD = paisesPorGrupo['D'];



  return (
    <seccion className="container">
      <div className="bg-blue-900 xl:max-w-6xl md:max-w-5xl lg:mx-auto mt-20 p-5">
        <h2 className="text-2xl font-display">Grupos</h2>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-blue-900 xl:max-w-6xl md:max-w-5xl lg:mx-auto">
      <Card className="bg-blue-800 text-white">
        <CardHeader className="flex flex-row justify-between ">
          <CardTitle>Grupo A</CardTitle>
          <div className="text-md text-gray-200">Pts.</div>
        </CardHeader>

          {grupoA.map((pais, index) => (    
          <CardContent key={index} className="grid gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Avatar>
                    <Image 
                        src={pais.bandera} 
                        alt={pais.pais} 
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={48}
                        height={48}
                        />
                    <AvatarFallback>D1</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-semibold">{pais.pais}</div>
                    <div className="text-sm text-gray-200">Partidos Jugados: {pais.pj}</div>
                </div>
                </div>
                <div className="text-md text-gray-200">
                {/*<ThumbsUpIcon className="w-5 h-5 mr-1" />*/}
                    {pais.pt}
                </div>
            </div>
          </CardContent>
          ))}  
      </Card>

      <Card className="bg-blue-800 text-white">
      <CardHeader className="flex flex-row justify-between ">
          <CardTitle>Grupo B</CardTitle>
          <div className="text-md text-gray-200">Pts.</div>
        </CardHeader>
        {grupoB.map((pais, index) => (    
        <CardContent key={index} className="grid gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Avatar>
                    <Image 
                        src={pais.bandera} 
                        alt={pais.pais} sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={48}
                        height={48}
                        />
                    <AvatarFallback>D1</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-semibold">{pais.pais}</div>
                    <div className="text-sm text-gray-200">Partidos Jugados: {pais.pj}</div>
                </div>
                </div>
                <div className="text-md text-gray-200">
                {/*<ThumbsUpIcon className="w-5 h-5 mr-1" />*/}
                    {pais.pt}
                </div>
            </div>
        </CardContent>
        ))}  
      </Card>

      <Card className="bg-blue-800 text-white">
      <CardHeader className="flex flex-row justify-between ">
          <CardTitle>Grupo C</CardTitle>
          <div className="text-md text-gray-200">Pts.</div>
        </CardHeader>
        {grupoC.map((pais, index) => (    
        <CardContent key={index} className="grid gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Avatar>
                    <Image 
                        src={pais.bandera} 
                        alt={pais.pais} sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={48}
                        height={48}
                        />
                    <AvatarFallback>D1</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-semibold">{pais.pais}</div>
                    <div className="text-sm text-gray-200">Partidos Jugados: {pais.pj}</div>
                </div>
                </div>
                <div className="text-md text-gray-200">
                {/*<ThumbsUpIcon className="w-5 h-5 mr-1" />*/}
                    {pais.pt}
                </div>
            </div>
        </CardContent>
        ))}  
      </Card>

      <Card className="bg-blue-800 text-white">
      <CardHeader className="flex flex-row justify-between ">
          <CardTitle>Grupo D</CardTitle>
          <div className="text-md text-gray-200">Pts.</div>
        </CardHeader>
        {grupoD.map((pais, index) => (    
        <CardContent key={index} className="grid gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Avatar>
                    <Image 
                        src={pais.bandera} 
                        alt={pais.pais} sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        width={48}
                        height={48}
                        />
                    <AvatarFallback>D1</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-semibold">{pais.pais}</div>
                    <div className="text-sm text-gray-200">Partidos Jugados: {pais.pj}</div>
                </div>
                </div>
                <div className="text-md text-gray-200">
                {/*<ThumbsUpIcon className="w-5 h-5 mr-1" />*/}
                    {pais.pt}
                </div>
            </div>
        </CardContent>
        ))}  
      </Card>
    </div>
    </seccion>
  )
}

function FrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}