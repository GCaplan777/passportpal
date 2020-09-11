import React from "react";
import { Grid } from "@material-ui/core";
import DashboardList from "./Constants";
import DashCard from "./DashCard";
// import { Dashboard } from "@material-ui/icons";

const Dashboard = () => {
  const getDashCard = (dashCardObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <DashCard {...dashCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {DashboardList.map((dashCardObj) => DashCard(dashCardObj))}
    </Grid>
  );
};

export default Dashboard;
