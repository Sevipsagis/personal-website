"use client";

import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NeoButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function NeoButton({ children, className, ...props }: NeoButtonProps) {
  return (
    <motion.button
      whileHover={props.disabled ? undefined : { scale: 1.02 }}
      whileTap={
        props.disabled
          ? undefined
          : { x: 3, y: 3, boxShadow: "0px 0px 0px 0px #0f0f0f" }
      }
      className={cn(
        "border-neo-black font-title cursor-pointer border-2 px-4 py-2 shadow-[3px_3px_0px_0px_#0f0f0f] transition-all disabled:translate-x-[3px] disabled:translate-y-[3px] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
