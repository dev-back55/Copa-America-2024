import GruposList from '@/components/grupos-list';

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
