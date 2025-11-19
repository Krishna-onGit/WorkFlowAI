import React from 'react';
import { Button } from './Button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams starting automation',
    features: [
      'Up to 10 members',
      '10GB storage',
      'Basic analytics',
      'Email support'
    ],
    isRecommended: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Best for growing teams that need predictive insights and advanced automation',
    features: [
      'Up to 50 members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'API access'
    ],
    isRecommended: true,
    buttonText: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom security, integrations, and support',
    features: [
      'Unlimited members',
      'Unlimited storage',
      'Custom workflows',
      'Dedicated support'
    ],
    isRecommended: false,
    buttonText: 'Contact Sales'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-[120px] bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#0B0F19] overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#1A73E8] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-white/70 text-xl mb-2">
            Choose the plan that's right for your team. 14-day free trial included.
          </p>
          <p className="text-[#48E6FF] text-sm">
            All plans include full AI engine access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                plan.isRecommended
                  ? 'bg-gradient-to-br from-[#1A73E8]/10 via-[#8A5CFF]/10 to-[#48E6FF]/10 backdrop-blur-xl border-2 border-[#1A73E8] shadow-[0px_0px_60px_rgba(26,115,232,0.5)] scale-105 hover:scale-[1.08]'
                  : 'bg-white/5 backdrop-blur-[20px] border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0px_10px_60px_rgba(26,115,232,0.2)] hover:-translate-y-2'
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-[#1A73E8] to-[#8A5CFF] rounded-full flex items-center gap-2 shadow-[0px_0px_40px_rgba(26,115,232,0.8)]">
                  <Star size={14} className="fill-white text-white" />
                  <span className="text-white text-sm">Most Popular</span>
                </div>
              )}

              {/* Glowing Aura for Professional */}
              {plan.isRecommended && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 via-[#8A5CFF]/20 to-[#48E6FF]/20 rounded-3xl blur-2xl -z-10"></div>
              )}

              {/* Plan Name */}
              <h3 className="text-white mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-white/60 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-white/60">
                  {plan.period}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.isRecommended ? 'primary' : 'glass'}
                className="w-full mb-8"
              >
                {plan.buttonText}
              </Button>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#1A73E8]/30 to-[#8A5CFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#48E6FF]" />
                    </div>
                    <span className="text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}