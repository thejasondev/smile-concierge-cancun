import React, { useState, useCallback } from 'react';
import SpecialistCard from './SpecialistCard';
import { specialists } from '../data/specialists';

const SpecialistsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = specialists.length;

  const handleCardClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const getStackPosition = (cardIndex: number): number => {
    return (cardIndex - activeIndex + totalCards) % totalCards;
  };

  const getCardStyles = (cardIndex: number) => {
    const position = getStackPosition(cardIndex);

    switch (position) {
      case 0:
        return {
          classes: 'z-30',
          transform: 'translateY(0) scale(1)',
          opacity: 1,
        };
      case 1:
        return {
          classes: 'z-20',
          transform: 'translateY(16px) scale(0.94)',
          opacity: 0.7,
        };
      case 2:
        return {
          classes: 'z-10',
          transform: 'translateY(32px) scale(0.88)',
          opacity: 0.4,
        };
      default:
        return {
          classes: 'z-0 pointer-events-none',
          transform: 'translateY(48px) scale(0.82)',
          opacity: 0,
        };
    }
  };

  return (
    <div className="relative">
      {/* Cards Container */}
      <div className="relative mx-auto aspect-3/4 max-w-[320px]">
        {specialists.map((specialist, index) => {
          const styles = getCardStyles(index);
          return (
            <div
              key={specialist.slug}
              onClick={() => handleCardClick(index)}
              className={`absolute inset-x-0 top-0 cursor-pointer transition-all duration-500 ease-out ${styles.classes}`}
              style={{
                transform: styles.transform,
                opacity: styles.opacity,
              }}
            >
              <SpecialistCard
                name={specialist.name}
                shortName={specialist.shortName}
                clinic={specialist.clinic}
                specialty={specialist.specialty}
                expertise={specialist.expertise}
                color={specialist.color}
                slug={specialist.slug}
                image={specialist.image}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-4 flex flex-col items-center gap-3">
        {/* Thumbnail Dots */}
        <div className="flex justify-center gap-3">
          {specialists.map((specialist, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'ring-forest h-12 w-12 shadow-lg ring-2 ring-offset-2'
                  : 'h-10 w-10 opacity-60 hover:opacity-100'
              }`}
              aria-label={`View ${specialist.shortName}`}
            >
              {specialist.image ? (
                <img
                  src={specialist.image}
                  alt={specialist.shortName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="bg-forest flex h-full w-full items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Name */}
        <p className="text-center text-sm font-medium text-slate-600">
          {specialists[activeIndex].shortName}
        </p>

        {/* Tap Hint */}
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
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
          Tap to explore
        </span>
      </div>
    </div>
  );
};

export default SpecialistsCarousel;
