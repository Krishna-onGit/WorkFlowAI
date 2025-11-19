import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'This platform transformed how our team works — productivity gains are real.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    content: 'Intuitive, powerful, and supported by a stellar team.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations, GrowthLabs',
    content: 'Unmatched in features, ease of use, and value.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-[120px] bg-gradient-to-b from-[#0B0F19] via-[#0B0F19] to-[#0B0F19] overflow-hidden">
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1A73E8] rounded-full blur-[150px] opacity-15"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#8A5CFF] rounded-full blur-[150px] opacity-15"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white mb-4">
            Loved by teams worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0px_10px_60px_rgba(26,115,232,0.3)] hover:-translate-y-2"
            >
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/0 to-[#8A5CFF]/0 group-hover:from-[#1A73E8]/10 group-hover:to-[#8A5CFF]/10 rounded-3xl transition-all duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={60} className="text-[#48E6FF]" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FFBE0B] text-[#FFBE0B]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white mb-6 relative z-10">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A73E8] to-[#8A5CFF] flex items-center justify-center shadow-[0px_0px_20px_rgba(26,115,232,0.4)]">
                    <span className="text-white">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}