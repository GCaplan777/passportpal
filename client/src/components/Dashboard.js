import React from "react";
import { Grid } from "@material-ui/core";
import DashboardList from "./Constants";
import DashCard from "./DashCard";

const Dashboard = () => {
  return <>{DashboardList.map((dashCardObj) => DashCard(dashCardObj))}</>;
};

export default Dashboard;
