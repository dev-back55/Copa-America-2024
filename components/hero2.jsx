//import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Cuartos from "@/components/cuartos-final";
import Semifinales from "@/components/semifinales";
import FinalList from "@/components/final";

export default function HeroMain() {
  /*const [countdown, setCountdown] = useState({
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
          }, []);*/

  return (
    <div className="mt-20 bg-[url('/images/hero-bg-grande.webp')] bg-cover max-w-6xl mx-auto">
      <section className="text-white">
        <div className="mx-auto px-4 py-8">
          <div className="flex flex-col lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mb-3">
            <h2 className="text-xl lg:text-3xl font-bold uppercase">
              ¡ARGENTINA CAMPEON! 🏆​🇦🇷
            </h2>
            <div className="flex flex-col lg:flex-row gap-3 mt-2">
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1721085248/Captura_de_pantalla_-2024-07-15_20-02-40_xid2ga.png"
                }
                alt="argentina campeon messi"
                sizes="18vw"
                width={250}
                height={550}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1721085314/Captura_de_pantalla_-2024-07-15_20-02-34_vnmaaq.png"
                }
                alt="argentina campeon messi"
                sizes="18vw"
                width={250}
                height={550}
                className="w-full h-auto object-cover rounded-lg"
              />

              <video
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1721084787/Argentina_Campeon_Copa_America_2024_t7vp7q.mp4"
                width="350"
                height="auto"
                controls
                className="rounded-lg"
              ></video>
            </div>
          </div>

          <FinalList />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-2">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h3 className="text-xl lg:text-3xl font-bold uppercase">
                Para ir entrando en calor...
              </h3>

              <p className="mt-2 text-base lg:text-xl font-light">
                ...¡VAMOS ARGENTINA!🇦🇷...
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                ...tenemos que GANAR 🏆​🇦🇷​!
              </p>
            </div>

            <video
              src="https://res.cloudinary.com/dqg1afwty/video/upload/v1720971123/para_ir_calentando_1_vunyvu.mp4"
              width="700"
              height="auto"
              controls
              className="rounded-lg"
            ></video>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-2">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <Link href="/felizcumple">
                <h3 className="text-xl lg:text-3xl font-bold uppercase">
                  ¡El Domingo cueste lo...
                </h3>
              </Link>
              <p className="mt-2 text-base lg:text-xl font-light">
                ...que cueste, el domingo...
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                ...tenemos que GANAR 🏆​🇦🇷​!
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/3 bg-slate-500 relative">
              <Link href="/media">
                <Image
                  src={
                    "https://res.cloudinary.com/dqg1afwty/image/upload/v1720805270/202407121349_portada_ffet2k.webp"
                  }
                  alt="video tenemos que ganar"
                  sizes="40vw"
                  width={350}
                  height={650}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                  <h2 className="text-2xl lg:text-3xl">Ver Video ➡️​</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <Link href="/arbitros">
                <h3 className="text-xl lg:text-3xl font-bold uppercase">
                  Ganó Argentina pasó a la Final
                </h3>
              </Link>
              <p className="mt-2 text-base lg:text-xl font-light">
                Argentina vencio 2 a 0 a Canadá{" "}
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                Es Finalista de la CONMEBOL Copa América 2024™
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 relative">
              <Link href="/media">
                <Image
                  src={
                    "https://res.cloudinary.com/dqg1afwty/image/upload/v1720580523/FINALISTAS_n55tb9.jpg"
                  }
                  alt="Seleccion Argentina a la final"
                  sizes="100vw"
                  width={1080}
                  height={1350}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                  <h2 className="text-2xl lg:text-3xl">Ver los goles ➡️​</h2>
                </div>
              </Link>
            </div>
          </div>

          <Semifinales />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mb-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold uppercase">
                EL MUNDO DE LOS PRIMEROS
              </h2>
              <p className="mt-2 text-base lg:text-xl font-light">
                Somos América...
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                pasión, familia, amistad, somos hermanos latinoaméricanos...
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                📹 Conmebol
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
              <video
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1720378824/EL_MUNDO_DE_LOS_PRIMEROS_pv082f.mp4"
                width="auto"
                height="auto"
                controls
                className="rounded-lg"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mb-4">
            <Image
              src="https://res.cloudinary.com/dqg1afwty/image/upload/v1720188957/el_dibu_yyquww.webp"
              alt="Estadios de la CONMEBOL"
              sizes="100vw"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mb-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold uppercase">
                EL DIBU 🕺🏻​ otra vez lo hizo...
              </h2>
              <p className="mt-2 text-base lg:text-xl font-light">
                Para ver mil veces: DIBU MARTÍNEZ y sus dos atajadas
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                increibles para pasar a semi finales.
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                📹 TyCSports
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
              <video
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1720152883/PARA_VER_MIL_VECES-_DIBU_MART%C3%8DNEZ_Y_SUS_DOS_ATAJADAS_SALVADORAS_en_los_penales_donde_Argentina_pas%C3%B3_a_semis_de_la_Copa_Am%C3%A9rica_v5cvir.mp4"
                width="auto"
                height="auto"
                controls
                className="rounded-lg"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h1 className="text-xl lg:text-4xl font-bold uppercase">
                Siente la Grandeza
              </h1>
              <p className="mt-2 text-base lg:text-xl font-light">
                Vivi los mejores momento de la Copa America 2024™
              </p>
              <Link href="/cuartos">
                <Button className="mt-4 gap-1 bg-red-600">
                  Comienza ahora
                  <CheckIcon className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-slate-500 relative">
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595721/mural-3_yr3vid.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595745/mural-2_kpkzjt.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595768/mural-4_hkr6pu.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595801/mural-6_vvkn41.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595870/mural-5_ruyxy9.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dqg1afwty/image/upload/v1719595819/mural-7_ftel4h.webp"
                }
                alt="feliz cumple leo messi"
                sizes="100vw"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <Link href="/mural">
                <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                  <h2 className="text-2xl lg:text-3xl">
                    El Mural más Grande del Mundo ➡️​
                  </h2>
                </div>
              </Link>
            </div>

            {/*<Image
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
          </motion.div>*/}
          </div>

          <Cuartos />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <Link href="/arbitros">
                <h3 className="text-xl lg:text-3xl font-bold uppercase">
                  Árbitros para Argentina-Ecuador y Venezuela-Canadá
                </h3>
              </Link>
              <p className="mt-2 text-base lg:text-xl font-light">
                Designación de árbitros para los dos primeros partidos en
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                Cuartos de Final de la CONMEBOL Copa América 2024™
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 relative">
              <Link href="/arbitros">
                <Image
                  src={
                    "https://res.cloudinary.com/dqg1afwty/image/upload/v1720029593/arbitros_cr4d1m.webp"
                  }
                  alt="arbitros designacion"
                  sizes="100vw"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                  <h2 className="text-2xl lg:text-3xl">
                    Designación de Árbitros ➡️​
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold uppercase">
                Todos los goles de la 1er ronda
              </h2>
              <p className="mt-2 text-base lg:text-xl font-light">
                Los mejores momentos de la primera etapa de la fase de grupos.
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                Las jugadas y los goles.
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                📹 Conmebol Copa América 2024™
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
              <video
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1719455482/TODOS_LOS_GOLES_DE_LA_1er_RONDA_caqvsd.mp4"
                width="auto"
                height="auto"
                controls
                className="rounded-lg"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <Link href="/felizcumple">
                <h3 className="text-xl lg:text-3xl font-bold uppercase">
                  ¡Feliz Cumple Leo 👑​⚽​🏆​🇦🇷​!
                </h3>
              </Link>
              <p className="mt-2 text-base lg:text-xl font-light">
                Para el más grande...
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                Copa América 2024 te dedica...
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 relative">
              <Link href="/felizcumple">
                <Image
                  src={
                    "https://res.cloudinary.com/dqg1afwty/image/upload/v1719241652/lionel-messi_ksbxft.webp"
                  }
                  alt="feliz cumple leo messi"
                  sizes="100vw"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                  <h2 className="text-2xl lg:text-3xl">
                    ¡Feliz Cumple Lionel Messi! ➡️​
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold uppercase">
                LA MAGIA INTACTA
              </h2>
              <p className="mt-2 text-base lg:text-xl font-light">
                🎂 37 años, 5 Mundiales jugados, la magia de siempre 🇦🇷
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                El paso del tiempo, en los pies de @leomessi
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">📹 FIFA</p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
              <video
                src="https://res.cloudinary.com/dqg1afwty/video/upload/v1719252327/37_a%C3%B1os_5_Mundiales_jugados_la_magia_de_siempre_El_paso_del_tiempo_en_los_pies_de_leomessi_FIFA_qzyoro.mp4"
                width="auto"
                height="auto"
                controls
                className="rounded-lg"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-blue-800 p-5 rounded-xl mt-4">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <Link href="/primergol">
                <h3 className="text-xl lg:text-3xl font-bold uppercase">
                  LAS GRANDES FIGURAS... ➡️​
                </h3>
              </Link>
              <p className="mt-2 text-base lg:text-xl font-light">
                que marcaron su primer gol en la
              </p>
              <p className="mt-2 text-base lg:text-xl font-light">
                CONMEBOL Copa América 2024™
              </p>
            </div>

            <div className="text-center lg:text-left lg:w-1/2 bg-slate-500 rounded-lg relative">
              <Link href="/primergol">
                <Image
                  src="https://res.cloudinary.com/dqg1afwty/image/upload/v1719341634/julian-alvarez_h5exgy.webp"
                  alt="Julian Alvarez"
                  sizes="100vw"
                  width={700}
                  height={350}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </Link>
            </div>
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
                  <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                    <h1 className="text-2xl lg:text-3xl">
                      Estadios de la CONMEBOL Copa América 2024™
                    </h1>
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
                  <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
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
                  <div className="w-full absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-50">
                    <h1 className="text-2xl lg:text-3xl">El Último CAMPEÓN</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
/*
bg-[#0c1a3e]


*/
function CheckIcon(props) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
