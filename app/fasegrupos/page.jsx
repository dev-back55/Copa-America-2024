import React from 'react'
import FasegruposList from "@/components/fasegrupos-list";
import { Suspense } from 'react';

export const metadata = {
  title: 'Fase de Grupos',
}

export default function Fasegrupos() {
    
  return (
    
      <FasegruposList/>
   
  )
}
