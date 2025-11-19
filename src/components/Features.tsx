import React from 'react';
import { Zap, Shield, TrendingUp, Users, Cpu, Lock, BarChart3, Workflow } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const mainFeatures = [
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time insights with predictive analytics and intelligent data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
    accent: '#3AFF78'
  },
  {
    title: 'Workflow Integration Network',
    description: 'Connect all your tools in one unified AI-powered workspace.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop',
    accent: '#38F8E4'
  }
];

const subFeatures = [
  {
    icon: Cpu,
    title: 'AI Workflow Engine',
    description: 'Automates tasks, reminders, and recurring processes using intelligent triggers.'
  },
  {
    icon: Lock,
    title: 'Secure AI Data Layer',
    description: 'Advanced encryption and compliance built for safety-critical teams.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Insights',
    description: 'Get summaries, alerts, and predictions before issues happen.'
  },
  {
    icon: Users,
    title: 'Smart Collaboration',
    description: 'AI-enhanced teamwork with suggestions and organized updates.'
  }
];

export function Features() {
  return (
    <section className="relative py-[120px] bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38F8E408_1px,transparent_1px),linear-gradient(to_bottom,#38F8E408_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#3AFF78] rounded-full blur-[150px] opacity-[0.08]"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#38F8E4] rounded-full blur-[150px] opacity-[0.06]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header with Wide Curved Gradient Background */}
        <div className="relative text-center max-w-5xl mx-auto mb-20">
          {/* Wide curved gradient background */}
          <div className="absolute -inset-x-32 -inset-y-12 bg-gradient-to-r from-[#3AFF78]/8 via-[#38F8E4]/12 to-[#1A73E8]/8 rounded-[80px] blur-3xl -z-10"></div>
          
          <div className="relative inline-block px-16 py-10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-[#38F8E4]/20 rounded-[32px] shadow-[0px_20px_80px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-[#3AFF78] to-[#38F8E4] rounded-full">
              <span className="text-[#0B0F19] text-sm">Features</span>
            </div>
            
            <h2 className="text-white mb-4 bg-gradient-to-r from-[#3AFF78] via-white to-[#38F8E4] bg-clip-text text-transparent">
              Everything Your Team Needs — Enhanced by AI
            </h2>
            <p className="text-white/70 text-lg">
              Powerful features designed to automate workflows and amplify team productivity with intelligent AI assistance.
            </p>
          </div>
        </div>

        {/* Two Big Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glow effect */}
              <div 
                className="absolute -inset-4 rounded-[32px] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${feature.accent}40, transparent)`
                }}
              ></div>
              
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-white/10 rounded-[28px] overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-700">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3AFF7808_1px,transparent_1px),linear-gradient(to_bottom,#3AFF7808_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                
                {/* 16:9 Image */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                  
                  {/* Floating status badge */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#3AFF78] animate-pulse"></div>
                    <span className="text-white text-sm">Live</span>
                  </div>

                  {/* Feature icons overlay */}
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Center node */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3AFF78] to-[#38F8E4] flex items-center justify-center shadow-[0px_0px_40px_rgba(56,248,228,0.6)]">
                          <Workflow size={28} className="text-white" />
                        </div>
                        
                        {/* Orbiting integration icons */}
                        {[Zap, Shield, Users, BarChart3, Lock, TrendingUp].map((Icon, i) => {
                          const angle = (i * 60) * Math.PI / 180;
                          const radius = 100;
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;
                          return (
                            <div
                              key={i}
                              className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-white/10 backdrop-blur-xl border border-[#38F8E4]/30 flex items-center justify-center"
                              style={{
                                transform: `translate(${x}px, ${y}px)`
                              }}
                            >
                              <Icon size={16} className="text-[#38F8E4]" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-white mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Sub-Feature Rows with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/[0.04] backdrop-blur-[22px] border border-white/10 rounded-[26px] hover:bg-white/[0.08] hover:border-[#38F8E4]/30 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(56,248,228,0.2)] hover:-translate-y-2"
            >
              {/* Neon glow on hover */}
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-[#3AFF78]/0 to-[#38F8E4]/0 group-hover:from-[#3AFF78]/5 group-hover:to-[#38F8E4]/5 transition-all duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3AFF78]/10 to-[#38F8E4]/10 flex items-center justify-center mb-4 shadow-[0px_0px_20px_rgba(56,248,228,0.2)] group-hover:shadow-[0px_0px_32px_rgba(56,248,228,0.5)] transition-all">
                  <feature.icon size={24} className="text-[#38F8E4]" />
                </div>

                {/* Title */}
                <h4 className="text-white mb-2">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#38F8E4] hover:text-[#3AFF78] transition-colors group text-lg"
          >
            <span>Explore All Features</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}