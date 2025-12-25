import React, { useState, useEffect, useCallback } from 'react';

interface ResultImage {
  image: string;
  title: string;
  treatment: string;
  specialist: string;
  description: string;
}

// Lightbox Component
const ImageLightbox: React.FC<{
  images: ResultImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}> = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      if (e.key === 'ArrowRight')
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrev = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const goToNext = () => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" />

      {/* Close Button - Desktop Only (positioned absolutely) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 md:flex"
        aria-label="Close lightbox"
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

      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
        className="absolute left-4 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 md:left-8 lg:flex"
        aria-label="Previous image"
      >
        <svg
          className="h-7 w-7"
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

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 md:right-8 lg:flex"
        aria-label="Next image"
      >
        <svg
          className="h-7 w-7"
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

      {/* Image Container */}
      <div
        className="relative z-10 flex w-full max-w-[95vw] flex-col md:max-w-3xl lg:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Header with Close Button */}
        <div className="mb-3 flex items-center justify-between md:hidden">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 active:scale-95"
            aria-label="Close lightbox"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Image Card with Tap Navigation Zones */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl md:rounded-3xl">
          {/* Desktop Counter Badge */}
          <div className="absolute top-4 left-4 z-10 hidden rounded-full bg-black/50 px-4 py-1.5 backdrop-blur-sm md:block">
            <span className="text-sm font-medium text-white">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Image with Tap Zones for Mobile */}
          <div className="relative">
            <img
              src={current.image}
              alt={`${current.title} - Before and After`}
              className="max-h-[50vh] w-full object-contain md:max-h-[70vh]"
            />

            {/* Mobile Tap Zones - invisible but tappable */}
            <div className="absolute inset-0 flex md:hidden">
              {/* Left tap zone - Previous */}
              <button
                onClick={goToPrev}
                className="h-full w-1/3 focus:outline-none"
                aria-label="Previous image"
              />
              {/* Center - no action */}
              <div className="h-full w-1/3" />
              {/* Right tap zone - Next */}
              <button
                onClick={goToNext}
                className="h-full w-1/3 focus:outline-none"
                aria-label="Next image"
              />
            </div>
          </div>

          {/* Mobile Navigation Arrows - Sides of Image, vertically centered */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all active:scale-95 md:hidden"
            aria-label="Previous"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all active:scale-95 md:hidden"
            aria-label="Next"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Info */}
          <div className="border-t border-slate-100 bg-white p-3 md:p-6">
            <div className="flex items-start justify-between gap-3 md:gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <div className="bg-forest h-2 w-2 shrink-0 rounded-full"></div>
                  <span className="truncate text-xs font-semibold tracking-wide text-slate-500 uppercase md:text-sm">
                    {current.treatment}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 md:text-xl">
                  {current.title}
                </h3>
                <p className="line-clamp-2 text-xs text-slate-600 md:text-base">
                  {current.description}
                </p>
              </div>
              <div className="bg-forest/10 shrink-0 rounded-full px-3 py-1.5 md:px-4 md:py-2">
                <p className="text-forest text-xs font-semibold md:text-sm">
                  {current.specialist}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Dots & Navigation */}
        <div className="mt-4 flex flex-col items-center gap-3">
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Tap Hint - Mobile only */}
          <span className="flex items-center gap-1.5 text-xs text-white/60 md:hidden">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            Tap arrows or dots to navigate
          </span>

          {/* Keyboard Hint - Desktop only */}
          <span className="hidden text-xs text-white/50 md:block">
            Use ← → arrows to navigate • ESC to close
          </span>
        </div>
      </div>
    </div>
  );
};

const NaturalResults: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const results: ResultImage[] = [
    {
      image: '/resultados/inyecdadas de resina .webp',
      title: 'Injected Composite Veneers',
      treatment: 'Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Natural color matching and translucency',
    },
    {
      image: '/resultados/inyectadas de resina.webp',
      title: 'Composite Restoration',
      treatment: 'Aesthetic Dentistry',
      specialist: 'Dra. Vázquez',
      description: 'Seamless integration with natural teeth',
    },
    {
      image: '/resultados/porcelana (1).webp',
      title: 'Emax Porcelain Veneers',
      treatment: 'Premium Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Perfect translucency and color gradients',
    },
  ];

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigateLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <>
      <section
        id="results"
        className="from-cream via-sand/30 relative bg-linear-to-br to-white py-12 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile-First Header */}
          <div className="mb-8 text-center md:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-slate-800 md:mb-6 md:text-3xl lg:text-4xl">
              Natural is in.
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-slate-600 line-through decoration-red-500 md:mb-6 md:max-w-3xl md:text-xl">
              Gum-colored, fake-looking teeth are out.
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-slate-700 md:mb-8 md:text-xl">
              Our restorations combine the perfect white with natural beauty:
              subtle translucency, color nuances, and fine details that reflect
              real-life teeth.
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Results that look authentic, elegant… just like the smiles of
              artists.
            </p>
            <div className="bg-sand/30 border-sand mt-6 inline-flex items-center rounded-full border px-6 py-3">
              <p className="text-forest text-base font-semibold md:text-lg">
                Your smile, natural and one-of-a-kind.
              </p>
            </div>
          </div>

          {/* Mobile: Horizontal Scroll Carousel | Desktop: Grid */}
          {/* Mobile Carousel Container */}
          <div className="-mx-4 mb-8 px-4 md:hidden">
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
              {results.map((result, index) => (
                <div key={index} className="w-[85vw] shrink-0 snap-start">
                  <div className="h-full overflow-hidden rounded-2xl bg-white shadow-xl">
                    {/* Clickable Image */}
                    <button
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden bg-slate-100"
                      aria-label={`View ${result.title} full size`}
                    >
                      <img
                        src={result.image}
                        alt={`${result.title} - Before and After`}
                        className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay Badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 shadow-lg backdrop-blur-sm">
                        <p className="text-forest text-xs font-bold">
                          Before & After
                        </p>
                      </div>
                      {/* Specialist Tag */}
                      <div className="bg-forest/90 absolute top-3 right-3 rounded-full px-2.5 py-1 shadow-lg backdrop-blur-sm">
                        <p className="text-xs font-semibold text-white">
                          {result.specialist}
                        </p>
                      </div>
                      {/* Tap to Expand Label */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 shadow-lg backdrop-blur-sm">
                        <p className="text-forest flex items-center gap-1 text-xs font-medium">
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Tap to expand
                        </p>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${index % 3 === 0 ? 'bg-forest' : index % 3 === 1 ? 'bg-sage' : 'bg-forest-light'}`}
                        ></div>
                        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                          {result.treatment}
                        </span>
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-slate-800">
                        {result.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Indicator */}
            <div className="mt-2 flex justify-center gap-2">
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Swipe to see more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="mb-8 hidden gap-6 md:mb-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                {/* Clickable Image */}
                <button
                  onClick={() => openLightbox(index)}
                  className="relative aspect-4/3 w-full cursor-pointer overflow-hidden bg-slate-100"
                  aria-label={`View ${result.title} full size`}
                >
                  <img
                    src={result.image}
                    alt={`${result.title} - Before and After`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-300 group-hover:bg-slate-900/30">
                    <div className="flex h-14 w-14 scale-75 transform items-center justify-center rounded-full bg-white/95 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <svg
                        className="text-forest h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                    <p className="text-forest text-xs font-bold">
                      Before & After
                    </p>
                  </div>
                  {/* Specialist Tag */}
                  <div className="bg-forest/90 absolute top-4 right-4 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm">
                    <p className="text-xs font-semibold text-white">
                      {result.specialist}
                    </p>
                  </div>
                </button>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${index % 3 === 0 ? 'bg-forest' : index % 3 === 1 ? 'bg-sage' : 'bg-forest-light'}`}
                    ></div>
                    <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      {result.treatment}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800 md:text-xl">
                    {result.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile-Optimized CTA */}
          <div className="mb-8 text-center md:mb-16">
            <a
              href="/results"
              className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark inline-block rounded-xl bg-linear-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl md:px-8 md:text-base"
            >
              View All Cases
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={results}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </>
  );
};

export default NaturalResults;
