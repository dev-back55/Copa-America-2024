import GruposList from '@/components/grupos-list'
//import { getPaises } from "@/lib/actions/partidos";


export const metadata = {
  title: 'Grupos de la Copa América 2024',
}

export default async function Grupos() {
  
  return (
    <div>
        <GruposList />
    </div>
  )
}
