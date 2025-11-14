import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-accent">
              HMPS & Associates
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-foreground/60 transition-colors hover:text-foreground/80 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-foreground/60 transition-colors hover:text-foreground/80 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link to="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-ring"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground/80 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground/80 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground/80 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;