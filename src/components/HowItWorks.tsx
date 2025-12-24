import React, { useState, useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Contact Us',
    description:
      "Send us your information so we can evaluate your case. If needed, we'll schedule an online consultation.",
    color: 'forest',
    colorGradient: 'from-forest to-forest-dark',
  },
  {
    number: '2',
    title: 'Plan Your Trip',
    description:
      'We help you plan your entire treatment: procedures, appointments, and your stay in Cancun.',
    color: 'sage',
    colorGradient: 'from-sage to-sage-dark',
  },
  {
    number: '3',
    title: 'Get Treated',
    description:
      "We guide you throughout your treatment. You'll be in the best hands with personalized luxury care.",
    color: 'forest-light',
    colorGradient: 'from-forest-light to-forest',
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = steps.length;

  // Touch/Swipe handling with proper initialization
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX; // Initialize with start value
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;

    const deltaX = Math.abs(touchEndX.current - touchStartX.current);
    const deltaY = Math.abs(currentY - touchStartY.current);

    // Only consider it a swipe if horizontal movement > vertical
    if (deltaX > deltaY && deltaX > 10) {
      isSwiping.current = true;
      e.preventDefault(); // Prevent vertical scroll during horizontal swipe
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 30; // Reduced for better sensitivity

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - next
        setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
      } else {
        // Swipe right - previous
        setActiveStep((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      forest: { bg: 'bg-forest/10', text: 'text-forest' },
      sage: { bg: 'bg-sage/10', text: 'text-sage' },
      'forest-light': { bg: 'bg-forest-light/10', text: 'text-forest-light' },
    };
    return colors[color] || colors.forest;
  };

  return (
    <section id="process" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center md:mb-12">
          <h2 className="mb-2 text-2xl font-bold text-slate-800 md:mb-4 md:text-4xl">
            How It Works
          </h2>
          <p className="text-sm text-slate-600 md:text-xl">
            Your journey to a perfect smile in 3 simple steps
          </p>
        </div>

        {/* Mobile: Swipeable Cards */}
        <div className="md:hidden">
          {/* Step Tabs */}
          <div className="mb-4 flex justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center gap-1 rounded-xl px-4 py-3 transition-all duration-300 ${
                  index === activeStep
                    ? `bg-gradient-to-br ${step.colorGradient} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <span className="text-lg font-bold">{step.number}</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">
                  Step
                </span>
              </button>
            ))}
          </div>

          {/* Swipeable Content Area */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => {
                  const colorClasses = getColorClasses(step.color);
                  return (
                    <div key={index} className="w-full flex-shrink-0 p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClasses.bg}`}
                        >
                          <span
                            className={`text-lg font-bold ${colorClasses.text}`}
                          >
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Dots + Swipe Hint */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="flex justify-center gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-forest w-6' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-slate-400">
              Swipe or tap to navigate
            </span>
          </div>
        </div>

        {/* Desktop: Horizontal Cards */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.colorGradient} text-2xl font-bold text-white shadow-lg transition-transform group-hover:scale-110`}
              >
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                {step.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center md:mt-12">
          <a
            href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="from-forest to-sage inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:px-8 md:py-4 md:text-base"
          >
            Start Your Journey
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
