"use client";

import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NeoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "default" | "wiggle" | "rotate" | "none";
  as?: "div" | "section" | "article" | "main";
}

export function NeoCard({
  children,
  className,
  hoverEffect = "default",
  as = "div",
  ...props
}: NeoCardProps) {
  const Component = motion[as] as any;

  const hoverStyles = {
    default:
      "hover:-translate-x-1 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-hard-hover hover:z-10",
    wiggle: "hover-wiggle",
    rotate: "hover:-translate-x-1 hover:-translate-y-1 hover:rotate-1",
    none: "",
  };

  return (
    <Component
      className={cn(
        "border-neo-black bg-neo-white shadow-hard border-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        hoverStyles[hoverEffect],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
