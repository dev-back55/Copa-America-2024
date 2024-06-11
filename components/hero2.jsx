"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroMain() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const competitionDate = new Date("2024-06-20T21:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = competitionDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="mt-20 bg-[url('/images/hero-bg-grande.webp')] bg-cover max-w-6xl mx-auto">
    <section className="text-white">
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl">
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl font-bold uppercase">Siente la Grandeza</h1>
            <p className="mt-2 text-xl font-light">Vivi los mejores momento de la Copa America 2024™</p>
            <Link href="/fasegrupos">
            <Button className="mt-4 bg-[#e10600] text-white">Comienza Ahora</Button>
            </Link>
          </div>
          <Image
            alt="copa america logo"
            loading="lazy"
            width="180"
            height="56"
            decoding="async"
            className="text-transparent"
            src="/images/copa-america.webp"
          />
          <div className="flex gap-2 justify-around sm:gap-3 bg-royal-blue py-4 sm:py-3">
            <div className="bg-navy-blue rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex flex-col justify-center items-center text-center">
              <div className="text-3xl font-bold">{countdown.days}</div>
              <div className="text-sm leading-5">días</div>
            </div>
            <div className="bg-navy-blue rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex flex-col justify-center items-center text-center">
              <div className="text-3xl font-bold">{countdown.hours}</div>
              <div className="text-sm leading-5">horas</div>
            </div>
            <div className="bg-navy-blue rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex flex-col justify-center items-center text-center">
              <div className="text-3xl font-bold">{countdown.minutes}</div>
              <div className="text-sm leading-5">min</div>
            </div>
            <div className="bg-navy-blue rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex flex-col justify-center items-center text-center">
              <div className="text-3xl font-bold">{countdown.seconds}</div>
              <div className="text-sm leading-5">seg</div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y:-100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
          <Image
            alt="copa america pajaro loco"
            loading="lazy"
            width="180"
            height="56"
            decoding="async"
            className="text-transparent"
            src="/images/pajaroloco.webp"
          />
          </motion.div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 mx-auto py-3 md:py-6 px-3 md:px-0">
          <div className="w-full md:w-2/3 relative h-1/2 md:h-full">
            <div className="rounded-lg overflow-hidden relative h-full"> 
              <Link href="/estadios">
              <Image
                src="/images/estadios.webp"
                alt="Estadios de la CONMEBOL"
                sizes="100vw"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <h1 className="text-2xl lg:text-3xl">Estadios de la CONMEBOL Copa América 2024™</h1>
              </div>
              </Link>
            </div>
          </div>
      <div className="flex flex-col gap-6 w-full md:w-1/3 h-1/2 md:h-full flex-1">
        <div className="rounded-lg overflow-hidden relative h-full">
          <Link href="/top3jugadores">
          <Image
            src="/images/capitanes-1080.webp"
            alt="Top 3: Los jugadores con más partidos"
            width={600}
            height={300}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 p-3 text-white">
            <h1 className="text-2xl lg:text-3xl">
              Top 3: Los jugadores con más partidos
            </h1>
          </div>
          </Link>
        </div>
        <div className="w-full rounded-lg overflow-hidden relative h-auto">
          <Link href="/ultimocampeon">
          <Image
            src="/images/ultimocampeon.webp"
            alt="Hero Background"
            sizes="100vw"
            
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 p-3 text-white">
            <h1 className="text-2xl lg:text-3xl">
              El último CAMPEÓN
            </h1>
          </div>
          </Link>
        </div>
      </div>
    </div>
      </div>
    </section>
    </div>
  )
}
/*
bg-[#0c1a3e]
*/