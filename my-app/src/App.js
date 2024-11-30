import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import AdvancedFeatures from './components/AdvancedFeatures';
import ConvenienceSection from './components/ConvenienceSection';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="hero-section">
        <Hero />
      </div>
      <div id="features-section">
        <Features />
      </div>
      <div id="product-section">
        <ProductShowcase />
      </div>
      <AdvancedFeatures />
      <ConvenienceSection />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
