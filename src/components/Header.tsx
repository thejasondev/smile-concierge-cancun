import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors duration-200">
              Smile Concierge Cancun
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/specialists"
              className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
            >
              Specialists
            </a>
            <a
              href="/results"
              className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
            >
              Results
            </a>
            <a
              href="/process"
              className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
            >
              Process
            </a>
            <a
              href="/reviews"
              className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
            >
              Reviews
            </a>
            <div className="border-l border-slate-200 pl-8">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300">
                Free Assessment
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-teal-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#specialists"
                className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Specialists
              </a>
              <a
                href="#results"
                className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Natural Results
              </a>
              <a
                href="#process"
                className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#reviews"
                className="text-slate-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
                <button className="text-teal-600 hover:text-teal-700 transition-colors duration-200 font-medium text-left">
                  Free Assessment
                </button>
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-colors duration-200 font-semibold">
                  Book Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
