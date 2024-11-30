import React from 'react';

const FeatureCard = ({ title, description, bgColor, textColor, icon }) => (
  <div className={`feature-card ${bgColor}`}>
    {icon && (
      <div className="feature-icon">
        {icon}
      </div>
    )}
    <h3 className={`feature-title ${textColor}`}>
      {title}
    </h3>
    <p className={`feature-description ${textColor}`}>
      {description}
    </p>
  </div>
);

const Features = () => (
  <section className="features-section">
    <div className="features-intro">
      <h1 className="features-heading">
        INTRODUCING AIRPODS PRO
      </h1>
      <div className="features-subheading">
        Experience the future of wireless audio with AirPods Pro 
        Engineered to deliver Exceptional sound quality
      </div>
    </div>

    <div className="features-grid">
      <FeatureCard
        title="Exceptional Sound"
        description="Immerse Yourself in the Music with AirPods Pro's Advanced Noise Cancellation Technology"
        bgColor="bg-black"
        textColor="text-white"
      />
      <FeatureCard
        title="Elevate"
        description="Discover the Future of Wireless Audio with AirPods Pro Engineered to Deliver Exceptional Sound Quality"
        bgColor="bg-green"
        textColor="text-black"
      />
      <FeatureCard
        title="Intuitive Controls"
        description="Enjoy Effortless Connectivity and Seamless Integration with Your Apple Devices"
        bgColor="bg-black"
        textColor="text-white"
      />
      <FeatureCard
        title="Innova"
        description="Experience the Ultimate in Wireless Audio with Crystal Clear Sound"
        bgColor="bg-orange"
        textColor="text-white"
      />
    </div>
  </section>
);

export default Features;