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
  image
}) => {
  const getColorClasses = (color: string) => {
    const colors = {
      forest: {
        gradient: 'from-forest to-sage',
        ring: 'ring-forest/30',
        hover: 'group-hover:from-forest-dark group-hover:to-sage-dark'
      },
      sage: {
        gradient: 'from-sage to-forest',
        ring: 'ring-sage/30',
        hover: 'group-hover:from-sage-dark group-hover:to-forest-dark'
      },
      'forest-light': {
        gradient: 'from-forest-light to-sage',
        ring: 'ring-forest-light/30',
        hover: 'group-hover:from-forest-light group-hover:to-sage-dark'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="group relative bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand/10 via-transparent to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex flex-col items-center">
        {/* Large Profile Image */}
        <div className={`relative mb-6 ${colorClasses.ring} ring-4 ring-offset-4 ring-offset-white rounded-full overflow-hidden shadow-xl group-hover:ring-offset-8 transition-all duration-500`}>
          {image ? (
            <img 
              src={image} 
              alt={shortName}
              className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className={`w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center`}>
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>

        {/* Name & Specialty */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{shortName}</h3>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-xs mx-auto">{specialty}</p>
        </div>

        {/* CTA Button */}
        <a 
          href={`/specialist/${slug}`}
          className={`w-full bg-gradient-to-r ${colorClasses.gradient} ${colorClasses.hover} text-white text-center px-6 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2`}
        >
          View Profile
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SpecialistCard;

