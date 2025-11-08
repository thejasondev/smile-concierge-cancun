import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background Image with Overlay - Full Screen */}
      <div className="absolute inset-0">
        <img 
          src="/hero/paciente-hero.jpeg" 
          alt="Happy patient with beautiful smile"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-forest/60 to-sage/50 lg:bg-gradient-to-r lg:from-slate-900/80 lg:via-forest/70 lg:to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="w-full lg:max-w-2xl text-center lg:text-left">
          {/* Glassmorphism Card on Desktop */}
          <div className="lg:bg-white/10 lg:backdrop-blur-2xl lg:rounded-3xl lg:p-10 lg:border lg:border-white/20 lg:shadow-2xl">
            {/* Heading */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                <span className="block">Smile Concierge</span>
                <span className="block text-sand"> Cancun</span>
              </h1>
              <div className="mt-4 sm:mt-6">
                <span className="inline-block text-white text-xl sm:text-2xl md:text-3xl font-extralight drop-shadow-lg">
                 Luxury. Expertise. Confidence.
                </span>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8 lg:mb-10 space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-normal leading-relaxed drop-shadow-lg">
                Guided by Cancun's most experienced specialists
              </p>

            </div>

            {/* CTA Button */}
            <div className="mb-8 lg:mb-10">
              <a 
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block bg-white text-forest px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-lg sm:text-xl lg:text-2xl font-bold hover:bg-sand transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                Start Your Free Assessment
              </a>
              
              {/* Trust Message */}
              <p className="text-sm sm:text-base text-white/90 font-light mt-4 drop-shadow-lg">
                Trusted by 500+ patients • 4.9★ rated
              </p>
            </div>
            
            {/* Social Proof - Modern Pills with Real Patient Photos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <img 
                    src="/Pacientes+500/paciente1.jpeg" 
                    alt="Happy patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <img 
                    src="/Pacientes+500/paciente2.jpeg" 
                    alt="Happy patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <img 
                    src="/Pacientes+500/paciente3.jpeg" 
                    alt="Happy patient"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-sm sm:text-base font-semibold text-white">500+ Patients</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm sm:text-base font-semibold text-white">4.9 Rating</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
              <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm sm:text-base font-semibold text-white">10+ Years</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
