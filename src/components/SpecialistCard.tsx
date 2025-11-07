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
  name,
  shortName,
  clinic,
  specialty,
  expertise,
  color,
  slug,
  image
}) => {
  const getColorClasses = (color: string) => {
    const colors = {
      forest: {
        bg: 'bg-forest/10',
        text: 'text-forest',
        border: 'border-forest/20',
        gradient: 'from-forest to-sage',
        hover: 'group-hover:from-forest-dark group-hover:to-sage-dark'
      },
      sage: {
        bg: 'bg-sage/10',
        text: 'text-sage',
        border: 'border-sage/20',
        gradient: 'from-sage to-forest',
        hover: 'group-hover:from-sage-dark group-hover:to-forest-dark'
      },
      'forest-light': {
        bg: 'bg-forest-light/10',
        text: 'text-forest-light',
        border: 'border-forest-light/20',
        gradient: 'from-forest-light to-sage',
        hover: 'group-hover:from-forest-light group-hover:to-sage-dark'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative">
        {/* Profile Image or Icon */}
        <div className={`w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ${image ? 'rounded-full overflow-hidden border-4' : 'bg-gradient-to-br rounded-2xl flex items-center justify-center'} ${image ? `border-${color}` : colorClasses.gradient}`}>
          {image ? (
            <img 
              src={image} 
              alt={shortName}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>

        {/* Name & Clinic */}
        <div className="text-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{shortName}</h3>
          <p className={`text-sm md:text-base font-semibold ${colorClasses.text} mb-2`}>{clinic}</p>
          <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">{specialty}</p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {expertise.slice(0, 3).map((item, idx) => (
            <span 
              key={idx} 
              className={`text-xs px-3 py-1.5 ${colorClasses.bg} ${colorClasses.text} rounded-full font-medium border ${colorClasses.border}`}
            >
              {item.length > 35 ? item.substring(0, 35) + '...' : item}
            </span>
          ))}
          {expertise.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full font-medium border border-slate-200">
              +{expertise.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <a 
          href={`/specialist/${slug}`}
          className={`block w-full bg-gradient-to-r ${colorClasses.gradient} ${colorClasses.hover} text-white text-center px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default SpecialistCard;
