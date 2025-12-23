import React from 'react';

const CancunExperience: React.FC = () => {
  const experienceImages = [
    {
      src: '/cancun/cancun1.jpg',
      alt: 'Modern Cancun hotel zone',
      title: 'Comfort and Safety',
      description: 'We offer recovery homes and special Cancun hotel rates.',
    },
    {
      src: '/cancun/cancun2.jpg',
      alt: 'Beautiful Cancun beach',
      title: 'Paradise Recovery',
      description: 'Heal while enjoying Caribbean beaches',
    },
    {
      src: '/cancun/cancun3.jpg',
      alt: 'Cancun attractions and dining',
      title: 'World-Class Experience',
      description: "Explore Cancun's restaurants and attractions",
    },
  ];

  return (
    <section className="to-cream relative overflow-hidden bg-gradient-to-br from-slate-50 via-white py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-forest absolute top-20 right-10 h-32 w-32 rounded-full blur-3xl"></div>
        <div className="bg-sage absolute bottom-32 left-20 h-40 w-40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center md:mb-16">
          <div className="bg-forest/10 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="text-forest text-sm font-semibold">
              The Cancun Advantage
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:mb-6 md:text-4xl lg:text-5xl">
            Recover Your Smile in Paradise
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Unlike express dental tourism, you'll have time to heal properly in
            one of Mexico's most beautiful destinations
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Gallery | Desktop: Grid */}
        {/* Mobile Gallery */}
        <div className="-mx-4 mb-8 px-4 md:hidden">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {experienceImages.map((image, index) => (
              <div key={index} className="w-[80vw] shrink-0 snap-start">
                <div className="relative h-full overflow-hidden rounded-2xl shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute right-0 bottom-0 left-0 p-5 text-white">
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-forest' : index === 1 ? 'bg-sage' : 'bg-sand'}`}
                      ></div>
                      <h3 className="text-xl font-bold drop-shadow-lg">
                        {image.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/90 drop-shadow-md">
                      {image.description}
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
              Swipe to explore
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

        {/* Desktop Grid Gallery */}
        <div className="mb-12 hidden gap-6 md:grid md:grid-cols-3">
          {experienceImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute right-0 bottom-0 left-0 transform p-6 text-white transition-transform duration-300">
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-forest' : index === 1 ? 'bg-sage' : 'bg-sand'}`}
                  ></div>
                  <h3 className="text-xl font-bold drop-shadow-lg md:text-2xl">
                    {image.title}
                  </h3>
                </div>
                <p className="text-sm text-white/90 drop-shadow-md md:text-base">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid - HIDDEN on mobile, visible on md+ */}
        <div className="mb-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="bg-forest/10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
              <svg
                className="text-forest h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold text-slate-800">
              Comfort and Safety
            </h4>
            <p className="text-sm text-slate-600">
              We offer recovery homes and preferred rates at select Cancun
              hotels for your convenience
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="bg-sage/10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
              <svg
                className="text-sage h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold text-slate-800">
              Transportation
            </h4>
            <p className="text-sm text-slate-600">
              Comfortable airport transfers and clinic transport
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="bg-forest-light/10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
              <svg
                className="text-forest-light h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold text-slate-800">
              Time to Heal
            </h4>
            <p className="text-sm text-slate-600">
              No rush - proper recovery time for best results
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="bg-sand/20 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
              <svg
                className="text-forest h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold text-slate-800">
              Vacation Mode
            </h4>
            <p className="text-sm text-slate-600">
              Enjoy beaches, restaurants, and Mayan culture
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="from-forest/5 via-sage/5 to-forest-light/5 border-forest/10 rounded-3xl border bg-gradient-to-r p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl">
            Not Just Dental Work — A Transformative Experience
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-600">
            We help you plan everything: treatments, recovery time,
            accommodations, and activities. Your smile transformation happens in
            paradise.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20learning%20about%20the%20Cancun%20experience%20and%20planning%20my%20dental%20transformation.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Plan My Cancun Experience
            </a>
            <a
              href="/specialists"
              className="border-forest text-forest hover:bg-forest inline-flex items-center justify-center gap-2 rounded-xl border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:text-white"
            >
              Meet Our Specialists
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancunExperience;
