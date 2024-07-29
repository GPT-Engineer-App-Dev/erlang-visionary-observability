import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import DocumentationSection from './components/DocumentationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <DocumentationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;