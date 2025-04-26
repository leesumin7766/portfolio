import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("goto").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <h1>solve everything</h1>
      <button className="scroll-btn" onClick={scrollToNext}>↓</button>
    </section>
  );
};

export default Hero;