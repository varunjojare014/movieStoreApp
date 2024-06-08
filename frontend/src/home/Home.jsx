import React from "react";
import Navbar from "../components/Navbar"; // Correct path to Navbar
import Banner from "../components/Banner"; // Correct path to Banner
import Freemovie from "../components/Freemovie"; // Correct path to Freemovie
import Footer from "../components/Footer"; // Correct path to Foot

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freemovie />
      <Footer />
    </>
  );
}

export default Home;
