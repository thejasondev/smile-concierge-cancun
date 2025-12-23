import React, { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      href: '/specialists',
      label: 'Specialists',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: 'forest',
    },
    {
      href: '/results',
      label: 'Results',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: 'sage',
    },
    {
      href: '/process',
      label: 'Process',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      color: 'forest-light',
    },
    {
      href: '/about',
      label: 'About Us',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      color: 'sage',
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm ${className}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo Section - Adaptive */}
            <a href="/" className="group flex items-center gap-3">
              {/* Circular Logo - Always visible */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-md transition-shadow duration-300 group-hover:shadow-lg lg:h-12 lg:w-12">
                <img
                  src="/logo/logo_scc.webp"
                  alt="Smile Concierge Cancun"
                  className="h-full w-full scale-[1.15] object-cover"
                />
              </div>

              {/* Brand Name - Hidden on mobile, visible on md+ */}
              <span className="hidden text-lg font-bold transition-colors duration-200 md:block lg:text-xl">
                <span className="text-forest group-hover:text-sage-dark">
                  Smile Concierge{' '}
                </span>
                <span className="text-sage group-hover:text-forest">
                  Cancun
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              <a
                href="/specialists"
                className="hover:text-forest font-medium text-slate-600 transition-colors duration-200"
              >
                Specialists
              </a>
              <a
                href="/results"
                className="hover:text-forest font-medium text-slate-600 transition-colors duration-200"
              >
                Results
              </a>
              <a
                href="/process"
                className="hover:text-forest font-medium text-slate-600 transition-colors duration-200"
              >
                Process
              </a>
              <a
                href="/about"
                className="hover:text-forest font-medium text-slate-600 transition-colors duration-200"
              >
                About Us
              </a>
              <div className="border-l border-slate-200 pl-8">
                <a
                  href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark rounded-lg bg-linear-to-r px-6 py-2 font-semibold text-white transition-all duration-300"
                >
                  Free Assessment
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button - Modern Animated */}
            <button
              className="from-forest to-sage group relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br transition-all duration-300 hover:shadow-lg lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-1">
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 lg:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel - Slide from right */}
        <div
          className={`from-cream to-sand absolute top-0 right-0 h-full w-full transform bg-linear-to-br via-white shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out sm:w-96 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header with Logo */}
          <div className="border-sand flex items-center justify-between border-b p-6">
            <div className="flex items-center gap-3">
              {/* Circular Logo in Menu */}
              <div className="h-10 w-10 overflow-hidden rounded-full shadow-md">
                <img
                  src="/logo/logo_scc.webp"
                  alt="Smile Concierge Cancun"
                  className="h-full w-full scale-[1.15] object-cover"
                />
              </div>
              <div>
                <h3 className="from-forest to-sage bg-linear-to-r bg-clip-text text-lg font-bold text-transparent">
                  Menu
                </h3>
                <p className="text-xs text-slate-600">Explore our services</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-sand group flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label="Close menu"
            >
              <svg
                className="group-hover:text-forest h-5 w-5 text-slate-600 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="h-[calc(100%-200px)] space-y-3 overflow-y-auto p-6">
            {menuItems.map((item, index) => {
              const getColorClasses = (color: string) => {
                const colors = {
                  forest: {
                    bg: 'bg-forest/10',
                    icon: 'text-forest',
                    border: 'border-forest/20 hover:border-forest/40',
                  },
                  sage: {
                    bg: 'bg-sage/10',
                    icon: 'text-sage',
                    border: 'border-sage/20 hover:border-sage/40',
                  },
                  'forest-light': {
                    bg: 'bg-forest-light/10',
                    icon: 'text-forest-light',
                    border:
                      'border-forest-light/20 hover:border-forest-light/40',
                  },
                };
                return colors[color as keyof typeof colors] || colors.forest;
              };
              const colorClasses = getColorClasses(item.color);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center gap-4 rounded-2xl border bg-white/80 p-4 hover:bg-white ${colorClasses.border} transform shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? 'slideInRight 0.4s ease-out forwards'
                      : 'none',
                  }}
                >
                  <div
                    className={`h-12 w-12 rounded-xl ${colorClasses.bg} flex items-center justify-center ${colorClasses.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className="group-hover:text-forest font-semibold text-slate-800 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <svg
                    className="group-hover:text-forest h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className="border-sand/50 absolute right-0 bottom-0 left-0 border-t bg-linear-to-t from-white via-white to-transparent p-6">
            <a
              href="https://wa.me/529983889184?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="from-forest to-sage hover:from-forest-dark hover:to-sage-dark block w-full transform rounded-2xl bg-linear-to-r px-6 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Get Free Assessment
              </span>
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">
              Start your smile transformation today
            </p>
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
