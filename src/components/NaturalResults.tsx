import React from 'react';

const NaturalResults: React.FC = () => {
  return (
    <section id="results" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
            Natural Results
          </h2>
          <p className="text-base md:text-xl text-slate-600 mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Perfect aesthetics with natural beauty
            <span className="hidden md:inline"> for results that look authentic and elegant</span>
          </p>
          {/* Mobile: Hide badge, Desktop: Show */}
          <div className="hidden md:inline-flex items-center bg-teal-50 px-6 py-3 rounded-full border border-teal-100">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg text-teal-700 font-semibold">
              Your smile, natural and one-of-a-kind
            </p>
          </div>
        </div>

        {/* Mobile-Optimized Gallery - Glassmorphism */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {/* Mobile: Show only 2 cases, Desktop: Show 3 */}
          {[1, 2].map((item) => (
            <div
              key={item}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-teal-100/80 to-cyan-200/80 backdrop-blur-sm flex items-center justify-center h-48 md:h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative text-center p-6 md:p-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-teal-700 font-bold text-sm md:text-base">Before & After</p>
                  <p className="text-xs md:text-sm text-teal-600 font-medium">Case #{item}</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white/40 backdrop-blur-sm">
                <h3 className="font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 text-sm md:text-base">Natural Smile Transformation</h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                  Perfect color matching
                  <span className="hidden md:inline"> and natural translucency</span>
                </p>
              </div>
            </div>
          ))}
          
          {/* Desktop: Show third case - Glassmorphism */}
          <div className="hidden lg:block group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-emerald-100/80 to-teal-200/80 backdrop-blur-sm flex items-center justify-center h-56 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="relative text-center p-8">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-emerald-700 font-bold">Before & After</p>
                <p className="text-sm text-emerald-600 font-medium">Case #3</p>
              </div>
            </div>
            <div className="p-6 bg-white/40 backdrop-blur-sm">
              <h3 className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">Natural Smile Transformation</h3>
              <p className="text-sm text-slate-700 font-medium">
                Authentic results with perfect color matching and natural translucency.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized CTA */}
        <div className="text-center mb-8 md:mb-16">
          <a 
            href="/results" 
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            View All Cases
          </a>
        </div>

        {/* Mobile-Optimized Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Real Textures</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Authentic surface details</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Translucency</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Perfect light transmission</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Color Match</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Subtle color variations</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Fine Details</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Precise craftsmanship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalResults;
