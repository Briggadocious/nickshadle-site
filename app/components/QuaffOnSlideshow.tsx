"use client";

import { useEffect, useState } from "react";

const media = [
  { kind: "photo", src: "/images/brewing/quaff-on/IMG_0719.jpg", alt: "Quaff ON! brewery introduction featuring Nick" },
  { kind: "video", src: "/videos/quaff-on/IMG_1962.mp4", alt: "Quaff ON! brewing video" },
  { kind: "photo", src: "/images/brewing/quaff-on/IMG_0720.JPG", alt: "Looking into a brewing vessel at Quaff ON!" },
  { kind: "video", src: "/videos/quaff-on/IMG_8708.mp4", alt: "Quaff ON! production video" },
  { kind: "photo", src: "/images/brewing/quaff-on/IMG_4220_Original.jpg", alt: "Nick at the Quaff ON! brewhouse" },
] as const;

export default function QuaffOnSlideshow() {
  const [current, setCurrent] = useState(0);
  const item = media[current];
  useEffect(() => {
    if (item.kind !== "photo") return;
    const timer = window.setTimeout(() => setCurrent((i) => (i + 1) % media.length), 4500);
    return () => window.clearTimeout(timer);
  }, [current, item.kind]);

  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-1 items-center justify-center">
        {item.kind === "photo" ? (
          <img key={item.src} src={item.src} alt={item.alt} className="max-h-[440px] w-full rounded-xl object-contain" />
        ) : (
          <video key={item.src} src={item.src} aria-label={item.alt} className="max-h-[440px] w-full rounded-xl object-contain" controls autoPlay muted playsInline onEnded={() => setCurrent((i) => (i + 1) % media.length)} />
        )}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {media.map((entry, index) => (
          <button key={entry.src} type="button" onClick={() => setCurrent(index)} aria-label={`Show Quaff ON! ${entry.kind} ${index + 1}`} aria-current={index === current ? "true" : undefined} className={`h-2.5 w-2.5 rounded-full transition ${index === current ? "bg-amber-300" : "bg-gray-500 hover:bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
