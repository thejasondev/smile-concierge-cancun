import React, { useState } from 'react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  colorGradient: string;
  color: string;
  iconPath: string;
  sectionTitle: string;
  features: string[];
  extraText?: string;
  ctaText?: string;
  ctaUrl?: string;
  cardTitle: string;
  cardSubtitle: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Free Online Assessment',
    description:
      'Start your journey from the comfort of your home. Our specialists review your photos, X-Rays, medical history, and goals.',
    color: 'forest',
    colorGradient: 'from-forest to-forest-dark',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    sectionTitle: "What's Included:",
    features: [
      'Detailed photo analysis',
      'Personalized treatment plan',
      'Cost estimate & timeline',
    ],
    ctaText: 'Start Free Assessment',
    ctaUrl:
      "https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.",
    cardTitle: 'Free Assessment',
    cardSubtitle: '100% Online',
  },
  {
    id: 2,
    title: 'Arrival & Welcome',
    description:
      'We handle everything from airport pickup to accommodation. Relax and let us take care of every detail.',
    color: 'sage',
    colorGradient: 'from-sage to-sage-dark',
    iconPath: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    sectionTitle: 'Full-Services Package:',
    features: [
      'Private airport transfer',
      'Transportation to appointments',
      'Hotel or vacation home stay',
    ],
    extraText: 'Optional package - book separately',
    cardTitle: 'Cancun Package',
    cardSubtitle: 'Comfort & Relax',
  },
  {
    id: 3,
    title: 'Treatment & Transformation',
    description:
      'Experience world-class dental care in state-of-the-art facilities with premium materials.',
    color: 'forest-light',
    colorGradient: 'from-forest-light to-sage',
    iconPath:
      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    sectionTitle: 'Premium Care Features:',
    features: [
      'Digital Smile Design',
      'Premium materials',
      'Treatment guaranteed',
    ],
    cardTitle: 'Expert Treatment',
    cardSubtitle: 'World-Class Care',
  },
];

const ProcessAccordion: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap: Record<string, Record<string, string>> = {
      forest: { bg: 'bg-forest', text: 'text-forest', border: 'border-forest' },
      sage: { bg: 'bg-sage', text: 'text-sage', border: 'border-sage' },
      'forest-light': {
        bg: 'bg-forest-light',
        text: 'text-forest-light',
        border: 'border-forest-light',
      },
    };
    return colorMap[color]?.[type] || '';
  };

  return (
    <div className="relative">
      {/* Step Indicators - Horizontal */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => setActiveStep(index)}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                index === activeStep
                  ? `bg-gradient-to-br ${step.colorGradient} scale-110 text-white shadow-lg`
                  : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
              }`}
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              {step.id}
            </button>
            {index < processSteps.length - 1 && (
              <div
                className={`h-0.5 w-8 transition-colors duration-300 ${
                  index < activeStep ? 'bg-forest' : 'bg-slate-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Accordion Panels */}
      <div className="space-y-3">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              index === activeStep
                ? `border-${step.color}/30 shadow-lg`
                : 'border-slate-200'
            }`}
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => setActiveStep(index)}
              className={`flex w-full items-center justify-between p-4 text-left transition-colors ${
                index === activeStep
                  ? 'bg-white'
                  : 'bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${step.colorGradient} text-xs font-bold text-white`}
                >
                  {step.id}
                </div>
                <span
                  className={`font-semibold ${index === activeStep ? 'text-slate-800' : 'text-slate-600'}`}
                >
                  {step.title}
                </span>
              </div>
              <svg
                className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                  index === activeStep ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Content - Expandable */}
            <div
              className={`transition-all duration-300 ease-out ${
                index === activeStep
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-slate-100 bg-white p-4">
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>

                {/* Features */}
                <div
                  className={`mb-4 rounded-lg p-3 ${getColorClass(step.color, 'bg')}/5`}
                >
                  <p
                    className={`mb-2 text-xs font-semibold ${getColorClass(step.color, 'text')}`}
                  >
                    {step.sectionTitle}
                  </p>
                  <ul className="space-y-1.5">
                    {step.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-700"
                      >
                        <svg
                          className={`mr-2 h-4 w-4 ${getColorClass(step.color, 'text')}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {step.extraText && (
                    <p className="mt-2 text-xs text-slate-500 italic">
                      {step.extraText}
                    </p>
                  )}
                </div>

                {/* CTA */}
                {step.ctaText && step.ctaUrl && (
                  <a
                    href={step.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${step.colorGradient} px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg`}
                  >
                    {step.ctaText}
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tap Hint */}
      <p className="mt-4 text-center text-xs text-slate-400">
        Tap any step to expand
      </p>
    </div>
  );
};

export default ProcessAccordion;
