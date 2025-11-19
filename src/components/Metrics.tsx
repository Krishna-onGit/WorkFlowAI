import React from 'react';
import { TrendingUp, Users, Shield } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '+47%',
    label: 'Productivity Increase',
    description: 'Average team efficiency gain'
  },
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Teams',
    description: 'Trust WorkflowAI daily'
  },
  {
    icon: Shield,
    value: '99.99%',
    label: 'Uptime & Enterprise Security',
    description: 'SOC 2 & GDPR compliant'
  }
];

// Placeholder company logos
const companies = [
  'Company A',
  'Company B',
  'Company C',
  'Company D',
  'Company E',
  'Company F',
  'Company G',
  'Company H'
];

export function Metrics() {
  return (
    <section className="relative py-[120px] bg-gradient-to-b from-[#0B0F19] to-[#0B0F19] overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#48E6FF] rounded-full blur-[150px] opacity-16"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Why Teams Trust WorkflowAI
          </h2>
          <p className="text-white/70 text-lg">
            Join thousands of high-performing teams automating their workflows with AI.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/5 backdrop-blur-[22px] border border-white/10 rounded-[20px] text-center hover:bg-white/10 hover:border-[#1A73E8]/40 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(26,115,232,0.3)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 flex items-center justify-center mx-auto mb-6 shadow-[0px_0px_16px_rgba(26,115,232,0.3)]">
                <metric.icon size={32} className="text-[#48E6FF]" />
              </div>

              {/* Value */}
              <div className="text-5xl text-white mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {metric.value}
              </div>

              {/* Label */}
              <h3 className="text-white mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all"
              >
                <span className="text-white/40 text-xs">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
