import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog']
  },
  company: {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press Kit']
  },
  resources: {
    title: 'Resources',
    links: ['Documentation', 'Help Center', 'Community', 'Templates', 'API Reference']
  },
  legal: {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security']
  }
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1A73E8] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A73E8] to-[#8A5CFF] flex items-center justify-center shadow-[0px_0px_20px_rgba(26,115,232,0.6)]">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-white">WorkflowAI</span>
            </div>
            <p className="text-white/60 mb-6 max-w-xs leading-relaxed">
              Empowering teams with AI-powered workflow automation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1A73E8] flex items-center justify-center transition-all hover:shadow-[0px_0px_16px_rgba(26,115,232,0.4)]"
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1A73E8] to-[#8A5CFF] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              © 2025 WorkflowAI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}