import React from "react";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Footer from "../components/Footer";

function Films() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Movie />
      </div>
      <Footer />
    </>
  );
}

export default Films;
