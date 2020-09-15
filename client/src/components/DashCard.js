import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const DashCard = (props) => {
  const { description, imageUrl, route, routeText, id } = props;

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} key={id}>
        <CardMedia
          className={classes.cardMedia}
          image={imageUrl}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            <Button variant="contained" color="default" width="100%">
              <Link to={route}> {routeText} </Link>
            </Button>
          </Typography>
          <Typography align="center">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DashCard;
