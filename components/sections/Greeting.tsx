import { Asterisk } from "lucide-react";

import { NeoCard } from "@/components/ui/NeoCard";

export function Greeting() {
  return (
    <NeoCard
      className="bg-neo-pink relative flex min-h-[240px] flex-col justify-center overflow-hidden rounded-2xl p-8 md:col-span-12 lg:col-span-8"
      hoverEffect="rotate"
    >
      {/* Decorative Elements */}
      <div className="bg-neo-white border-neo-black animate-spin-slow absolute -top-8 -right-5 flex h-48 w-48 items-center justify-center rounded-full border-4">
        <Asterisk className="text-neo-black h-24 w-24" />
      </div>

      <div className="relative z-10">
        <div className="bg-neo-white border-neo-black shadow-hard-sm mb-6 inline-flex w-fit -rotate-1 transform items-center gap-3 rounded-full border-3 px-4 py-2 transition-transform select-none hover:rotate-0">
          <div className="bg-neo-green border-neo-black flex h-3 w-3 items-center justify-center rounded-full border">
            <div className="h-1 w-1 animate-ping rounded-full bg-black" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase">
            Open for work
          </span>
        </div>
        <h1 className="text-neo-black mb-2 text-5xl leading-[0.85] tracking-tight uppercase drop-shadow-sm md:text-7xl">
          Enjoy{" "}
          <span className="text-outline text-neo-white! hover:text-neo-green hover:text-outline-0 cursor-default transition-all">
            making
          </span>
        </h1>
        <h1 className="text-neo-black text-5xl leading-[0.85] tracking-tight uppercase drop-shadow-sm md:text-7xl">
          <span className="bg-neo-black text-neo-white box-decoration-clone px-4 leading-[1.1]">
            random stuff
          </span>
        </h1>
      </div>
    </NeoCard>
  );
}
