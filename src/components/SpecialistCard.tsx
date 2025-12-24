import React from 'react';

interface SpecialistCardProps {
  name: string;
  shortName: string;
  clinic: string;
  specialty: string;
  expertise: string[];
  color: 'forest' | 'sage' | 'forest-light';
  slug: string;
  image?: string;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({
  shortName,
  specialty,
  color,
  slug,
  image,
}) => {
  const getColorClasses = (color: string) => {
    const colors = {
      forest: {
        gradient: 'from-forest to-sage',
        accent: 'bg-forest',
      },
      sage: {
        gradient: 'from-sage to-forest',
        accent: 'bg-sage',
      },
      'forest-light': {
        gradient: 'from-forest-light to-sage',
        accent: 'bg-forest-light',
      },
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:rounded-3xl">
      {/* Full Background Image */}
      {image ? (
        <img
          src={image}
          alt={shortName}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-24 w-24 text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Subtle Gradient Overlay - only bottom third */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Top Accent Badge */}
      <div
        className={`absolute top-3 left-3 h-1.5 w-10 rounded-full ${colorClasses.accent} opacity-90 shadow-lg md:top-4 md:left-4`}
      />

      {/* Content - Compact Bottom Section */}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        {/* Name & Specialty */}
        <h3 className="mb-0.5 text-lg font-bold text-white drop-shadow-lg md:text-xl">
          {shortName}
        </h3>
        <p className="mb-3 line-clamp-2 text-xs leading-snug text-white/80 md:mb-4 md:text-sm">
          {specialty}
        </p>

        {/* CTA Button - Compact */}
        <a
          href={`/specialist/${slug}`}
          className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${colorClasses.gradient} px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 md:py-3`}
        >
          View Profile
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </a>
      </div>

      {/* Shine Effect on Hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

export default SpecialistCard;
