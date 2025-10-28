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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'forest'
    },
    { 
      href: '/results', 
      label: 'Results',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'sage'
    },
    { 
      href: '/process', 
      label: 'Process',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'forest-light'
    },
    { 
      href: '/about', 
      label: 'About Us',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'sage'
    }
  ];

  return (
    <>
      <header className={`bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="text-xl md:text-2xl font-bold text-forest hover:text-sage transition-colors duration-200">
                Smile Concierge Cancun
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/specialists"
                className="text-slate-600 hover:text-forest transition-colors duration-200 font-medium"
              >
                Specialists
              </a>
              <a
                href="/results"
                className="text-slate-600 hover:text-forest transition-colors duration-200 font-medium"
              >
                Results
              </a>
              <a
                href="/process"
                className="text-slate-600 hover:text-forest transition-colors duration-200 font-medium"
              >
                Process
              </a>
              <a
                href="/about"
                className="text-slate-600 hover:text-forest transition-colors duration-200 font-medium"
              >
                About Us
              </a>
              <div className="border-l border-slate-200 pl-8">
                <a 
                  href="https://wa.me/5219983351933?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-forest to-sage text-white px-6 py-2 rounded-lg font-semibold hover:from-forest-dark hover:to-sage-dark transition-all duration-300"
                >
                  Free Assessment
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button - Modern Animated */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-sage flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop with blur */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel - Slide from right */}
        <div className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-cream via-white to-sand backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sand">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">
                Menu
              </h3>
              <p className="text-xs text-slate-600 mt-1">Explore our services</p>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white hover:bg-sand flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg group"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-slate-600 group-hover:text-forest transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-6 space-y-3 overflow-y-auto h-[calc(100%-200px)]">
            {menuItems.map((item, index) => {
              const getColorClasses = (color: string) => {
                const colors = {
                  'forest': { bg: 'bg-forest/10', icon: 'text-forest', border: 'border-forest/20 hover:border-forest/40' },
                  'sage': { bg: 'bg-sage/10', icon: 'text-sage', border: 'border-sage/20 hover:border-sage/40' },
                  'forest-light': { bg: 'bg-forest-light/10', icon: 'text-forest-light', border: 'border-forest-light/20 hover:border-forest-light/40' }
                };
                return colors[color as keyof typeof colors] || colors.forest;
              };
              const colorClasses = getColorClasses(item.color);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/80 hover:bg-white border ${colorClasses.border} shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-slate-800 group-hover:text-forest transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-forest group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent border-t border-sand/50">
            <a
              href="https://wa.me/5219983351933?text=Hello!%20I'm%20interested%20in%20receiving%20a%20free%20dental%20assessment.%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20me%20achieve%20my%20perfect%20smile.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-forest to-sage text-white px-6 py-4 rounded-2xl font-bold text-center hover:from-forest-dark hover:to-sage-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Free Assessment
              </span>
            </a>
            <p className="text-xs text-center text-slate-500 mt-3">
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
