import React from 'react';

const ProductFeature = ({ image, title, description }) => (
  <div className="product-feature">
    <img src={image} alt={title} className="product-image" />
    <h3 className="product-title">{title}</h3>
    <p className="product-description">{description}</p>
  </div>
);

const ProductShowcase = () => (
  <section className="product-showcase">
    <h2 className="showcase-title">Explore the AirPods Pro</h2>
    <p className="showcase-description">
      Discover the Remarkable Features of AirPods Pro, Engineered to Elevate Your Listening Experience with Exceptional sound
    </p>
    <div className="showcase-grid">
      <ProductFeature
        image="/images/Adaptive.png"
        title="Adaptive"
        description="Audio Customization"
      />
      <ProductFeature
        image="/images/Wireless.png"
        title="Wireless"
        description="Customizable Fit"
      />
      <ProductFeature
        image="/images/Automatic.png"
        title="Automatic Pairing"
        description="Sweat and Water Resistance"
      />
    </div>
  </section>
);

export default ProductShowcase;
