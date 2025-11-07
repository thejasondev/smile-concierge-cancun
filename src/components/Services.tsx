import React from 'react';
import SpecialistCard from './SpecialistCard';
import { specialists } from '../data/specialists';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialists.map((specialist) => (
            <SpecialistCard
              key={specialist.slug}
              name={specialist.name}
              shortName={specialist.shortName}
              clinic={specialist.clinic}
              specialty={specialist.specialty}
              expertise={specialist.expertise}
              color={specialist.color}
              slug={specialist.slug}
              image={specialist.image}
            />
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
