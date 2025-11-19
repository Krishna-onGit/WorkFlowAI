import React from 'react';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
  'Real-time collaboration',
  'Advanced security and compliance',
  'Integrations with 100+ tools',
  'Custom workflows'
];

export function ProductHighlight() {
  return (
    <section className="relative py-[120px] bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1A73E8] rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-white mb-6">
              See WorkflowAI Think in Real-Time
            </h2>

            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Watch WorkflowAI summarize meetings, organize tasks, and surface insights — instantly and automatically.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1A73E8] to-[#8A5CFF] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0px_0px_20px_rgba(26,115,232,0.4)] group-hover:shadow-[0px_0px_30px_rgba(26,115,232,0.6)] transition-all">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="group">
                Try Interactive Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass">See All Features</Button>
            </div>
          </div>

          {/* Right Image - AI Dashboard */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#1A73E8]/30 via-[#8A5CFF]/30 to-[#48E6FF]/30 rounded-3xl blur-3xl"></div>
              
              {/* Glass Card Container */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-[0px_10px_60px_rgba(0,0,0,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGludGVyZmFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzgyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Holographic AI dashboard with real-time insights"
                  className="relative w-full rounded-2xl"
                />
                
                {/* Floating Insight Card */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-3 rounded-2xl text-sm shadow-[0px_10px_40px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#48E6FF] rounded-full animate-pulse"></div>
                    <span>AI Analyzing</span>
                  </div>
                  <p className="text-white/70 text-xs">Generating insights...</p>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 backdrop-blur-xl border border-white/20 text-white px-4 py-3 rounded-2xl text-sm shadow-[0px_10px_40px_rgba(0,0,0,0.3)]">
                  <p className="text-white/70 text-xs mb-1">Efficiency</p>
                  <p className="text-2xl">+47%</p>
                </div>
              </div>

              {/* Ambient Orbit Rings */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#1A73E8]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#8A5CFF]/30 rounded-full animate-pulse delay-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}