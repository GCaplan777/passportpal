import React from "react";
import { Grid } from "@material-ui/core";
import Hero from "../components/ListComponents/ListUserHero";
import UserList from "../components/ListComponents/ListUser";

const ListUser = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
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

export default ListUser;
