import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="from-forest-dark via-forest to-sage-dark bg-gradient-to-br py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo + Brand Name */}
              <a href="/" className="group mb-4 inline-flex items-center gap-3">
                {/* Circular Logo */}
                <div className="h-12 w-12 overflow-hidden rounded-full shadow-lg ring-2 ring-white/20 transition-shadow duration-300 group-hover:shadow-xl md:h-14 md:w-14">
                  <img
                    src="/logo/logo_scc.webp"
                    alt="Smile Concierge Cancun"
                    className="h-full w-full scale-[1.15] object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold transition-colors duration-200 md:text-3xl">
                  <span className="text-cream group-hover:text-sand">
                    Smile Concierge{' '}
                  </span>
                  <span className="text-sand group-hover:text-cream">
                    Cancun
                  </span>
                </h3>
              </a>
              <p className="text-cream/80 mb-4 max-w-md text-sm leading-relaxed md:mb-6 md:text-base">
                A luxury dental experience, guided by Cancun's most experienced
                and trusted specialists.
              </p>
            </div>

            {/* CTA Section */}
            <div className="from-forest to-sage mb-6 rounded-2xl bg-gradient-to-r p-4 md:p-6">
              <h4 className="mb-2 text-base font-semibold text-white md:mb-3 md:text-xl">
                Ready to Transform Your Smile?
              </h4>
              <p className="text-cream mb-3 text-xs md:mb-4 md:text-sm">
                Get your free assessment and start your journey today.
              </p>
              <a
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:bg-sand inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold transition-colors duration-200 md:px-6"
              >
                Get Free Assessment
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="text-cream/60 hover:text-cream hover:bg-forest-light flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.2.3c-3.3 0-3.7 0-5 .1-1.3.1-2.2.2-3 .5-.8.3-1.5.7-2.2 1.4C1.3 3 .9 3.7.6 4.5c-.3.8-.4 1.7-.5 3C.1 8.8.1 9.2.1 12.5s0 3.7.1 5c.1 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.4 3 .5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.4-1.7.5-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.5-1.4-2.2C20.5 1.3 19.8.9 19 .6c-.8-.3-1.7-.4-3-.5-1.3-.1-1.7-.1-5-.1zm0 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.7c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm7.8-10.5c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="text-cream/60 hover:text-cream hover:bg-sage flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                aria-label="Follow us on WhatsApp"
                className="text-cream/60 hover:text-cream hover:bg-forest flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links & Contact Info - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Navigation Links */}
            <div>
              <h4 className="text-cream mb-4 text-base font-semibold md:mb-6 md:text-lg">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#specialists"
                    className="text-cream/70 hover:text-cream group flex items-center text-sm transition-colors duration-200"
                  >
                    <svg
                      className="text-sand group-hover:text-cream mr-1.5 h-3 w-3 transition-colors duration-200 md:mr-2 md:h-4 md:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Our Specialists
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    className="text-cream/70 hover:text-cream group flex items-center text-sm transition-colors duration-200"
                  >
                    <svg
                      className="text-sand group-hover:text-cream mr-1.5 h-3 w-3 transition-colors duration-200 md:mr-2 md:h-4 md:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Natural Results
                  </a>
                </li>
                <li>
                  <a
                    href="/process"
                    className="text-cream/70 hover:text-cream group flex items-center text-sm transition-colors duration-200"
                  >
                    <svg
                      className="text-sand group-hover:text-cream mr-1.5 h-3 w-3 transition-colors duration-200 md:mr-2 md:h-4 md:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-cream/70 hover:text-cream group flex items-center text-sm transition-colors duration-200"
                  >
                    <svg
                      className="text-sand group-hover:text-cream mr-1.5 h-3 w-3 transition-colors duration-200 md:mr-2 md:h-4 md:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/reviews"
                    className="text-cream/70 hover:text-cream group flex items-center text-sm transition-colors duration-200"
                  >
                    <svg
                      className="text-sand group-hover:text-cream mr-1.5 h-3 w-3 transition-colors duration-200 md:mr-2 md:h-4 md:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-cream mb-4 text-base font-semibold md:mb-6 md:text-lg">
                Contact Info
              </h4>
              <div className="space-y-3 md:space-y-4">
                <div className="group flex items-start">
                  <div className="bg-sand/30 group-hover:bg-sage mt-0.5 mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-300 md:mr-3 md:h-8 md:w-8">
                    <svg
                      className="text-cream h-3 w-3 md:h-4 md:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/70 group-hover:text-cream text-xs transition-colors duration-200 md:text-sm">
                      Cancun, Quintana Roo
                    </p>
                    <p className="text-cream/70 group-hover:text-cream text-xs transition-colors duration-200 md:text-sm">
                      Mexico
                    </p>
                  </div>
                </div>

                <div className="group flex items-center">
                  <div className="bg-sand/30 group-hover:bg-sage mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-300 md:mr-3 md:h-8 md:w-8">
                    <svg
                      className="text-cream h-3 w-3 md:h-4 md:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-cream/70 group-hover:text-cream text-xs transition-colors duration-200 md:text-sm">
                    +52 998 388 9184
                  </p>
                </div>

                <div className="group flex items-center">
                  <div className="bg-sand/30 group-hover:bg-sage mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-300 md:mr-3 md:h-8 md:w-8">
                    <svg
                      className="text-cream h-3 w-3 md:h-4 md:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-cream/70 group-hover:text-cream text-xs break-all transition-colors duration-200 md:text-sm">
                    info@smileconcierge.com
                  </p>
                </div>

                <div className="group flex items-center">
                  <div className="bg-sand/30 group-hover:bg-sage mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-300 md:mr-3 md:h-8 md:w-8">
                    <svg
                      className="text-cream h-3 w-3 md:h-4 md:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-cream/70 group-hover:text-cream text-xs transition-colors duration-200 md:text-sm">
                    Mon-Fri: 8AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-cream/50 mb-4 text-sm md:mb-0">
              &copy; {new Date().getFullYear()} Smile Concierge Cancun. All
              rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-cream/50 hover:text-cream transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/50 hover:text-cream transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/50 hover:text-cream transition-colors duration-200"
              >
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
