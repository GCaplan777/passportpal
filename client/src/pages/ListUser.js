import React from "react";
import { Grid } from "@material-ui/core";
import Hero from "../components/ListComponents/ListUserHero";
import UserList from "../components/ListComponents/ListUser";

const ListUser = () => {
  return (
    <>
      <div class="container bg-white">
        <Hero />
        <UserList />
      </div>
    </>
  );
};

export default ListUser;
