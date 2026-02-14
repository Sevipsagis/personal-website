"use client";

import { useState } from "react";

import Image from "next/image";

import { ArrowDownToLine, Loader2 } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoCard } from "@/components/ui/NeoCard";

import { cn } from "@/lib/utils";

export function Sidebar() {
  const [downloadable] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloading) {
      e.preventDefault();
      return;
    }
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <NeoCard className="bg-neo-white group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl p-6 md:col-span-12 md:row-span-2 lg:col-span-4">
      <a
        href="https://www.google.com/search?q=nuttapol+phomthon"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex w-full justify-start"
        aria-label="Search for Nuttapol Phomthon on Google"
      >
        <div className="bg-neo-black text-neo-white font-body border-neo-black hover:text-neo-black hover:bg-neo-green inline-block rotate-1 cursor-pointer rounded border-2 px-3 py-1 text-sm font-bold transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1">
          @Sevipsagis
        </div>
      </a>
      <div className="relative z-10 mt-4 flex flex-col items-center">
        <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
          <div className="bg-neo-yellow border-neo-black shadow-hard relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4">
            <Image
              src="/assets/images/me.webp"
              alt="Nuttapol Phomthon Profile Picture"
              width={144}
              height={144}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          {/* Status Indicator */}
          <div className="bg-neo-green border-neo-black absolute right-1 bottom-1 z-20 flex h-8 w-8 items-center justify-center rounded-full border-3">
            <div className="h-2 w-2 animate-ping rounded-full bg-black" />
          </div>
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-neo-white bg-neo-black inline-block -rotate-1 px-4 py-1 text-5xl leading-[0.9]">
            Nuttapol P.
          </h2>
          <h2 className="-rotate-1 text-5xl leading-[0.9]">Benz</h2>
        </div>
      </div>
      <div className="relative z-10 mt-8 flex w-full flex-col gap-3">
        <a
          href="/cv.pdf"
          download
          onClick={handleDownload}
          className={cn(
            "w-full transition-all",
            (!downloadable || downloading) && "pointer-events-none opacity-80"
          )}
        >
          <NeoButton
            className={cn(
              "font-title group/btn flex w-full items-center justify-center gap-2 rounded-xl py-3 text-lg transition-all duration-300",
              !downloadable || downloading
                ? "bg-neo-bg text-neo-black border-neo-black"
                : "bg-neo-green text-neo-black hover:bg-neo-black hover:text-neo-green"
            )}
            disabled={!downloadable || downloading}
            aria-label="Download CV"
          >
            {downloading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <ArrowDownToLine
                  className={cn(
                    "h-5 w-5",
                    (!downloading || downloading) &&
                      "group-hover/btn:animate-bounce"
                  )}
                />
                <span>Download CV</span>
              </>
            )}
          </NeoButton>
        </a>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/npbenz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label="Visit LinkedIn Profile"
          >
            <NeoButton
              as="div"
              className="bg-neo-blue hover:bg-neo-black text-neo-black hover:text-neo-blue flex w-full items-center justify-center rounded-xl py-3"
            >
              <LinkedinIcon className="h-6 w-6 transform transition-transform hover:scale-110" />
            </NeoButton>
          </a>
          <a
            href="https://github.com/Sevipsagis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label="Visit GitHub Profile"
          >
            <NeoButton
              as="div"
              className="bg-neo-pink hover:bg-neo-black text-neo-black hover:text-neo-pink flex w-full items-center justify-center rounded-xl py-3"
            >
              <GithubIcon className="h-6 w-6 transform transition-transform hover:scale-110" />
            </NeoButton>
          </a>
        </div>
      </div>
    </NeoCard>
  );
}
