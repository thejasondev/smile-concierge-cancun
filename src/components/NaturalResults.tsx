import React from 'react';

const NaturalResults: React.FC = () => {
  const results = [
    {
      image: '/resultados/inyecdadas de resina .jpeg',
      title: 'Injected Composite Veneers',
      treatment: 'Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Natural color matching and translucency'
    },
    {
      image: '/resultados/inyectadas de resina.jpeg',
      title: 'Composite Restoration',
      treatment: 'Aesthetic Dentistry',
      specialist: 'Dra. Vázquez',
      description: 'Seamless integration with natural teeth'
    },
    {
      image: '/resultados/porcelana (1).jpeg',
      title: 'Emax Porcelain Veneers',
      treatment: 'Premium Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Perfect translucency and color gradients'
    },
    {
      image: '/resultados/porcelana (5).jpeg',
      title: 'Porcelain Crowns',
      treatment: 'Oral Rehabilitation',
      specialist: 'Dra. Vázquez',
      description: 'Authentic texture and natural appearance'
    },
    {
      image: '/resultados/porcelana (7).jpeg',
      title: 'Full Smile Makeover',
      treatment: 'Complete Transformation',
      specialist: 'Dra. Vázquez',
      description: 'Harmonious results with facial features'
    }
  ];

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

        {/* Real Results Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Before/After Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={result.image}
                  alt={`${result.title} - Before and After`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <p className="text-xs font-bold text-forest">Before & After</p>
                </div>
                {/* Specialist Tag */}
                <div className="absolute top-4 right-4 bg-forest/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <p className="text-xs font-semibold text-white">{result.specialist}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${index % 3 === 0 ? 'bg-forest' : index % 3 === 1 ? 'bg-sage' : 'bg-forest-light'}`}></div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{result.treatment}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                  {result.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
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
