import React from "react";
import DashCard from "../components/DashCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div class="container bg-white">
        <Hero />
        <DashCard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
