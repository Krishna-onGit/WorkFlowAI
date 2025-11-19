import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-[120px] overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8] via-[#8A5CFF] to-[#48E6FF]"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full animate-pulse delay-100"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8">
            <Sparkles size={16} className="text-white" />
            <span className="text-white">AI-Powered Workflow Revolution</span>
          </div>

          <h2 className="text-white mb-6 leading-tight">
            Upgrade your workflow with powerful AI automation.
          </h2>
          
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams already working smarter with WorkflowAI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" className="group bg-white text-[#1A73E8] hover:bg-white/90 shadow-[0px_10px_40px_rgba(255,255,255,0.3)]">
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="text-white border-white/40 hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}