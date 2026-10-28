"use client";

import { useEffect, useRef, useState } from "react";

type Slide = { type: "video"; src: string; label: string } | { type: "image"; src: string; label: string };

// Add Hotel Tango photos here later using { type: "image", src: "/images/brewing/...", label: "..." }.
const slides: Slide[] = [
  { type: "video", src: "/videos/hotel-tango/HTBottleFiller.mp4", label: "Hotel Tango bottling line — filler" },
  { type: "video", src: "/videos/hotel-tango/HTBottleCollector.mp4", label: "Hotel Tango bottling line — bottle collector" },
];

export default function HotelTangoSlideshow() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide = slides[current];

  useEffect(() => {
    if (slide.type !== "image") return;
    const timer = window.setTimeout(() => setCurrent((n) => (n + 1) % slides.length), 4000);
    return () => window.clearTimeout(timer);
  }, [current, slide.type]);

  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-1 items-center justify-center">
        {slide.type === "video" ? (
          <video key={slide.src} ref={videoRef} src={slide.src} controls playsInline preload="metadata"
            onEnded={() => setCurrent((n) => (n + 1) % slides.length)}
            aria-label={slide.label} className="max-h-[440px] w-full rounded-xl object-contain" />
        ) : (
          <img src={slide.src} alt={slide.label} className="max-h-[440px] w-full rounded-xl object-contain" />
        )}
      </div>
      <p className="mt-3 text-center text-xs text-gray-400">{slide.label}</p>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((item, index) => (
          <button key={item.src} type="button" onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${index === current ? "bg-amber-300" : "bg-gray-500"}`}
            aria-label={`View ${item.type} ${index + 1}: ${item.label}`} aria-current={index === current ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}
