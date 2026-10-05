"use client";

import { useState } from "react";
import { Photo } from "@/components/ui/Photo";

export function Gallery({ images, name, frameClass }: { images: string[]; name: string; frameClass: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <Photo
        src={images[active]}
        alt={`${name}, photo ${active + 1}`}
        className={`aspect-square w-full ${frameClass}`}
        sizes="(min-width:1024px) 50vw, 100vw"
        priority
      />
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={i === active}
              className={`block ${i === active ? "ring-2 ring-accent" : "opacity-70 hover:opacity-100"} ${frameClass}`}
            >
              <Photo src={img} alt="" className="aspect-square" sizes="15vw" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
