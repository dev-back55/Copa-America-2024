//import Image from "next/image";
import FinalList from "@/components/final";
import { getFinal } from "@/lib/actions/partidos";
//import { obtenerDiaDeLaSemana } from "@/lib/utils";
//import Link from "next/link";
//import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Final Copa América 2024',
}

export default async function Final() {
  const final = await getFinal();

  return (
    <div className="mt-24 p-3 xl:max-w-6xl md:max-w-5xl xl:mx-auto">
      <FinalList />
    </div>
      );
}

