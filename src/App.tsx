import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import PortfolioSection from './components/PortfolioSection';
import TrainingSection from './components/TrainingSection';
import PartnershipsSection from './components/PartnershipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import type { MenuItem, PortfolioItem } from './types';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const menuItems: MenuItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'training', label: 'Training & Consultancy' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'contact', label: 'Contact' }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Alive Home',
      description: 'Revolutionizing real estate with cutting-edge technology solutions.',
      category: 'real estate tech'
    },
    {
      id: 2,
      title: 'Commerce Solutions',
      description: 'Next-generation e-commerce platforms with AI-powered personalization.',
      category: 'commerce'
    },
    {
      id: 3,
      title: 'Workplace Tools',
      description: 'Productivity suites that transform how teams collaborate and innovate.',
      category: 'workplace'
    },
    {
      id: 4,
      title: 'Digital Services',
      description: 'End-to-end digital transformation services for enterprises.',
      category: 'services'
    }
  ];

  const handleNavigationClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header 
        menuItems={menuItems} 
        activeSection={activeSection} 
        onNavigationClick={handleNavigationClick} 
      />
      
      <HeroSection />
      
      <OverviewSection />
      
      <PortfolioSection portfolioItems={portfolioItems} />
      
      <TrainingSection />
      
      <PartnershipsSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default App;