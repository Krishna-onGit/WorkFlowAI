import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIs } from './components/WhatIs';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { ProductHighlight } from './components/ProductHighlight';
import { Metrics } from './components/Metrics';
import { Pricing } from './components/Pricing';
import { Security } from './components/Security';
import { CTABanner } from './components/CTABanner';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhatIs />
      <Features />
      <HowItWorks />
      <ProductHighlight />
      <UseCases />
      <Testimonials />
      <Metrics />
      <Pricing />
      <Security />
      <CTABanner />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}