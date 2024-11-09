import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestProducts from "../components/LatestProducts";
import OurPolicy from "../components/OurPolicy";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestProducts />
      <Offers />
      <OurPolicy />
      <Footer />
    </div>
  );
}

export default Home;
