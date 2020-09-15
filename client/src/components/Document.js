import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";


const Document = (props) => {
    const { md5 } = props;
    
    const useStyles = makeStyles((theme) => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      cardMedia: {
        paddingTop: "56.25%", // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      // cardActions: {
      //   align: "center",
      // },
    }));
  
    const classes = useStyles();
    
    // fetch(`http://localhost:8000/api/files/${file[0].name}`, { 
    //     method: "GET",
    //     headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,}
    //     }).then( r=>{
    //         document.getElementById('img')
    //     .setAttribute('src', r.url)}
    //          )
   // const cardsArray; 
   
    return (
      <>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            //image={imageUrl}
            title="Image title"
          />
          </Card>
      </>
    );
  };
  
  export default Document;