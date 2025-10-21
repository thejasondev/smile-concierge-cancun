import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
            Why Choose Cancun?
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Premium dental care at a fraction of the cost
            <span className="hidden md:inline">, combined with a luxury vacation experience</span>
          </p>
        </div>

        {/* Mobile-Optimized Features - Glassmorphism */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {/* Mobile: Show only 2 most important features */}
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center md:block">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2 md:mb-4">70% Savings</h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                  No hidden fees or surprise costs
                  <span className="hidden md:inline">. You'll know exactly what you're paying before treatment begins</span>
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center md:block">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2 md:mb-4">Personalized Care</h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                  Customized treatment plans
                  <span className="hidden md:inline"> for your unique needs, goals, and budget for optimal results</span>
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Show third feature */}
          <div className="hidden lg:block group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent mb-4">Premium Materials</h3>
              <p className="text-slate-700 font-medium">
                We work exclusively with top-quality materials and cutting-edge technology for 
                durable, aesthetic results.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Guarantee */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-6 md:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            100% Results Guarantee
          </h3>
          <p className="text-sm md:text-lg lg:text-xl opacity-90 max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed">
            We guarantee all our results
            <span className="hidden md:inline">, working with ethics, precision, and a passion for creating natural, lasting smiles</span>
          </p>
          <a 
            href="/process" 
            className="bg-white text-teal-700 px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-teal-50 transition-colors duration-200 inline-block"
          >
            Learn Our Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
