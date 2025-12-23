import React from 'react';

const AboutUs: React.FC = () => {
  const valueProps = [
    {
      icon: (
        <svg
          className="text-forest h-6 w-6 md:h-7 md:w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      iconBg: 'from-forest/10 to-forest/5',
      title: 'Exceptional Care',
      description:
        "We've brought together Cancun's most renowned specialists to deliver a unique, personalized dental experience with exceptional results.",
      shortDesc: "Cancun's most renowned specialists for exceptional results.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-red-600 md:h-7 md:w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      iconBg: 'from-red-100 to-red-50',
      title: 'Not Express Service',
      description:
        "We're not a quick-fix dental tourism service. Your smile deserves the same quality and care that local patients receive.",
      shortDesc: 'Quality care, not quick-fix tourism.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 text-white md:py-24">
      <div className="absolute inset-0">
        <img
          src="/Dr.Pavon/bg-about.jpg"
          alt="Smile Concierge specialist providing premium dental care"
          className="h-full w-full object-cover object-center"
        />
        <div className="bg-forest/80 absolute inset-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/65 to-slate-900/35" />
        <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-slate-950/80 via-transparent to-transparent md:block" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header - Compact on mobile */}
          <div className="mb-6 text-center md:mb-16">
            <span className="text-sand/80 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.35em] uppercase md:px-4 md:py-2">
              Our Story
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:mt-6 md:text-4xl lg:text-5xl">
              About Us
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-base font-light text-white/80 md:mt-4 md:text-2xl">
              A luxury dental experience, guided by experts.
            </p>
          </div>

          {/* Experience Badge - Compact on mobile */}
          <div className="mb-6 flex justify-center md:mb-12">
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/80 px-4 py-2.5 shadow-xl backdrop-blur-xl md:gap-4 md:rounded-2xl md:px-8 md:py-4">
              <div className="from-forest to-sage flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-bold text-white shadow-lg md:h-16 md:w-16 md:rounded-2xl md:text-2xl">
                10+
              </div>
              <div className="text-left text-slate-800">
                <p className="text-xs font-medium text-slate-600 md:text-sm">
                  Years of
                </p>
                <p className="text-sm font-bold md:text-lg">Excellence</p>
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal Carousel for Value Props */}
          <div className="-mx-4 mb-6 px-4 md:hidden">
            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {valueProps.map((prop, index) => (
                <div key={index} className="w-[85vw] shrink-0 snap-start">
                  <div className="h-full rounded-2xl border border-white/25 bg-white/90 p-5 shadow-xl backdrop-blur-sm">
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${prop.iconBg}`}
                    >
                      {prop.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-800">
                      {prop.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {prop.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Indicator */}
            <div className="mt-1 flex justify-center gap-2">
              <span className="flex items-center gap-1 text-xs text-white/50">
                <svg
                  className="h-3 w-3"
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
                Swipe
                <svg
                  className="h-3 w-3"
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

          {/* Desktop: Grid for Value Props */}
          <div className="mx-auto mb-8 hidden max-w-5xl gap-6 md:mb-12 md:grid md:grid-cols-2 md:gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/25 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl md:p-8"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${prop.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  {prop.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
                  {prop.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Approach - Feature List (HIDDEN on mobile) */}
          <div className="mx-auto mb-8 hidden max-w-4xl md:mb-12 md:block">
            <h3 className="mb-6 text-center text-2xl font-bold text-white md:mb-8 md:text-3xl">
              Our Approach
            </h3>
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white/60 p-5 backdrop-blur-sm">
                <div className="bg-forest/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    className="text-forest h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-slate-800">
                    Pre-Planning
                  </h4>
                  <p className="text-sm text-slate-600">
                    We assess your case before arrival
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white/60 p-5 backdrop-blur-sm">
                <div className="bg-sage/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    className="text-sage h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-slate-800">Organized</h4>
                  <p className="text-sm text-slate-600">
                    We plan your stay in Cancun
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white/60 p-5 backdrop-blur-sm">
                <div className="bg-forest-light/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    className="text-forest-light h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-slate-800">Excellence</h4>
                  <p className="text-sm text-slate-600">
                    Natural, long-lasting results
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Statement - Compact on mobile */}
          <div className="mx-auto max-w-3xl">
            <div className="from-forest to-sage relative overflow-hidden rounded-2xl bg-linear-to-r p-6 text-center text-white shadow-2xl md:rounded-3xl md:p-12">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative">
                {/* Hide icon on mobile */}
                <div className="mx-auto mb-6 hidden h-16 w-16 items-center justify-center rounded-2xl bg-white/20 md:flex">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-3xl">
                  100% Results Guarantee
                </h3>
                <p className="mb-5 text-sm font-light opacity-95 md:mb-8 md:text-xl">
                  We stand behind every smile with ethics, precision, and
                  passion.
                </p>
                <a
                  href="/consultation"
                  className="text-forest hover:bg-sand inline-block transform rounded-xl bg-white px-6 py-3 text-base font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:rounded-2xl md:px-10 md:py-4 md:text-xl"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
