import React from "react";
import { Grid } from "@material-ui/core";
import DashboardList from "./Constants";
import DashCard from "./DashCard";

const Dashboard = () => {
  //   const getDashCard = (dashCardObj) => {
  //     return (
  //       <Grid item xs={12} sm={6} md={4}>
  //         <DashCard {...dashCardObj} />{" "}
  //       </Grid>
  //     );
  //   };

  return (
    <>
      {DashboardList.map((dashCardObj) => DashCard(dashCardObj))}
      {/* <Grid item xs={12} sm={6} md={6} lg={6}></Grid> */}
    </>
  );
};

export default Dashboard;
