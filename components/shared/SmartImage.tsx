// components/SmartImage.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SmartImageProps extends ImageProps {
  fallbackSrc?: string;
  className?: string;
}

export default function SmartImage({
  src,
  alt,
  fallbackSrc = "/fallback.jpg",
  className = "",
  ...props
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className} overflow-hidden`}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
        }}
        loading="lazy"
        placeholder="empty"
        className={`transition-all duration-700 ease-in-out w-full h-full object-cover
          ${isLoading ? "opacity-0 blur-lg scale-105" : "opacity-100 blur-0 scale-100"}
        `}
      />
    </div>
  );
}
