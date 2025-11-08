import React from 'react';

const CancunExperience: React.FC = () => {
  const experienceImages = [
    {
      src: '/cancun/cancun1.jpg',
      alt: 'Modern Cancun hotel zone',
      title: 'Luxury Accommodations',
      description: 'Stay in world-class hotels in Cancun\'s hotel zone'
    },
    {
      src: '/cancun/cancun2.jpg',
      alt: 'Beautiful Cancun beach',
      title: 'Paradise Recovery',
      description: 'Heal while enjoying Caribbean beaches'
    },
    {
      src: '/cancun/cancun3.jpg',
      alt: 'Cancun attractions and dining',
      title: 'World-Class Experience',
      description: 'Explore Cancun\'s restaurants and attractions'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-forest rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-sage rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-forest/10 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-forest font-semibold text-sm">The Cancun Advantage</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            Recover Your Smile in Paradise
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlike express dental tourism, you'll have time to heal properly in one of Mexico's most beautiful destinations
          </p>
        </div>

        {/* Main Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {experienceImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-forest' : index === 1 ? 'bg-sage' : 'bg-sand'}`}></div>
                  <h3 className="text-xl md:text-2xl font-bold drop-shadow-lg">
                    {image.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/90 drop-shadow-md">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Luxury Hotels</h4>
            <p className="text-sm text-slate-600">
              Premium accommodations in Cancun's safest areas
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Transportation</h4>
            <p className="text-sm text-slate-600">
              Comfortable airport transfers and clinic transport
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-forest-light/10 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Time to Heal</h4>
            <p className="text-sm text-slate-600">
              No rush - proper recovery time for best results
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-sand/20 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">Vacation Mode</h4>
            <p className="text-sm text-slate-600">
              Enjoy beaches, restaurants, and Mayan culture
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-forest/5 via-sage/5 to-forest-light/5 rounded-3xl p-8 md:p-12 border border-forest/10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Not Just Dental Work — A Transformative Experience
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            We help you plan everything: treatments, recovery time, accommodations, and activities. Your smile transformation happens in paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20learning%20about%20the%20Cancun%20experience%20and%20planning%20my%20dental%20transformation.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-forest to-sage text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Plan My Cancun Experience
            </a>
            <a
              href="/specialists"
              className="inline-flex items-center justify-center gap-2 border-2 border-forest text-forest px-8 py-4 rounded-xl text-lg font-semibold hover:bg-forest hover:text-white transition-all duration-300"
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
