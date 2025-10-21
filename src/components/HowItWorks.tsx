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
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your journey to a perfect smile is simple and carefully planned. 
            We handle every detail so you can focus on enjoying your transformation.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-8 h-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-teal-200 mt-4"></div>
              <div className="w-8 h-8"></div>
              <div className="flex-1 border-t-2 border-dashed border-teal-200 mt-4"></div>
              <div className="w-8 h-8"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step Number */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 ${index === 0 ? 'bg-teal-600' : index === 1 ? 'bg-cyan-600' : 'bg-emerald-600'} text-white rounded-full text-2xl font-bold mb-6 shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${index === 0 ? 'bg-teal-100 text-teal-600' : index === 1 ? 'bg-cyan-100 text-cyan-600' : 'bg-emerald-100 text-emerald-600'} rounded-full flex items-center justify-center mx-auto mb-6`}>
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-teal-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to Start Your Smile Journey?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards your perfect smile. Our team is ready to guide you 
              through every detail of your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Assessment
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
