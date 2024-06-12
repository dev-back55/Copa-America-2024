"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-950/50 backdrop-blur-md text-gray-50">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <div className="relative w-[50px] h-[50px]">
            <Image 
            src="/images/logo-circulo.webp" 
            alt="logo copa america"
            fill
            sizes="100vw"
            className="w-full h-full object-cover"
            />
                    
          </div>
            <span className="text-lg font-bold">Copa América 2024</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-md font-semibold lg:flex">
          <Link href="/" className="hover:text-gray-300" prefetch={false}>
            Inicio
          </Link>
          <Link href="/grupos" className="hover:text-gray-300" prefetch={false}>
            Grupos
          </Link>
          <Link href="/fasegrupos" className="hover:text-gray-300" prefetch={false}>
            Fase Grupos
          </Link>
          <Link href="/cuartos" className="hover:text-gray-300" prefetch={false}>
            Cuartos
          </Link>
          <Link href="/semis" className="hover:text-gray-300" prefetch={false}>
            Semis
          </Link>
          <Link href="/final" className="hover:text-gray-300" prefetch={false}>
            Final
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Video/Fotos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"> </path>
            </svg> : <MenuIcon className="h-6 w-6" />}
            
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 z-50 w-full bg-gray-950 px-4 py-4 lg:hidden">
          <nav className="grid gap-4">
            <Link href="/" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Inicio
            </Link>
            <Link href="/grupos" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Grupos
            </Link>
            <Link href="/fasegrupos" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Fase Grupos
            </Link>
            <Link href="/cuartos" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Cuartos
            </Link>
            <Link href="/semis" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Semis
            </Link>
            <Link href="/final" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Final
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false} onClick={handleMenuToggle}>
              Video/Fotos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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


