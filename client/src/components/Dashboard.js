import React from "react";
import { Grid } from "@material-ui/core";
import DashboardList from "./Constants";
import DashCard from "./DashCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // background: "linear-gradient(45deg, #FE6B8B 10%, #FF8E53 60%)",
    backgroundColor: "#fce4ec",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        {DashboardList.map((dashCardObj) => DashCard(dashCardObj))};
      </div>
    </>
  );
}
