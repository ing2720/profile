"use client";

import Image from "next/image";
import { useState } from "react";
import type { Profile } from "@/data/profile";

type ProfileImageProps = {
  image: Profile["image"];
  name: string;
  size?: "md" | "lg";
};

const sizeClassNames = {
  md: "h-28 w-24 print:h-20 print:w-16",
  lg: "h-40 w-32 sm:h-44 sm:w-36 lg:h-48 lg:w-40"
};

function getInitials(name: string) {
  const compactName = name.trim();

  if (!compactName) {
    return "HW";
  }

  if (/^[A-Za-z\s]+$/.test(compactName)) {
    return compactName
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  return compactName.slice(0, 2);
}

export function ProfileImage({ image, name, size = "md" }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  const className = `${sizeClassNames[size]} shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm`;

  if (hasError) {
    return (
      <div
        aria-label={`${name} 프로필 이미지 대체 아바타`}
        className={`${className} flex items-center justify-center text-2xl font-bold text-slate-700`}
        role="img"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        alt={image.alt}
        className="h-full w-full scale-110 object-cover object-center"
        height={size === "lg" ? 192 : 112}
        onError={() => setHasError(true)}
        priority={size === "lg"}
        src={image.src}
        width={size === "lg" ? 160 : 96}
      />
    </div>
  );
}
