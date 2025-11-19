import React from 'react';
import { Zap, Shield, TrendingUp, BarChart3, Lock, Brain, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate routine tasks with AI that learns your workflow patterns.'
  },
  {
    icon: Shield,
    title: 'Security Layer',
    description: 'Enterprise-grade data protection with privacy-first AI processing.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Identify bottlenecks early with AI-powered forecasting.'
  },
  {
    icon: Database,
    title: 'AI Data Summaries',
    description: 'Intelligent summaries and actionable insights from your data.'
  }
];

export function WhatIs() {
  return (
    <section className="relative py-[120px] bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3AFF7808_1px,transparent_1px),linear-gradient(to_bottom,#3AFF7808_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3AFF78] rounded-full blur-[150px] opacity-[0.06]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#38F8E4] rounded-full blur-[150px] opacity-[0.08]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header with Curved Gradient Box */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          {/* Curved gradient background */}
          <div className="absolute -inset-8 bg-gradient-to-br from-[#3AFF78]/10 via-[#38F8E4]/10 to-transparent rounded-[60px] blur-2xl -z-10"></div>
          
          <div className="relative inline-block px-12 py-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-[#3AFF78]/20 rounded-[32px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)]">
            <h2 className="text-white mb-4 bg-gradient-to-r from-white via-[#38F8E4] to-white bg-clip-text text-transparent">
              What is WorkflowAI?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              An intelligent workspace that learns, automates, and predicts—all inside one unified dashboard.
            </p>
          </div>
        </div>

        {/* Two-Column Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Card - Dashboard Graph */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#3AFF78]/20 to-[#38F8E4]/20 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-[#3AFF78]/20 rounded-[28px] p-8 shadow-[0px_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3AFF7812_1px,transparent_1px),linear-gradient(to_bottom,#3AFF7812_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-[28px]"></div>
              
              {/* Graph visualization */}
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="text-[#3AFF78]" size={28} />
                  <h3 className="text-white">Extensibility</h3>
                </div>
                
                <div className="relative h-48 flex items-end justify-between gap-4">
                  {/* Animated graph bars */}
                  {[40, 65, 45, 80, 55, 70, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#3AFF78] to-[#38F8E4] rounded-t-lg opacity-60 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                  ))}
                  
                  {/* Line graph overlay */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0,60 L 15,35 L 30,55 L 45,20 L 60,45 L 75,30 L 90,15 L 100,10" fill="none" stroke="#3AFF78" strokeWidth="2" opacity="0.8"/>
                  </svg>
                </div>

                <p className="text-white/60 text-sm mt-6">
                  With a strong emphasis on extensibility, the system offers a flexible framework that allows seamless integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Icon Orb */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#38F8E4]/20 to-[#1A73E8]/20 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-[#38F8E4]/20 rounded-[28px] p-8 shadow-[0px_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#38F8E412_1px,transparent_1px),linear-gradient(to_bottom,#38F8E412_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-[28px]"></div>
              
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="text-[#38F8E4]" size={28} />
                  <h3 className="text-white">Infinite options</h3>
                </div>
                
                {/* Central glowing orb with icons */}
                <div className="relative flex-1 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Center orb */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3AFF78] to-[#38F8E4] opacity-30 blur-xl animate-pulse"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#3AFF78]/40 to-[#38F8E4]/40 backdrop-blur-xl border border-[#3AFF78]/30 flex items-center justify-center">
                      <Brain size={32} className="text-[#3AFF78]" />
                    </div>

                    {/* Orbiting icons */}
                    {[
                      { icon: Zap, angle: 0, distance: 80 },
                      { icon: Shield, angle: 90, distance: 80 },
                      { icon: Lock, angle: 180, distance: 80 },
                      { icon: TrendingUp, angle: 270, distance: 80 }
                    ].map((item, i) => {
                      const rad = (item.angle * Math.PI) / 180;
                      const x = Math.cos(rad) * item.distance;
                      const y = Math.sin(rad) * item.distance;
                      return (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-white/10 backdrop-blur-xl border border-[#38F8E4]/30 flex items-center justify-center hover:scale-110 transition-transform"
                          style={{
                            transform: `translate(${x}px, ${y}px)`
                          }}
                        >
                          <item.icon size={18} className="text-[#38F8E4]" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="text-white/60 text-sm mt-6">
                  With an array of infinite options, the system provides users unparalleled flexibility and choice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-features Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/[0.04] backdrop-blur-[22px] border border-white/10 rounded-[26px] hover:bg-white/[0.08] hover:border-[#3AFF78]/30 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(58,255,120,0.2)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3AFF78]/10 to-[#38F8E4]/10 flex items-center justify-center mb-4 shadow-[0px_0px_20px_rgba(58,255,120,0.2)] group-hover:shadow-[0px_0px_32px_rgba(58,255,120,0.4)] transition-all">
                <feature.icon size={24} className="text-[#3AFF78]" />
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
          ))}
        </div>
      </div>
    </section>
  );
}