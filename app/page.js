import Carrusel from "@/components/bannerscroll";
import Convocados from "@/components/convocados";
import FasegruposList from "@/components/fasegrupos-list";
import GruposList from "@/components/grupos-list";
import HeroMain from "@/components/hero2";



export default function Home() {
  return (
      <>
        <HeroMain />
        <Carrusel/>
        <GruposList />
        <Convocados />
      </>
            
    
  );
}
