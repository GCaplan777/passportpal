import React from "react";
import Header from "../components/Header";
import { Grid } from "@material-ui/core";
import Hero from "../components/ListComponents/ListHero";
import UserList from "../components/ListComponents/UserList";

const PackingList = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
          <Hero />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <UserList />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default PackingList;
