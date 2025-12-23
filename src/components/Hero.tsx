import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* ===== MOBILE LAYOUT (< md): Vertical Split ===== */}
      <div className="flex flex-col md:hidden">
        {/* Full Image Section - Mobile */}
        <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-16/10">
          <img
            src="/hero/hero.jpeg"
            alt="Happy patient with beautiful smile"
            className="h-full w-full object-cover object-center"
          />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent" />
          {/* Badge overlay on image */}
          <div className="absolute top-4 right-4 left-4 flex justify-center sm:justify-start">
            <span className="flex items-center gap-2 rounded-full bg-slate-950/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Now accepting new patients
            </span>
          </div>
        </div>

        {/* Content Section - Mobile */}
        <div className="relative bg-slate-950 px-5 pt-6 pb-10 sm:px-8">
          {/* Decorative glows */}
          <div className="bg-sand/10 pointer-events-none absolute -top-20 left-1/4 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-sage/10 pointer-events-none absolute right-0 -bottom-10 h-32 w-32 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Title & Subtitle */}
            <div className="mb-6 space-y-4 text-center">
              <p className="text-sand/80 text-xs tracking-[0.4em] uppercase">
                Smile Concierge Cancun
              </p>
              <h1 className="text-2xl leading-tight font-semibold sm:text-3xl">
                <span className="via-sand to-cream block bg-linear-to-r from-white bg-clip-text text-transparent">
                  Guided smile transformations,
                </span>
                <span className="block text-white/95">crafted in Cancun.</span>
              </h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Concierge-level dentistry with world-class specialists and
                serene recovery overlooking the Caribbean.
              </p>
            </div>

            {/* CTAs - Mobile optimized */}
            <div className="mb-6 flex flex-col gap-3">
              <a
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="group via-sand to-cream text-forest flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-white px-6 py-3.5 text-base font-semibold shadow-xl transition-all duration-300 active:scale-[0.98]"
              >
                Start your free assessment
                <svg
                  className="h-5 w-5"
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
              </a>
              <a
                href="/specialists"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 active:bg-white/10"
              >
                Explore specialists
              </a>
            </div>

            {/* Social Proof - Compact Mobile */}
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <img
                  src="/Pacientes+500/paciente1.jpeg"
                  alt="Happy patient"
                  className="h-8 w-8 rounded-full border-2 border-white/70 object-cover"
                />
                <img
                  src="/Pacientes+500/paciente2.jpeg"
                  alt="Happy patient"
                  className="h-8 w-8 rounded-full border-2 border-white/70 object-cover"
                />
                <img
                  src="/Pacientes+500/paciente3.jpeg"
                  alt="Happy patient"
                  className="h-8 w-8 rounded-full border-2 border-white/70 object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  500+ smiles elevated
                </p>
                <p className="text-xs text-white/60">4.9★ • 10+ years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TABLET & DESKTOP LAYOUT (md+): Horizontal Split ===== */}
      <div className="hidden md:flex md:min-h-screen">
        {/* Left Side - Content */}
        <div className="relative flex w-full flex-col justify-center bg-slate-950 px-8 py-16 lg:w-1/2 lg:px-16 xl:px-20">
          {/* Decorative glows */}
          <div className="bg-sand/10 pointer-events-none absolute top-20 left-1/4 h-60 w-60 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-sage/10 pointer-events-none absolute right-0 bottom-20 h-48 w-48 rounded-full blur-3xl" />
          <div className="bg-forest/5 pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-white/80 lg:mb-8">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Now accepting new patients
              </span>
              <span className="hidden text-white/60 lg:inline-block">
                Concierge dentistry inspired by Mexico's Caribbean coast
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-6 space-y-4 lg:mb-8 lg:space-y-5">
              <p className="text-sand/80 text-xs tracking-[0.45em] uppercase lg:text-sm">
                Smile Concierge Cancun
              </p>
              <h1 className="text-3xl leading-tight font-semibold lg:text-4xl xl:text-5xl">
                <span className="via-sand to-cream block bg-linear-to-r from-white bg-clip-text text-transparent">
                  Guided smile transformations,
                </span>
                <span className="block text-white/95">crafted in Cancun.</span>
              </h1>
              <p className="text-base leading-relaxed text-white/75 lg:text-lg xl:text-xl">
                Experience concierge-level dentistry that blends world-class
                specialists, bespoke treatment plans, and serene recovery
                overlooking the Caribbean skyline.
              </p>
            </div>

            {/* CTAs */}
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row lg:mb-8">
              <a
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="group via-sand to-cream text-forest hover:shadow-3xl inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-white px-6 py-3.5 text-base font-semibold shadow-2xl transition-all duration-300 hover:-translate-y-1 lg:px-8 lg:py-4 lg:text-lg"
              >
                Start your free assessment
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </a>
              <a
                href="/specialists"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/15 lg:px-8 lg:py-4 lg:text-lg"
              >
                Explore specialists
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-start gap-4 text-white/75 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src="/Pacientes+500/paciente1.jpeg"
                    alt="Happy patient"
                    className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-lg lg:h-11 lg:w-11"
                  />
                  <img
                    src="/Pacientes+500/paciente2.jpeg"
                    alt="Happy patient"
                    className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-lg lg:h-11 lg:w-11"
                  />
                  <img
                    src="/Pacientes+500/paciente3.jpeg"
                    alt="Happy patient"
                    className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-lg lg:h-11 lg:w-11"
                  />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-white lg:text-lg">
                    500+ smiles elevated
                  </p>
                  <p className="text-xs text-white/60 lg:text-sm">
                    4.9★ average satisfaction
                  </p>
                </div>
              </div>
              <div className="hidden h-10 w-px bg-white/20 lg:block" />
              <div className="hidden text-left text-sm text-white/60 lg:block">
                <p>10+ years of excellence</p>
                <p>Door-to-door concierge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image (fully visible, no overlay) */}
        <div className="relative w-full overflow-hidden lg:w-1/2">
          <img
            src="/hero/hero3.jpeg"
            alt="Happy patient with beautiful smile"
            className="h-full w-full object-cover object-center lg:object-right"
          />
          {/* Subtle left edge gradient for smooth transition */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-950 to-transparent" />
          {/* Decorative glow */}
          <div className="bg-forest/20 pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
