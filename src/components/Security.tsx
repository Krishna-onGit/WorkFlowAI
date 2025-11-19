import React from 'react';
import { Lock, Shield, Eye, FileCheck, ArrowRight } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data encrypted at rest and in transit using AES-256 and TLS 1.3.'
  },
  {
    icon: FileCheck,
    title: 'SOC 2, GDPR, HIPAA',
    description: 'Fully compliant with global security and privacy standards.',
    badges: ['SOC 2 Type II', 'GDPR', 'HIPAA']
  },
  {
    icon: Eye,
    title: 'AI Privacy Controls',
    description: 'On-device preprocessing, anonymization, and zero data retention options.'
  }
];

export function Security() {
  return (
    <section className="relative py-[120px] bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#1A73E8] rounded-full blur-[150px] opacity-16"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-16"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-6">
            <Shield size={18} className="text-[#48E6FF]" />
            <span className="text-white text-sm">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-white mb-4">
            Your Data is Protected at Every Layer
          </h2>
          <p className="text-white/70 text-lg">
            Built for security-conscious teams with the highest standards of data protection.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-[22px] border border-white/10 rounded-[20px] hover:bg-white/10 hover:border-[#1A73E8]/40 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(26,115,232,0.3)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 flex items-center justify-center mb-6 shadow-[0px_0px_16px_rgba(26,115,232,0.3)]">
                <feature.icon size={28} className="text-[#48E6FF]" />
              </div>

              {/* Title */}
              <h3 className="text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-4">
                {feature.description}
              </p>

              {/* Compliance Badges */}
              {feature.badges && (
                <div className="flex flex-wrap gap-2">
                  {feature.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#1A73E8]/20 to-[#8A5CFF]/20 border border-[#1A73E8]/30 rounded-full text-[#48E6FF] text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#48E6FF] hover:text-[#1A73E8] transition-colors group"
          >
            <span className="text-lg">View Security Documentation</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}