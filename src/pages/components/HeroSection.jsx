import React from 'react';
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Erlang Observability
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Monitor and optimize your Erlang applications with ease.
        </p>
        <Button size="lg" onClick={scrollToFeatures}>
          Get Started
        </Button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <img src="/placeholder.svg" alt="Erlang Observability" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
    </section>
  );
};

export default HeroSection;