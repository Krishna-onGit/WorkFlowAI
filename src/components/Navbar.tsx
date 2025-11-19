import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'How It Works', 'Testimonials', 'Pricing'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-[30px] border-b border-white/10 shadow-[0px_10px_40px_rgba(0,0,0,0.2)]' 
          : 'bg-white/5 backdrop-blur-[20px]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3AFF78] to-[#38F8E4] flex items-center justify-center shadow-[0px_0px_20px_rgba(58,255,120,0.6)]">
              <Sparkles size={20} className="text-black" />
            </div>
            <span className="text-white">WorkflowAI</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1A73E8] to-[#8A5CFF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary">Start Free Trial</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 mt-4 pt-6 rounded-2xl">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button variant="primary" className="w-full">Start Free Trial</Button>
          </div>
        )}
      </div>
    </nav>
  );
}