import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import FadeMenu from "./FadeMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <FadeMenu />
          <Typography variant="h6" className={classes.title} align="center">
            PassPort Pal
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          {/* <Link to="/login"> Login</Link>
          <Link to="/register"> Register</Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
