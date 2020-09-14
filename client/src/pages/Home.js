import React from "react";
import DashBoard from "../components/Dashboard";
import { Grid } from "@material-ui/core";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <DashBoard />
    </>
  );
};

export default Home;
