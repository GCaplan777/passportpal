import React from "react";
import DashCard from "../components/DashCard";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div class="container bg-white">
        <Hero />
        <DashCard />
      </div>
    </>
  );
};

export default Home;
