import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CtaFooter from '../components/CtaFooter';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state && location.state.scrollTo;
    if (!targetId) return;

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Clear the scroll intent from history state so it doesn't re-trigger
    // on refresh or back/forward navigation.
    navigate(location.pathname, { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CtaFooter />
    </>
  );
}