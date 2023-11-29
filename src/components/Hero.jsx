// import React from 'react';
import "./Hero.css";
const Hero = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="hero_contents">
        <h1>YOUR FEEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="scond_btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand_icons">
          <img src="/images/amazon.png" alt="" />
          <img src="/images/flipkart.png" alt="" />
        </div>
      </div>
      <div className="hero_image">
        <img src="/images/hero-image.png" alt="not found" />
      </div>
    </div>
  );
};

export default Hero;
