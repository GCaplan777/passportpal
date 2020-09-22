import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";

export default function Hero() {
  return (
    <Container fluid>
      <Jumbotron
        className="text-center text-white mt-5 jumbotron"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4254144/pexels-photo-4254144.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="display1 text-lead">Passport Pal</h1>
        <h3>Pack it up, Pack it in, Let us Begin!</h3>
      </Jumbotron>
    </Container>
  );
}
