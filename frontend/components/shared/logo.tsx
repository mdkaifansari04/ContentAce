import React from "react";
import { FadeImg } from "../core/fadeImg";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

function Logo({ className, variant }: LogoProps) {
  return (
    <h2 className={cn("font-mono text-2xl text-white", className)}>
      Content<span className="text-pretty text-primary">Ace</span>
    </h2>
  );
}

export default Logo;
