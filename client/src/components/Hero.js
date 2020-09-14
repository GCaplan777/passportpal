import React from "react";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: "linear-gradient(45deg, #FE6B8B 10%, #FF8E53 60%)",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            PassPort Pal
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Pack it up, Pack it in, Let us Begin!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/login">
                  <Button variant="contained" color="primary">
                    LOGIN
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">
                  <Button variant="contained" color="primary">
                    REGISTER
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
