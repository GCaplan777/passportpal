import React from "react";
import { Grid } from "@material-ui/core";
import DashboardList from "./Constants";
import DashCard from "./DashCard";

const Dashboard = () => {
  const getDashCard = (dashCardObj) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <DashCard {...dashCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {DashboardList.map((dashCardObj) => DashCard(dashCardObj))}
    </Grid>

    // <Grid container spacing={4}>
    //   {DashboardList.map((dashCardObj) =>
    //     DashCard(dashCardOjb)()
    // <Grid item key={DashCard} xs={12} sm={6} md={4}></Grid>
    //   )}
    // </Grid>
  );
};

export default Dashboard;
