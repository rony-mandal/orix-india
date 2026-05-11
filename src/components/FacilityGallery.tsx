import { useState } from "react";
import { X } from "lucide-react";

const images = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const galleryImages = Object.entries(images).map(([path, src]) => ({
  src: src as string,
  alt: path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ") ?? "Facility photo",
}));

export function FacilityGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (galleryImages.length === 0) return null;

  function prev() {
    setLightbox((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }
  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(idx)}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}