import React from "react";
import Cards from "../cards/Cards";
import "./app.css";
import HeroSection from "../herosection/Herosection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
