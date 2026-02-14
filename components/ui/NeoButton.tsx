"use client";

import { forwardRef } from "react";

import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NeoButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "div";
}

export const NeoButton = forwardRef<HTMLElement, NeoButtonProps>(
  ({ children, className, as = "button", ...props }, ref) => {
    const Component = motion[as] as any;

    return (
      <Component
        ref={ref}
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
      </Component>
    );
  }
);

NeoButton.displayName = "NeoButton";
