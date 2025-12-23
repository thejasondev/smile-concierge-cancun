import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      text: 'Dr. Vázquez created the most natural-looking veneers I could have imagined. The entire team made me feel comfortable throughout my stay.',
      shortText: 'Amazing natural-looking veneers. Professional team!',
      rating: 5,
      treatment: 'Veneers',
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      text: 'Dr. García completely transformed my teeth. The All-on-4 procedure was seamless, and the results look incredibly natural.',
      shortText: 'Complete smile transformation. Incredible results!',
      rating: 5,
      treatment: 'All-on-4',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Los Angeles, USA',
      text: 'Dr. Pavón and his team are true artists. My dental implants look and feel exactly like my natural teeth.',
      shortText: 'True artists! Implants feel completely natural.',
      rating: 5,
      treatment: 'Implants',
    },
  ];

  return (
    <section id="reviews" className="bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="mb-8 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl lg:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:max-w-3xl md:text-xl">
            Real transformations from patients
            <span className="hidden md:inline">
              {' '}
              who chose Cancun for their perfect smile
            </span>
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Carousel | Desktop: Grid */}
        {/* Mobile Carousel */}
        <div className="-mx-4 mb-6 px-4 md:hidden">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[85vw] shrink-0 snap-start">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-5 shadow-xl backdrop-blur-xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-forest/5' : index === 1 ? 'from-sage/5' : 'from-forest-light/5'} to-transparent`}
                  ></div>
                  <div className="relative">
                    {/* Stars and Treatment */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span
                        className={`inline-block ${index === 0 ? 'bg-forest/10 text-forest' : index === 1 ? 'bg-sage/10 text-sage' : 'bg-forest-light/10 text-forest-light'} rounded-full px-2 py-1 text-xs font-medium`}
                      >
                        {testimonial.treatment}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-4 text-sm leading-relaxed text-slate-600 italic">
                      "{testimonial.shortText}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="border-t border-white/20 pt-3">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Indicator */}
          <div className="mt-1 flex justify-center gap-2">
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
              Swipe to read more
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
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:p-8"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-forest/5' : index === 1 ? 'from-sage/5' : 'from-forest-light/5'} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              ></div>
              <div className="relative">
                {/* Mobile: Compact Stars */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-amber-400 md:h-5 md:w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className={`inline-block ${index === 0 ? 'bg-forest/10 text-forest' : index === 1 ? 'bg-sage/10 text-sage' : 'bg-forest-light/10 text-forest-light'} rounded-full px-2 py-1 text-xs font-medium`}
                  >
                    {testimonial.treatment}
                  </span>
                </div>

                {/* Responsive Quote */}
                <blockquote className="mb-4 leading-relaxed text-slate-600 italic md:mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Simplified Patient Info */}
                <div className="border-t border-white/20 pt-4 md:pt-6">
                  <h4 className="text-sm font-semibold text-slate-800 md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 md:text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized Trust Section - Glassmorphism */}
        <div className="mt-8 flex justify-center md:mt-16">
          <div className="w-full max-w-md rounded-2xl border border-white/40 bg-white/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl md:p-8">
            <div className="mb-4 grid grid-cols-3 gap-4 md:mb-6 md:gap-8">
              <div className="group">
                <div className="from-forest to-forest-dark bg-gradient-to-br bg-clip-text text-xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 md:text-2xl">
                  500+
                </div>
                <div className="text-xs font-medium text-slate-700 md:text-sm">
                  Patients
                </div>
              </div>
              <div className="group">
                <div className="text-xl font-bold text-amber-500 transition-transform duration-300 group-hover:scale-110 md:text-2xl">
                  4.9★
                </div>
                <div className="text-xs font-medium text-slate-700 md:text-sm">
                  Rating
                </div>
              </div>
              <div className="group">
                <div className="from-forest-light to-sage bg-gradient-to-br bg-clip-text text-xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 md:text-2xl">
                  100%
                </div>
                <div className="text-xs font-medium text-slate-700 md:text-sm">
                  Guarantee
                </div>
              </div>
            </div>
            <a
              href="/reviews"
              className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark inline-block w-full rounded-xl bg-gradient-to-r px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 md:px-6 md:py-3 md:text-base"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
