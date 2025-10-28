import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-sand via-cream to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-light max-w-3xl mx-auto">
            A luxury dental experience, guided by experts.
          </p>
        </div>

        {/* Experience Badge */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-2xl border border-slate-200 shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-forest to-sage rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              10+
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-600 font-medium">Years of</p>
              <p className="text-lg font-bold text-slate-800">Excellence</p>
            </div>
          </div>
        </div>

        {/* Main Value Props - Visual Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 max-w-5xl mx-auto">
          {/* Card 1: What We Do */}
          <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-forest/10 to-forest/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Exceptional Care
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              We've brought together Cancun's most renowned specialists to deliver a unique, personalized dental experience with exceptional results.
            </p>
          </div>

          {/* Card 2: Not Express */}
          <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Not Express Service
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              We're not a quick-fix dental tourism service. Your smile deserves the same quality and care that local patients receive.
            </p>
          </div>
        </div>

        {/* Our Approach - Feature List */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 text-center">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-100">
              <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Pre-Planning</h4>
                <p className="text-sm text-slate-600">We assess your case before arrival</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-100">
              <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Organized</h4>
                <p className="text-sm text-slate-600">We plan your stay in Cancun</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-slate-100">
              <div className="w-10 h-10 bg-forest-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-forest-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Excellence</h4>
                <p className="text-sm text-slate-600">Natural, long-lasting results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Statement - Prominent */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-forest to-sage rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                100% Results Guarantee
              </h3>
              <p className="text-lg md:text-xl opacity-95 font-light">
                We stand behind every smile with ethics, precision, and passion for dental aesthetics.
              </p>
              <div className="mt-8">
                <a 
                  href="/consultation" 
                  className="inline-block bg-white text-forest px-8 md:px-10 py-4 rounded-2xl text-lg md:text-xl font-bold hover:bg-sand transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Book Your Consultation
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
