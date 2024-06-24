import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-8 px-4 md:px-6">
      <div className="max-w-[400px]">
        <Image src="/images/52910.webp" width={400} height={300} alt="404 Illustration" className="mx-auto" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Oops! Página no encontrada.</h1>
        <p className="text-muted-foreground">La página solicitada no existe o fue eliminada.</p>
      </div>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
      >
        Regresar a Inicio
      </Link>
    </div>
  )
}