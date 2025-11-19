import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, Phone, CheckCircle2, User, Building2, Users as UsersIcon, MessageSquare, Smartphone, CreditCard } from 'lucide-react';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '',
    useCase: '',
    phone: '',
    plan: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-[120px] bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
          <div className="max-w-2xl mx-auto">
            <div className="relative p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0px_10px_60px_rgba(26,115,232,0.3)]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1A73E8] to-[#8A5CFF] flex items-center justify-center mx-auto mb-6 shadow-[0px_0px_40px_rgba(26,115,232,0.6)]">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h2 className="text-white mb-4">
                  Thanks — we'll be in touch!
                </h2>
                <p className="text-white/70 mb-8 text-lg">
                  Our team will contact you within 1 business day.
                </p>
                <Button variant="glass" onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-[120px] bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1A73E8] rounded-full blur-[150px] opacity-15"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-15"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Talk to Our AI-Ready Team
          </h2>
          <p className="text-white/70 text-lg">
            Let us help you automate your workflows with intelligence.
          </p>
        </div>

        {/* Form Card with Neon Blue Rim */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-10 bg-white/5 backdrop-blur-[30px] border-2 border-[#1A73E8]/50 rounded-3xl shadow-[0px_10px_60px_rgba(26,115,232,0.4)]">
            {/* Glowing Rim Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1A73E8]/20 via-[#8A5CFF]/20 to-[#48E6FF]/20 rounded-3xl blur-xl -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white mb-2 flex items-center gap-2">
                  <User size={18} className="text-[#48E6FF]" />
                  Full Name <span className="text-[#1A73E8]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-white mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-[#48E6FF]" />
                  Work Email <span className="text-[#1A73E8]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-white mb-2 flex items-center gap-2">
                  <Building2 size={18} className="text-[#48E6FF]" />
                  Company Name <span className="text-[#1A73E8]">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                  placeholder="Company Inc."
                />
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="block text-white mb-2 flex items-center gap-2">
                  <UsersIcon size={18} className="text-[#48E6FF]" />
                  Team Size <span className="text-[#1A73E8]">*</span>
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                >
                  <option value="" className="bg-[#0B0F19]">Select team size</option>
                  <option value="1-10" className="bg-[#0B0F19]">1-10 people</option>
                  <option value="11-50" className="bg-[#0B0F19]">11-50 people</option>
                  <option value="51-200" className="bg-[#0B0F19]">51-200 people</option>
                  <option value="201-500" className="bg-[#0B0F19]">201-500 people</option>
                  <option value="500+" className="bg-[#0B0F19]">500+ people</option>
                </select>
              </div>

              {/* Use Case */}
              <div>
                <label htmlFor="useCase" className="block text-white mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#48E6FF]" />
                  Use Case <span className="text-[#1A73E8]">*</span>
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  required
                  value={formData.useCase}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl resize-none transition-all"
                  placeholder="Tell us about your use case and what you're looking to achieve..."
                />
              </div>

              {/* Phone (Optional) */}
              <div>
                <label htmlFor="phone" className="block text-white mb-2 flex items-center gap-2">
                  <Smartphone size={18} className="text-[#48E6FF]" />
                  Phone <span className="text-white/40">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Interested Plan */}
              <div>
                <label htmlFor="plan" className="block text-white mb-2 flex items-center gap-2">
                  <CreditCard size={18} className="text-[#48E6FF]" />
                  Interested Plan <span className="text-[#1A73E8]">*</span>
                </label>
                <select
                  id="plan"
                  name="plan"
                  required
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent backdrop-blur-xl transition-all"
                >
                  <option value="" className="bg-[#0B0F19]">Select a plan</option>
                  <option value="starter" className="bg-[#0B0F19]">Starter</option>
                  <option value="professional" className="bg-[#0B0F19]">Professional</option>
                  <option value="enterprise" className="bg-[#0B0F19]">Enterprise</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 border-white/20 rounded-lg bg-white/5 focus:ring-2 focus:ring-[#1A73E8] cursor-pointer"
                />
                <label htmlFor="consent" className="text-white/70">
                  I agree to receive communications and accept the Privacy Policy. <span className="text-[#1A73E8]">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" className="w-full">
                Request a Demo
              </Button>
            </form>

            {/* Secondary Contact Methods */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 mb-4 text-center">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:sales@workflowai.com" className="flex items-center gap-2 text-[#48E6FF] hover:text-[#1A73E8] transition-colors">
                  <Mail size={18} />
                  sales@workflowai.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-[#48E6FF] hover:text-[#1A73E8] transition-colors">
                  <Phone size={18} />
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}