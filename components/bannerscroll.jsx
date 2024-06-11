import Image from "next/image";
import React from "react";

export default function Carrusel() {
  return (
    <div className="flex flex-col justify-center items-center bg-background overflow-hidden gap-8 overflow-x-hidden mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[363px] h-[80px]">
              <Image 
              src="/images/vibra-continente.webp" 
              alt="vibra copa america"
              fill
              sizes="100vw"
              className="w-full h-full object-cover"
              />             
        </div>
      </div>
      
      <article className="border-2 border-transparent max-w-[90%] mask-linear-gradient">
        <section className="min-w-fit flex gap-4 animate-scrollLeft px-2 hover:pause-animation text-lg">
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇦🇷</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇧🇴​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇧🇷​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇨🇦</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇨🇱​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇨🇴​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇨🇷</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇪🇨​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">​🇺🇸​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇯🇲​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇲🇽​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇵🇦​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇵🇾</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇵🇪​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇺🇾​​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20">🇻🇪​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇦🇷​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇧🇴​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇧🇷​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇨🇦</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇨🇱​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇨🇴​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇨🇷</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇪🇨​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>​🇺🇸​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇯🇲​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇲🇽​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇵🇦​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇵🇾</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇵🇪​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇺🇾​​</span>
          <span className="text-gray-400 px-6 py-2 rounded-full bg-background border border-gray-700 grid place-items-center transition-all duration-300 hover:bg-white/20" aria-hidden>🇻🇪​</span>
        </section>
      </article>
    </div>
  );
}

