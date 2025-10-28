import React from 'react';

const NaturalResults: React.FC = () => {
  return (
    <section id="results" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
            Natural is in.
          </h2>
          <p className="text-base md:text-xl text-slate-600 mb-4 md:mb-6 max-w-2xl md:max-w-3xl mx-auto leading-relaxed line-through decoration-red-500">
            Gum-colored, fake-looking teeth are out.
          </p>
          <p className="text-base md:text-xl text-slate-700 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Our restorations combine the perfect white with natural beauty: subtle translucency, color nuances, and fine details that reflect real-life teeth.
          </p>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Results that look authentic, elegant… just like the smiles of artists.
          </p>
          {/* Mobile: Hide badge, Desktop: Show */}
          <div className="mt-6 inline-flex items-center bg-sand/30 px-6 py-3 rounded-full border border-sand">
            <p className="text-base md:text-lg text-forest font-semibold">
               Your smile, natural and one-of-a-kind.
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
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-forest/10 to-sage/10 backdrop-blur-sm flex items-center justify-center h-48 md:h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative text-center p-6 md:p-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-forest font-bold text-sm md:text-base">Before & After</p>
                  <p className="text-xs md:text-sm text-forest-light font-medium">Case #{item}</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white/40 backdrop-blur-sm">
                <h3 className="font-bold bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent mb-2 text-sm md:text-base">Natural Smile Transformation</h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                  Perfect color matching
                  <span className="hidden md:inline"> and natural translucency</span>
                </p>
              </div>
            </div>
          ))}
          
          {/* Desktop: Show third case - Glassmorphism */}
          <div className="hidden lg:block group relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-forest-light/10 to-sage/10 backdrop-blur-sm flex items-center justify-center h-56 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="relative text-center p-8">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-forest-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-forest-light font-bold">Before & After</p>
                <p className="text-sm text-sage font-medium">Case #3</p>
              </div>
            </div>
            <div className="p-6 bg-white/40 backdrop-blur-sm">
              <h3 className="font-bold bg-gradient-to-r from-forest-light to-sage bg-clip-text text-transparent mb-2">Natural Smile Transformation</h3>
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
            className="bg-gradient-to-r from-forest to-sage text-white px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-semibold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            View All Cases
          </a>
        </div>

        {/* Mobile-Optimized Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Real Textures</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Authentic surface details</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Translucency</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Perfect light transmission</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-forest-light/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-forest-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2 text-xs md:text-sm">Color Match</h4>
            <p className="text-xs text-slate-600 leading-relaxed hidden md:block">Subtle color variations</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
