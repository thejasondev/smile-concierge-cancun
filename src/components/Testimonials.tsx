import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      text: 'Dr. Vázquez created the most natural-looking veneers I could have imagined. The entire team made me feel comfortable throughout my stay.',
      shortText: 'Amazing natural-looking veneers. Professional team!',
      rating: 5,
      treatment: 'Veneers'
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      text: 'Dr. García completely transformed my teeth. The All-on-4 procedure was seamless, and the results look incredibly natural.',
      shortText: 'Complete smile transformation. Incredible results!',
      rating: 5,
      treatment: 'All-on-4'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Los Angeles, USA',
      text: 'Dr. Pavón and his team are true artists. My dental implants look and feel exactly like my natural teeth.',
      shortText: 'True artists! Implants feel completely natural.',
      rating: 5,
      treatment: 'Implants'
    }
  ];

  return (
    <section id="reviews" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Success Stories
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Real transformations from patients
            <span className="hidden md:inline"> who chose Cancun for their perfect smile</span>
          </p>
        </div>

        {/* Mobile-Optimized Testimonials - Glassmorphism */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-forest/5' : index === 1 ? 'from-sage/5' : 'from-forest-light/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative">
              {/* Mobile: Compact Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={`inline-block ${index === 0 ? 'bg-forest/10 text-forest' : index === 1 ? 'bg-sage/10 text-sage' : 'bg-forest-light/10 text-forest-light'} text-xs px-2 py-1 rounded-full font-medium`}>
                  {testimonial.treatment}
                </span>
              </div>

              {/* Responsive Quote */}
              <blockquote className="text-slate-600 mb-4 md:mb-6 italic leading-relaxed">
                <span className="md:hidden">"{testimonial.shortText}"</span>
                <span className="hidden md:inline">"{testimonial.text}"</span>
              </blockquote>

              {/* Simplified Patient Info */}
              <div className="border-t border-white/20 pt-4 md:pt-6">
                <h4 className="font-semibold text-slate-800 text-sm md:text-base">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-slate-500">{testimonial.location}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized Trust Section - Glassmorphism */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-md text-center">
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-6">
              <div className="group">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-br from-forest to-forest-dark bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-xs md:text-sm text-slate-700 font-medium">Patients</div>
              </div>
              <div className="group">
                <div className="text-xl md:text-2xl font-bold text-amber-500 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                <div className="text-xs md:text-sm text-slate-700 font-medium">Rating</div>
              </div>
              <div className="group">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-br from-forest-light to-sage bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-xs md:text-sm text-slate-700 font-medium">Guarantee</div>
              </div>
            </div>
            <a 
              href="/reviews" 
              className="bg-gradient-to-r from-forest to-sage text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 w-full inline-block text-center"
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
