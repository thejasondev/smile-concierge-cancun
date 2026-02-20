import { useState, useEffect, useCallback } from 'react';
import type { GalleryImage } from '../data/galleryImages';
import { galleryCategories } from '../data/galleryImages';

interface ResultsGalleryProps {
  images: GalleryImage[];
}

export default function ResultsGallery({ images }: ResultsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // For desktop: flat filtered list. For mobile: grouped by category
  const filtered =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Group images by category for mobile horizontal scroll view
  const groupedByCategory = galleryCategories
    .filter((c) => c.id !== 'all')
    .map((cat) => ({
      ...cat,
      images: images.filter((img) => img.category === cat.id),
    }))
    .filter((group) => group.images.length > 0);

  // Flat index for lightbox across all images
  const allVisibleImages =
    isMobile && activeCategory === 'all' ? images : filtered;

  const openLightbox = (img: GalleryImage) => {
    const idx = allVisibleImages.findIndex((i) => i.src === img.src);
    if (idx !== -1) {
      setLightboxIndex(idx);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % allVisibleImages.length);
  }, [lightboxIndex, allVisibleImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + allVisibleImages.length) % allVisibleImages.length
    );
  }, [lightboxIndex, allVisibleImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const getCategoryLabel = (id: string) =>
    galleryCategories.find((c) => c.id === id)?.label || id;

  return (
    <>
      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3">
        {galleryCategories.map((cat) => {
          const count =
            cat.id === 'all'
              ? images.length
              : images.filter((i) => i.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-2.5 md:text-sm ${
                activeCategory === cat.id
                  ? 'from-forest to-sage scale-105 bg-linear-to-r text-white shadow-lg'
                  : 'hover:border-forest/20 border border-white/40 bg-white/60 text-slate-700 shadow-md backdrop-blur-xl hover:scale-105 hover:shadow-lg'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========== MOBILE: Horizontal Scroll per Category ========== */}
      {isMobile && activeCategory === 'all' ? (
        <div className="space-y-8 md:hidden">
          {groupedByCategory.map((group) => (
            <div key={group.id}>
              {/* Category Header */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-800">
                  {group.label}
                </h3>
                <button
                  onClick={() => setActiveCategory(group.id)}
                  className="text-forest text-xs font-semibold hover:underline"
                >
                  View all ({group.images.length})
                </button>
              </div>

              {/* Horizontal Scroll Strip */}
              <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3">
                {group.images.map((img) => (
                  <div
                    key={img.src}
                    className="w-44 shrink-0 cursor-pointer snap-start overflow-hidden rounded-xl border border-white/40 shadow-lg transition-shadow active:shadow-xl"
                    onClick={() => openLightbox(img)}
                  >
                    <div className="relative aspect-4/5">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : isMobile ? (
        /* MOBILE: Filtered category — 2-column compact grid */
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {filtered.map((img) => (
            <div
              key={img.src}
              className="cursor-pointer overflow-hidden rounded-xl border border-white/40 shadow-lg transition-shadow active:shadow-xl"
              onClick={() => openLightbox(img)}
            >
              <div className="relative aspect-4/5">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* ========== DESKTOP: Masonry Grid ========== */}
      <div className="hidden columns-2 gap-6 space-y-6 md:block lg:columns-3">
        {filtered.map((img) => (
          <div
            key={img.src}
            className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
            onClick={() => openLightbox(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="block w-full transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mb-1 inline-block self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {getCategoryLabel(img.category)}
              </span>
              <p className="text-sm font-medium text-white/90">
                {img.specialist}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Result Count */}
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">
          Showing{' '}
          <span className="text-forest font-bold">
            {activeCategory === 'all' ? images.length : filtered.length}
          </span>{' '}
          of <span className="font-bold">{images.length}</span> results
        </p>
      </div>

      {/* ========== LIGHTBOX MODAL ========== */}
      {lightboxIndex !== null && allVisibleImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:top-6 md:right-6"
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm md:top-6 md:left-6">
            {lightboxIndex + 1} / {allVisibleImages.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:left-6"
            aria-label="Previous"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="flex max-h-[85vh] max-w-[90vw] flex-col items-center md:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allVisibleImages[lightboxIndex].src}
              alt={allVisibleImages[lightboxIndex].alt}
              className="max-h-[75vh] rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-forest-light bg-forest/20 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                {getCategoryLabel(allVisibleImages[lightboxIndex].category)}
              </span>
              <p className="mt-2 text-sm text-white/70">
                {allVisibleImages[lightboxIndex].specialist}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:right-6"
            aria-label="Next"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
