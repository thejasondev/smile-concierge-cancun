import React, { useState } from 'react';

interface Treatment {
  title: string;
  description: string;
  price?: string;
}

interface SpecialistData {
  name: string;
  shortName: string;
  clinic: string;
  specialty: string;
  bio: string[];
  quote: string;
  expertise: string[];
  treatments: Treatment[];
  advancedTechniques?: Treatment[];
  color: 'forest' | 'sage' | 'forest-light';
}

const SpecialistAccordion: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const specialists: SpecialistData[] = [
    {
      name: 'Dr. Francisco Xavier Primo Pavón',
      shortName: 'Dr. Xavier Pavón',
      clinic: 'Centro Dental Implantológico',
      specialty: 'Oral Rehabilitation & Implantology Specialist',
      bio: [
        'Dr. Xavier Pavón is one of Cancun\'s leading specialists in advanced dental implant surgery and full-mouth rehabilitation.',
        'He graduated from Universidad Veracruzana, continuing his postgraduate studies in Prosthodontics and Aesthetic Dentistry, where he developed deep expertise in oral rehabilitation and implantology.',
        'To further his specialization, Dr. Pavón completed a residency in Zygomatic Implantology in São Paulo, Brazil — mastering complex surgical techniques and full-arch restorations for patients with severe bone loss.',
        'Recognized for his precision, innovation, and academic contributions, Dr. Pavón has authored several scientific articles in leading dental surgery journals and continues to stay at the forefront of digital planning and surgical technologies.'
      ],
      quote: 'My goal is to help patients recover not only their smile but also their confidence — with treatments that are safe, functional, and beautifully natural.',
      expertise: [
        'Dental Implants (traditional, zygomatic, transnasal, transsinusal, and pterygoid)',
        'All-on-4 / All-on-6 Rehabilitations',
        'Surgeries under sedation or general anesthesia',
        'Comprehensive oral rehabilitation with natural, aesthetic results'
      ],
      treatments: [
        {
          title: 'Dental Implants',
          description: 'Restore your smile with a fixed, natural, and durable solution. Dental implants are ideal if you\'ve lost one or several teeth. They replace the tooth root without affecting neighboring teeth.',
          price: 'Surgical phase: starting at $800 USD | Restorative phase: starting at $500 USD'
        },
        {
          title: 'Bone Graft / Sinus Lift',
          description: 'Sometimes, the bone must be strengthened or regenerated before implant placement. These procedures ensure a solid foundation for successful, long-lasting results.',
          price: 'Contact us for evaluation'
        },
        {
          title: 'All-on-4 / All-on-6',
          description: 'A complete, fixed smile in one procedure for patients who have lost multiple teeth. 4 or 6 implants support a full-arch prosthesis designed for aesthetics, function, and durability. The surgery is performed under sedation for comfort.',
          price: 'Custom packages available'
        },
        {
          title: 'Root Canal Treatment',
          description: 'Save your natural teeth and avoid extractions. Used to remove the nerve of a tooth damaged by deep decay, fracture, or trauma.'
        },
        {
          title: 'Dental Crowns',
          description: 'Full coverage restorations to restore strength, shape, and aesthetics. Premium materials are used to ensure natural-looking, durable results.'
        },
        {
          title: 'Inlays & Onlays',
          description: 'Minimally invasive restorations to repair only the damaged part of the tooth, preserving natural structure.'
        },
        {
          title: 'Resin Fillings',
          description: 'Restore teeth affected by cavities or small fractures. Early treatment prevents more complex and costly procedures in the future.'
        }
      ],
      advancedTechniques: [
        {
          title: 'Transnasal Implants',
          description: 'Anchored using the bone next to the nasal cavity for strong support without grafts. Ideal for restoring front teeth naturally.'
        },
        {
          title: 'Trans-Sinus Implants',
          description: 'Placed through the sinus to anchor in denser bone areas, providing stability and often avoiding grafts.'
        },
        {
          title: 'Pterygoid Implants',
          description: 'Anchored in the deep pterygoid bone for fixed teeth placement even with minimal bone.'
        },
        {
          title: 'Zygomatic Implants',
          description: 'Anchored in the cheekbone (zygoma) for full-arch restorations without complex grafting. Provides both functional strength and aesthetic excellence.'
        }
      ],
      color: 'forest-light'
    },
    {
      name: 'Dr. Ambar Vázquez',
      shortName: 'Dr. Vázquez',
      clinic: 'Ambar Vázquez Dental Studio',
      specialty: 'Specialist in natural smile design and advanced aesthetics',
      bio: [
        'Expert in creating natural, harmonious smiles that enhance facial beauty.',
        'Specializes in minimally invasive aesthetic dentistry with premium materials.'
      ],
      quote: 'Natural results, perfect proportions, and facial harmony',
      expertise: [
        'Smile design with injected composite veneers',
        'Smile design with layered composite veneers',
        'Smile design with layered Emax porcelain veneers'
      ],
      treatments: [],
      color: 'forest'
    },
    {
      name: 'Dr. Manuel García',
      shortName: 'Dr. García',
      clinic: 'Esencial Dental Cancún',
      specialty: 'Specialist in oral rehabilitation and advanced dental aesthetics',
      bio: [
        'Expert in full-mouth rehabilitation and complex restorative cases.',
        'Combines art and science to restore function and beauty to damaged smiles.'
      ],
      quote: 'The art of restoring form, function, and beauty to your smile',
      expertise: [
        'Full-mouth rehabilitation for patients with bruxism',
        'Tooth reconstruction using direct and indirect resin techniques',
        'Personalized smile designs'
      ],
      treatments: [],
      color: 'sage'
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'gradient') => {
    const colors = {
      forest: {
        bg: 'bg-forest/10',
        text: 'text-forest',
        border: 'border-forest/20',
        gradient: 'from-forest to-sage'
      },
      sage: {
        bg: 'bg-sage/10',
        text: 'text-sage',
        border: 'border-sage/20',
        gradient: 'from-sage to-forest'
      },
      'forest-light': {
        bg: 'bg-forest-light/10',
        text: 'text-forest-light',
        border: 'border-forest-light/20',
        gradient: 'from-forest-light to-sage'
      }
    };
    return colors[color as keyof typeof colors][type];
  };

  return (
    <div className="space-y-6">
      {specialists.map((specialist, index) => {
        const isExpanded = expandedId === specialist.name;
        const colorBg = getColorClasses(specialist.color, 'bg');
        const colorText = getColorClasses(specialist.color, 'text');
        const colorBorder = getColorClasses(specialist.color, 'border');
        const colorGradient = getColorClasses(specialist.color, 'gradient');

        return (
          <div
            key={specialist.name}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <div
              className={`p-6 md:p-8 cursor-pointer hover:bg-slate-50 transition-colors duration-200 ${isExpanded ? colorBg : ''}`}
              onClick={() => toggleExpand(specialist.name)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">{specialist.shortName}</h3>
                      <p className={`text-sm md:text-base font-semibold ${colorText}`}>{specialist.clinic}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium mb-2">{specialist.specialty}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialist.expertise.slice(0, 2).map((item, idx) => (
                      <span key={idx} className={`text-xs px-3 py-1 ${colorBg} ${colorText} rounded-full font-medium`}>
                        {item.length > 40 ? item.substring(0, 40) + '...' : item}
                      </span>
                    ))}
                    {specialist.expertise.length > 2 && (
                      <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-medium">
                        +{specialist.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className={`flex-shrink-0 w-10 h-10 rounded-full ${colorBg} flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <svg className={`w-5 h-5 ${colorText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-6 md:p-8 pt-0 space-y-6">
                {/* Bio */}
                <div className={`${colorBg} rounded-2xl p-6 border ${colorBorder}`}>
                  <h4 className={`text-lg font-bold ${colorText} mb-4`}>About {specialist.shortName}</h4>
                  <div className="space-y-3">
                    {specialist.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-slate-700 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white rounded-2xl p-6 border-l-4 border-forest shadow-md">
                  <p className="text-slate-800 italic text-lg font-medium leading-relaxed">
                    "{specialist.quote}"
                  </p>
                  <p className={`${colorText} font-semibold mt-2`}>— {specialist.shortName}</p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Areas of Expertise</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {specialist.expertise.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                        <svg className={`w-5 h-5 ${colorText} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatments */}
                {specialist.treatments.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Treatments & Services</h4>
                    <div className="space-y-4">
                      {specialist.treatments.map((treatment, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                          <h5 className={`font-bold ${colorText} mb-2`}>{treatment.title}</h5>
                          <p className="text-slate-700 text-sm leading-relaxed mb-2">{treatment.description}</p>
                          {treatment.price && (
                            <p className="text-slate-600 text-sm font-semibold">{treatment.price}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Advanced Techniques */}
                {specialist.advancedTechniques && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <svg className="w-6 h-6 text-forest-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Advanced Implant Techniques
                    </h4>
                    <p className="text-slate-600 text-sm mb-4">For patients with severe bone loss or complex cases:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {specialist.advancedTechniques.map((technique, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-forest-light/10 to-sage/10 rounded-xl p-5 border border-forest-light/20">
                          <h5 className="font-bold text-forest-light mb-2">{technique.title}</h5>
                          <p className="text-slate-700 text-sm leading-relaxed">{technique.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className={`bg-gradient-to-r ${colorGradient} rounded-2xl p-6 text-center`}>
                  <p className="text-white text-sm mb-4">Not sure which treatment is right for you?</p>
                  <a
                    href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-forest px-8 py-3 rounded-xl font-bold hover:bg-sand transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact {specialist.shortName}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialistAccordion;
