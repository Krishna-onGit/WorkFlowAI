import React from 'react';
import { UserPlus, Link2, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Your workspace configures automatically using AI.',
    number: '01'
  },
  {
    icon: Link2,
    title: 'Connect Tools',
    description: 'WorkflowAI maps your workflows instantly.',
    number: '02'
  },
  {
    icon: Sparkles,
    title: 'Work Smarter',
    description: 'AI handles summaries, automations, and predictions.',
    number: '03'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-[120px] bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#48E6FF] rounded-full blur-[150px] opacity-15"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Get Set Up in Minutes — AI Does the Heavy Lifting
          </h2>
          <p className="text-white/70 text-lg">
            Three simple steps to unlock intelligent workflow automation.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A73E8] via-[#8A5CFF] to-[#48E6FF] opacity-30"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Glowing Step Number Badge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#8A5CFF] flex items-center justify-center shadow-[0px_0px_24px_rgba(26,115,232,0.6)] z-10">
                    <span className="text-white text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Glass Card */}
                <div className="p-8 bg-white/8 backdrop-blur-[22px] border border-white/12 rounded-[20px] text-center hover:bg-white/12 hover:border-[#1A73E8]/40 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(26,115,232,0.3)] hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 flex items-center justify-center mb-6 group-hover:shadow-[0px_0px_40px_rgba(26,115,232,0.4)] transition-all duration-500">
                    <step.icon size={36} className="text-[#48E6FF]" />
                  </div>

                  <h3 className="text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}