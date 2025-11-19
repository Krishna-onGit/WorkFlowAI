import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Layers, Zap, TrendingUp, HeadphonesIcon } from 'lucide-react';

const useCases = [
  {
    icon: Layers,
    role: 'Product Teams',
    description: 'AI-organized sprints, summaries, and prioritization.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop'
  },
  {
    icon: Zap,
    role: 'Operations',
    description: 'Predict workload bottlenecks and automate handoffs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    icon: TrendingUp,
    role: 'Marketing',
    description: 'Auto-generated content summaries and cross-team visibility.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop'
  },
  {
    icon: HeadphonesIcon,
    role: 'Customer Success',
    description: 'Instantly summarized conversations and smart escalations.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
  }
];

export function UseCases() {
  return (
    <section className="relative py-[120px] bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1A73E8] rounded-full blur-[150px] opacity-16"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-16"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Built for Every Team
          </h2>
          <p className="text-white/70 text-lg">
            WorkflowAI adapts to your team's unique workflow, no matter your role or industry.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[20px] p-6 hover:bg-white/10 hover:border-[#1A73E8]/40 transition-all duration-500 hover:shadow-[0px_10px_40px_rgba(26,115,232,0.3)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A73E8]/20 to-[#8A5CFF]/20 flex items-center justify-center mb-4 shadow-[0px_0px_16px_rgba(26,115,232,0.3)] group-hover:shadow-[0px_0px_24px_rgba(26,115,232,0.6)] transition-all">
                <useCase.icon size={24} className="text-[#48E6FF]" />
              </div>

              {/* Role */}
              <h3 className="text-white mb-3">
                {useCase.role}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-4 text-sm">
                {useCase.description}
              </p>

              {/* Mini Screenshot */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                <ImageWithFallback
                  src={useCase.image}
                  alt={`${useCase.role} workflow`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent"></div>
              </div>

              {/* CTA Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#48E6FF] hover:text-[#1A73E8] transition-colors text-sm group"
              >
                <span>See Use Case</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}