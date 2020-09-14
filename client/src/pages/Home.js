import React from "react";
import DashBoard from "../components/Dashboard";
import { Grid } from "@material-ui/core";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      {/* <Grid container direction="column"> */}
      {/* <Grid item> */}
      <Hero />
      {/* </Grid> */}
      {/* <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}> */}

      <DashBoard />
      {/* </Grid> */}
      {/* <Grid item xs={false} sm={2} />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Home;
