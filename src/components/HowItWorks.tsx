import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Contact Us',
      description: 'Send us your information so we can evaluate your case. If needed, we\'ll schedule an online consultation to understand your smile and plan your treatment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Schedule Your Appointment',
      description: 'We help you plan your entire treatment: procedures, appointments, and your stay in Cancun. As a plus, we offer transportation and accommodation packages if you wish to book these services with us.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Treatment & Care',
      description: 'We guide you throughout your treatment with our specialists. You\'ll be in the best hands, receiving personalized advice and luxury care every step of the way.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Your journey to a perfect smile
            <span className="hidden md:inline"> is simple and carefully planned. We handle every detail so you can focus on enjoying your transformation</span>
          </p>
        </div>

        {/* Mobile: Vertical Timeline, Desktop: Horizontal Grid */}
        <div className="relative">
          {/* Desktop: Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-8 h-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-sand mt-4"></div>
              <div className="w-8 h-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-sand mt-4"></div>
              <div className="w-8 h-8"></div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-sand to-transparent"></div>
                )}
                
                <div className="flex gap-4">
                  {/* Left: Number + Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-16 h-16 ${index === 0 ? 'bg-gradient-to-br from-forest to-forest-dark' : index === 1 ? 'bg-gradient-to-br from-sage to-sage-dark' : 'bg-gradient-to-br from-forest-light to-forest'} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="text-center">
                        <div className="text-2xl font-bold leading-none mb-1">{step.number}</div>
                        <div className="text-[10px] opacity-80 uppercase tracking-wider">Step</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${index === 0 ? 'bg-forest/10 text-forest' : index === 1 ? 'bg-sage/10 text-sage' : 'bg-forest-light/10 text-forest-light'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step Number */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 ${index === 0 ? 'bg-forest' : index === 1 ? 'bg-sage' : 'bg-forest-light'} text-white rounded-full text-2xl font-bold mb-6 shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${index === 0 ? 'bg-forest/10 text-forest' : index === 1 ? 'bg-sage/10 text-sage' : 'bg-forest-light/10 text-forest-light'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-Optimized CTA */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-cream to-sand rounded-2xl p-6 md:p-8 lg:p-12 border border-sand">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
              Ready to Start?
            </h3>
            <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your perfect smile
              <span className="hidden md:inline">. Our team is ready to guide you through every detail of your transformation</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="https://wa.me/5219983351933?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-forest to-sage text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Start Free Assessment
              </a>
              <a 
                href="/specialists"
                className="border-2 border-forest text-forest px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-forest hover:text-white transition-all duration-300 text-center"
              >
                Meet Specialists
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
