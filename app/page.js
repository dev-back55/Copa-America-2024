import Carrusel from "@/components/bannerscroll";
import Convocados from "@/components/convocados";
import GruposList from "@/components/grupos-list";
import HeroMain from "@/components/hero2";
//import { getPaises } from "@/lib/actions/partidos";


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
