import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Constants from "./Constants";
import CardHeader from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const DashCard = (props) => {
  const { avatarUrl, title, description, imageUrl, route, routeText } = props;

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  // const cards = [];

  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="sm">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid container spacing={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </CardContent>
              <CardActions>
                <Link to={route}> {routeText}</Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashCard;
