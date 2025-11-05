import React from 'react';

interface Specialist {
  name: string;
  clinic: string;
  specialty: string;
  treatments: string[];
  highlight: string;
}

const specialists: Specialist[] = [
    {
    name: 'Dr. Xavier Pavón',
    clinic: 'Centro Dental Implantológico',
    specialty: 'Specialist in Implantology and Advanced Rehabilitation',
    treatments: [
      'Dental implants',
      'Bone grafting',
      'Sinus lift',
      'Zygomatic implants',
      'All-on-4 / All-on-6 rehabilitations'
    ],
    highlight: 'Safe, aesthetic, and long-lasting solutions to restore your smile'
  },
  {
    name: 'Dr. Ambar Vázquez',
    clinic: 'Ambar Vázquez Dental Studio',
    specialty: 'Specialist in natural smile design and advanced aesthetics',
    treatments: [
      'Smile design with injected composite veneers',
      'Smile design with layered composite veneers',
      'Smile design with layered Emax porcelain veneers'
    ],
    highlight: 'Natural results, perfect proportions, and facial harmony'
  },
  {
    name: 'Dr. Manuel García',
    clinic: 'Esencial Dental Cancún',
    specialty: 'Specialist in oral rehabilitation and advanced dental aesthetics',
    treatments: [
      'Full-mouth rehabilitation for patients with bruxism',
      'Tooth reconstruction using direct and indirect resin techniques',
      'Personalized smile designs'
    ],
    highlight: 'The art of restoring form, function, and beauty to your smile'
  },
];

const Services: React.FC = () => {
  return (
    <section id="specialists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Specialists
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At Smile Concierge Cancun, we bring together the most recognized specialists in Cancun — each with exceptional experience and clinics equipped with state-of-the-art technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${index === 0 ? 'bg-forest/10' : index === 1 ? 'bg-sage/10' : 'bg-forest-light/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-10 h-10 ${index === 0 ? 'text-forest' : index === 1 ? 'text-sage' : 'text-forest-light'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {specialist.name}
                </h3>
                <p className="text-forest font-semibold mb-2">{specialist.clinic}</p>
                <p className="text-slate-600 text-sm">{specialist.specialty}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Treatments:</h4>
                <ul className="space-y-2">
                  {specialist.treatments.map((treatment, treatmentIndex) => (
                    <li key={treatmentIndex} className="flex items-start text-slate-600 text-sm">
                      <svg
                        className="w-4 h-4 text-forest mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand/30 rounded-xl p-4 mb-6 border border-sand">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-forest/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-forest-dark text-sm font-medium">
                    {specialist.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Specialists Page */}
        <div className="text-center mt-12">
          <a 
            href="/specialists"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-forest to-sage text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn More About Our Specialists
          </a>
          <p className="text-sm text-slate-600 mt-4">
            Discover detailed information about each doctor's expertise and experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
