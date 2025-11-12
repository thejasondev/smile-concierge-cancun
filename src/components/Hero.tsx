import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0">
        <img
          src="/hero/hero.jpeg"
          alt="Happy patient with beautiful smile"
          className="h-full w-full object-cover object-center lg:object-right"
        />
        <div className="absolute inset-0 bg-forest/75" />
        <div className="absolute inset-0 bg-linear-to-r from-forest/85 via-slate-950/55 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-sand/25 blur-3xl sm:h-112 sm:w-md" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-88 w-88 rounded-full bg-sage/25 blur-3xl sm:h-104 sm:w-104" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-28 xl:py-32">
          {/* Primary copy */}
          <div className="w-full max-w-2xl space-y-10">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/80 lg:justify-start">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Now accepting new patients
              </span>
              <span className="hidden text-white/65 lg:inline-block">Concierge dentistry inspired by Mexico's Caribbean coast</span>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.45em] text-sand/70 sm:text-sm">Smile Concierge Cancun</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block bg-linear-to-r from-white via-sand to-cream bg-clip-text text-transparent">
                  Guided smile transformations,
                </span>
                <span className="block text-white/90">crafted in Cancun.</span>
              </h1>
              <p className="text-lg text-white/70 sm:text-xl lg:text-2xl">
                Experience concierge-level dentistry that blends world-class specialists, bespoke treatment plans, and serene recovery moments overlooking the Caribbean skyline.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-white via-sand to-cream px-9 py-4 text-lg font-semibold text-forest shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
              >
                Start your free assessment
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/specialists"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore specialists
              </a>
            </div>

            <div className="flex flex-col gap-6 text-center text-white/75 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src="/Pacientes+500/paciente1.jpeg"
                    alt="Happy patient"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                  />
                  <img
                    src="/Pacientes+500/paciente2.jpeg"
                    alt="Happy patient"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                  />
                  <img
                    src="/Pacientes+500/paciente3.jpeg"
                    alt="Happy patient"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                  />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-white">500+ smiles elevated</p>
                  <p className="text-sm text-white/60">4.9★ average patient satisfaction</p>
                </div>
              </div>
              <div className="hidden h-12 w-px bg-white/20 sm:block" />
              <div className="space-y-1 text-sm text-white/60 sm:text-left">
                <p>Door-to-door concierge planning</p>
                <p>10+ years blending aesthetics and wellness</p>
              </div>
            </div>
          </div>

          {/* Metrics card */}
          <aside className="hidden md:block w-full max-w-md self-center rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl sm:p-10 lg:max-w-lg">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">Field data</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Concierge metrics</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-semibold text-sand">47%</p>
                <p className="mt-1 text-sm text-white/65">Faster treatment clarity through curated assessments.</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-4xl font-semibold text-sand">5k+</p>
                <p className="mt-1 text-sm text-white/65">Digital smile plans delivered to discerning travelers.</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-4xl font-semibold text-sand">100k+</p>
                <p className="mt-1 text-sm text-white/65">Data points analyzed to craft lasting restorations.</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-4 text-xs text-white/60 sm:text-sm">
              Benchmarked across 1,200+ concierge experiences with Smile Concierge Cancun and accredited partners.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
