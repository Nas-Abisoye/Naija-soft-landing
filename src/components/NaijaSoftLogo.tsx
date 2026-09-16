import React from "react";

interface NaijaSoftLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  isDark?: boolean;
}

export function NaijaSoftLogo({
  className = "",
  size = "md",
  variant = "full",
  isDark = true,
}: NaijaSoftLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subtitleSizes = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.25em]",
    lg: "text-xs tracking-[0.3em]",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
        >
          <defs>
            <linearGradient id="nsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e599" />
              <stop offset="50%" stopColor="#00d2b4" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Pinwheel Quadrant 1 - Top Left */}
          <path
            d="M50 15 C30.67 15 15 30.67 15 50 L35 50 C35 41.72 41.72 35 50 35 L50 15 Z"
            fill="url(#nsGrad)"
            rx="4"
          />
          {/* Pinwheel Quadrant 2 - Top Right */}
          <path
            d="M85 50 C85 30.67 69.33 15 50 15 L50 35 C58.28 35 65 41.72 65 50 L85 50 Z"
            fill="url(#nsGrad)"
          />
          {/* Pinwheel Quadrant 3 - Bottom Right */}
          <path
            d="M50 85 C69.33 85 85 69.33 85 50 L65 50 C65 58.28 58.28 65 50 65 L50 85 Z"
            fill="url(#nsGrad)"
          />
          {/* Pinwheel Quadrant 4 - Bottom Left */}
          <path
            d="M15 50 C15 69.33 30.67 85 50 85 L50 65 C41.72 65 35 58.28 35 50 L15 50 Z"
            fill="url(#nsGrad)"
          />
          {/* Center Swirl Cutout Accents */}
          <circle cx="50" cy="50" r="8" fill="#070b14" />
          <circle cx="36" cy="36" r="4" fill="#070b14" />
          <circle cx="64" cy="36" r="4" fill="#070b14" />
          <circle cx="64" cy="64" r="4" fill="#070b14" />
          <circle cx="36" cy="64" r="4" fill="#070b14" />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-outfit font-extrabold ${titleSizes[size]} tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Naija{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Soft
            </span>
          </span>
          <span
            className={`font-outfit font-bold uppercase ${subtitleSizes[size]} text-cyan-400/90 mt-0.5`}
          >
            Innovations
          </span>
        </div>
      )}
    </div>
  );
}
