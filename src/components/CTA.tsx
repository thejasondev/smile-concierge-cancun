import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-forest via-sage to-forest-light relative overflow-hidden">
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
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Your Perfect Smile Awaits
            </h2>
            <p className="text-lg md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed font-light">
              Experience luxury dental care with Cancun's finest specialists
            </p>
          </div>

          {/* Mobile-Optimized CTA */}
          <div className="space-y-6 md:space-y-8">
            <a 
              href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-white text-forest px-10 md:px-12 py-5 md:py-6 rounded-2xl text-xl md:text-2xl font-bold hover:bg-sand transition-all duration-300 shadow-2xl hover:shadow-3xl text-center transform hover:scale-105"
            >
              Start Your Free Assessment
            </a>
            
            {/* Contact Info - Elegant */}
            <div className="pt-4">
              <p className="text-base md:text-lg text-white/90 mb-3 font-light">
                Questions? We're here to help
              </p>
              <a 
                href="tel:+529984567890" 
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-cream transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
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
