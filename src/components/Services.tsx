import React from 'react';
import SpecialistCard from './SpecialistCard';
import SpecialistsCarousel from './SpecialistsCarousel';
import { specialists } from '../data/specialists';

const Services: React.FC = () => {
  return (
    <section
      id="specialists"
      className="overflow-hidden bg-white py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center md:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-slate-800 md:mb-4 md:text-3xl lg:text-4xl">
            Our Specialists
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-xl">
            At Smile Concierge Cancun, we bring together the most recognized
            specialists in Cancun — each with exceptional experience and clinics
            equipped with state-of-the-art technology.
          </p>
        </div>

        {/* Mobile: Stacked Deck Carousel */}
        <div className="md:hidden">
          <SpecialistsCarousel />
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
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
        <div className="mt-8 text-center md:mt-12">
          <a
            href="/specialists"
            className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark inline-flex transform items-center gap-3 rounded-2xl bg-linear-to-r px-6 py-3 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:px-10 md:py-5 md:text-xl"
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Learn More About Our Specialists
          </a>
          <p className="mt-3 text-sm text-slate-600 md:mt-4">
            Discover detailed information about each doctor's expertise and
            experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
