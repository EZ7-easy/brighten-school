"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

function SmartImage({
  alt,
  src,
  className,
  width,
  height,
  fill = false,
  priority = false,
  quality = 80,
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !fill && "inline-block", // Only for fixed dimensions
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={
          fill
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            : undefined
        }
        className={cn(
          "object-cover duration-700 ease-in-out transition-all",
          loading
            ? "scale-110 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}
    </div>
  );
}

export default SmartImage;
