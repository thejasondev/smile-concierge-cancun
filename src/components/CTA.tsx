import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-20 right-8 w-12 h-12 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-8 left-12 w-20 h-20 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-16 right-4 w-8 h-8 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Mobile-First Heading */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              Ready for Your Perfect Smile?
            </h2>
            <p className="text-base md:text-xl opacity-90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Start your transformation today
              <span className="hidden md:inline"> with a free consultation and personalized treatment plan</span>
            </p>
          </div>

          {/* Mobile-Optimized Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30">
              <div className="flex items-center justify-center md:block">
                <div className="flex items-center gap-3 md:block md:text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center mb-0 md:mb-4 flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Free Assessment</h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Complete evaluation
                      <span className="hidden md:inline"> and treatment plan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30">
              <div className="flex items-center justify-center md:block">
                <div className="flex items-center gap-3 md:block md:text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center mb-0 md:mb-4 flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Best Prices</h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Up to 70% savings
                      <span className="hidden md:inline"> vs US prices</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30">
              <div className="flex items-center justify-center md:block">
                <div className="flex items-center gap-3 md:block md:text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center mb-0 md:mb-4 flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">100% Guarantee</h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Complete satisfaction
                      <span className="hidden md:inline"> or money back</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized CTAs */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="/process" 
                className="group bg-white text-teal-700 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Free Assessment
                </span>
              </a>
              <a 
                href="/specialists" 
                className="group border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold hover:bg-white hover:text-teal-700 transition-all duration-300 text-center transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Meet Our Specialists
                </span>
              </a>
            </div>
            
            {/* Mobile: Simplified contact info */}
            <div className="pt-4 md:pt-6">
              <p className="text-sm md:text-base text-white/80 mb-2">
                Questions? Call us now:
              </p>
              <a 
                href="tel:+529984567890" 
                className="text-lg md:text-xl font-bold text-white hover:text-teal-200 transition-colors duration-200"
              >
                +52 (998) 335-1933
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
