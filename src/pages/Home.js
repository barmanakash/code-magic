import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CtaFooter from '../components/CtaFooter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CtaFooter />
    </>
  );
}