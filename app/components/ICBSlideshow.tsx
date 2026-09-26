"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/brewing/archive/icb-pix/img01.png",
  "/images/brewing/archive/icb-pix/img2.jpg",
  "/images/brewing/archive/icb-pix/IMG03.JPG",
  "/images/brewing/archive/icb-pix/IMG04.jpg",
  "/images/brewing/archive/icb-pix/img5.png",
  "/images/brewing/archive/icb-pix/img06.jpg",
  "/images/brewing/archive/icb-pix/img07.jpg",
  "/images/brewing/archive/icb-pix/img08.jpg",
  "/images/brewing/archive/icb-pix/img09.jpg",
  "/images/brewing/archive/icb-pix/img10.JPG",
  "/images/brewing/archive/icb-pix/img11.jpg",
  "/images/brewing/archive/icb-pix/img12.jpg",
  "/images/brewing/archive/icb-pix/img13.jpg",
  "/images/brewing/archive/icb-pix/img14.jpg",
  "/images/brewing/archive/icb-pix/img15.jpg",
  "/images/brewing/archive/icb-pix/img16.jpg",
  "/images/brewing/archive/icb-pix/img17.jpg",
  "/images/brewing/archive/icb-pix/img18.jpg",
  "/images/brewing/archive/icb-pix/img19.jpg",
  "/images/brewing/archive/icb-pix/img20.JPG",
  "/images/brewing/archive/icb-pix/img21.jpg",
];

export default function ICBSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={images[current]}
          alt={`Indiana City Brewing photo ${current + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={current === 0}
        />
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}