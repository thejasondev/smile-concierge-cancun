import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-16 pb-20 lg:py-28 overflow-hidden">
      {/* Background Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 w-20 h-20 bg-teal-500 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-6 w-16 h-16 bg-cyan-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 bg-emerald-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Mobile-First Heading */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              <span className="block sm:inline">Smile Concierge</span>
              <span className="block sm:inline text-teal-600"> Cancun</span>
            </h1>
            <div className="mt-3 sm:mt-4">
              <span className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-semibold">
                ✨ Luxury Dental Experience
              </span>
            </div>
          </div>
          
          {/* Mobile-Optimized Description */}
          <div className="mb-8 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              World-class dental care with Cancun's top specialists
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl text-slate-600">
              <span>Save up to</span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm sm:text-base font-bold">
                70%
              </span>
              <span>while enjoying paradise</span>
            </div>
          </div>

          {/* Mobile-First Key Benefits - Glassmorphism */}
          <div className="mb-8">
            {/* Mobile: Compact inline badges with glassmorphism */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:hidden mb-4">
              <div className="inline-flex items-center bg-white/70 backdrop-blur-xl rounded-full px-4 py-2.5 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mr-2">70%</span>
                <span className="text-xs text-slate-700 font-semibold">Savings</span>
              </div>
              <div className="inline-flex items-center bg-white/70 backdrop-blur-xl rounded-full px-4 py-2.5 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent mr-2">3-5</span>
                <span className="text-xs text-slate-700 font-semibold">Days</span>
              </div>
              <div className="inline-flex items-center bg-white/70 backdrop-blur-xl rounded-full px-4 py-2.5 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mr-2">100%</span>
                <span className="text-xs text-slate-700 font-semibold">Guarantee</span>
              </div>
            </div>
            
            {/* Desktop: Full cards with glassmorphism */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold bg-gradient-to-br from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">70%</div>
                  <div className="text-base text-slate-700 font-semibold">Cost Savings</div>
                </div>
              </div>
              
              <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold bg-gradient-to-br from-cyan-600 to-cyan-500 bg-clip-text text-transparent mb-2">3-5</div>
                  <div className="text-base text-slate-700 font-semibold">Days Only</div>
                </div>
              </div>
              
              <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-base text-slate-700 font-semibold">Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized CTAs */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="/process" 
                className="group bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Free Assessment
                </span>
              </a>
              <a 
                href="/results" 
                className="group border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Our Work
                </span>
              </a>
            </div>
          </div>
          
          {/* Trust Indicator - Glassmorphism */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-full border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full border-2 border-white shadow-md"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full border-2 border-white shadow-md"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="text-sm text-slate-700 font-medium">
              <span className="font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">500+</span> happy patients
            </div>
            <div className="flex items-center gap-0.5">
              <svg className="w-4 h-4 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-bold text-amber-500">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
