"use client";

import { useEffect, useState } from "react";

const photos = [
  {
    src: "/images/brewing/CheerForBeer.png",
    alt: "Early homebrewing days",
  },
  {
    src: "/images/brewing/GravityFedStand.JPG",
    alt: "Gravity-fed homebrewing system",
  },
  {
    src: "/images/brewing/KeggleCutting.JPG",
    alt: "Building homebrewing equipment",
  },
];

export default function BrewingSlideshow() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((current) => (current + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center rounded-2xl border border-white/10 bg-black/30 p-5">
    <div className="flex flex-1 items-center justify-center">
      <img
        src={photos[currentPhoto].src}
        alt={photos[currentPhoto].alt}
        className="max-h-[440px] w-full rounded-xl object-contain"
      />
    </div>

    <div className="mt-4 flex justify-center gap-2">
      {photos.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPhoto(index)}
          className={`h-2.5 w-2.5 rounded-full transition ${
            index === currentPhoto ? "bg-amber-300" : "bg-gray-500"
          }`}
          aria-label={`View photo ${index + 1}`}
        />
      ))}
    </div>
  </div>
);
}