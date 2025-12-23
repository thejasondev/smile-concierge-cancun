import React from 'react';

const NaturalResults: React.FC = () => {
  const results = [
    {
      image: '/resultados/inyecdadas de resina .jpeg',
      title: 'Injected Composite Veneers',
      treatment: 'Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Natural color matching and translucency',
    },
    {
      image: '/resultados/inyectadas de resina.jpeg',
      title: 'Composite Restoration',
      treatment: 'Aesthetic Dentistry',
      specialist: 'Dra. Vázquez',
      description: 'Seamless integration with natural teeth',
    },
    {
      image: '/resultados/porcelana (1).jpeg',
      title: 'Emax Porcelain Veneers',
      treatment: 'Premium Smile Design',
      specialist: 'Dra. Vázquez',
      description: 'Perfect translucency and color gradients',
    },
  ];

  return (
    <section
      id="results"
      className="from-cream via-sand/30 relative bg-gradient-to-br to-white py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="mb-8 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-slate-800 md:mb-6 md:text-3xl lg:text-4xl">
            Natural is in.
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-slate-600 line-through decoration-red-500 md:mb-6 md:max-w-3xl md:text-xl">
            Gum-colored, fake-looking teeth are out.
          </p>
          <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-slate-700 md:mb-8 md:text-xl">
            Our restorations combine the perfect white with natural beauty:
            subtle translucency, color nuances, and fine details that reflect
            real-life teeth.
          </p>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Results that look authentic, elegant… just like the smiles of
            artists.
          </p>
          <div className="bg-sand/30 border-sand mt-6 inline-flex items-center rounded-full border px-6 py-3">
            <p className="text-forest text-base font-semibold md:text-lg">
              Your smile, natural and one-of-a-kind.
            </p>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll Carousel | Desktop: Grid */}
        {/* Mobile Carousel Container */}
        <div className="-mx-4 mb-8 px-4 md:hidden">
          <div
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {results.map((result, index) => (
              <div key={index} className="w-[85vw] flex-shrink-0 snap-start">
                <div className="h-full overflow-hidden rounded-2xl bg-white shadow-xl">
                  {/* Before/After Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={result.image}
                      alt={`${result.title} - Before and After`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay Badge */}
                    <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 shadow-lg backdrop-blur-sm">
                      <p className="text-forest text-xs font-bold">
                        Before & After
                      </p>
                    </div>
                    {/* Specialist Tag */}
                    <div className="bg-forest/90 absolute top-3 right-3 rounded-full px-2.5 py-1 shadow-lg backdrop-blur-sm">
                      <p className="text-xs font-semibold text-white">
                        {result.specialist}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${index % 3 === 0 ? 'bg-forest' : index % 3 === 1 ? 'bg-sage' : 'bg-forest-light'}`}
                      ></div>
                      <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                        {result.treatment}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-slate-800">
                      {result.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Indicator */}
          <div className="mt-2 flex justify-center gap-2">
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
              Swipe to see more
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
        <div className="mb-8 hidden gap-6 md:mb-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Before/After Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={result.image}
                  alt={`${result.title} - Before and After`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                  <p className="text-forest text-xs font-bold">
                    Before & After
                  </p>
                </div>
                {/* Specialist Tag */}
                <div className="bg-forest/90 absolute top-4 right-4 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold text-white">
                    {result.specialist}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${index % 3 === 0 ? 'bg-forest' : index % 3 === 1 ? 'bg-sage' : 'bg-forest-light'}`}
                  ></div>
                  <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {result.treatment}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800 md:text-xl">
                  {result.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized CTA */}
        <div className="mb-8 text-center md:mb-16">
          <a
            href="/results"
            className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark inline-block rounded-xl bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl md:px-8 md:text-base"
          >
            View All Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default NaturalResults;
