import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-cream via-white to-sand pt-16 pb-20 lg:py-28 overflow-hidden">
      {/* Background Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 w-20 h-20 bg-forest rounded-full blur-xl"></div>
        <div className="absolute top-32 right-6 w-16 h-16 bg-sage rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 bg-forest-light rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Mobile-First Heading */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              <span className="block sm:inline">Smile Concierge</span>
              <span className="block sm:inline text-forest"> Cancun</span>
            </h1>
            <div className="mt-3 sm:mt-4">
              <span className="inline-block bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-semibold">
                ✨ Luxury. Expertise. Confidence.
              </span>
            </div>
          </div>
          
          {/* Mobile-Optimized Description */}
          <div className="mb-8 space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-light leading-relaxed max-w-4xl mx-auto">
              Guided by Cancun's most experienced specialists
            </p>
            
            {/* Key Benefits - Compact Cards */}
            <div className="lg:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-6 hidden">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-100 shadow-md">
                <p className="text-sm text-slate-600 font-medium">Free Assessment</p>
                <p className="text-xs text-slate-500 mt-1">Complete evaluation</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-100 shadow-md">
                <p className="text-sm text-slate-600 font-medium">Expert Planning</p>
                <p className="text-xs text-slate-500 mt-1">Before you arrive</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-100 shadow-md">
                <p className="text-sm text-slate-600 font-medium">Natural Results</p>
                <p className="text-xs text-slate-500 mt-1">Premium quality</p>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized CTA */}
          <div className="mb-10 space-y-5">
            <a 
              href="https://wa.me/5219983351933?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-gradient-to-r from-forest to-sage text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-2xl hover:shadow-3xl text-center transform hover:scale-105"
            >
              Start Your Free Assessment
            </a>
            
            {/* Trust Message - Subtle */}
            <p className="text-sm sm:text-base text-slate-600 font-light">
              Trusted by 500+ patients • 4.9★ rated
            </p>
          </div>
          
          {/* Social Proof - Modern Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-md">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-forest to-sage rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-sage to-forest-light rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-forest-light to-forest rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-semibold text-slate-700">500+ Patients</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-md">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-slate-700">4.9 Rating</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-md">
              <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-slate-700">10+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
