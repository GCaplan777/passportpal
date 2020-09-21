import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DashboardList from "./Constants";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const DashCard = () => {
  // const { title, description, imageUrl, route, routeText } = props;

  return (
    <>
      <Container>
        <Row>
          {DashboardList.map((info) => (
            <Col md={6}>
              <Card style={{ width: "510" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "510", height: "340" }}
                  src={info.imageUrl}
                />
                <Card.Body className="text-center">
                  <Card.Title>{info.title}</Card.Title>
                  <Card.Text>{info.description}</Card.Text>
                  <Button variant="secondary" text-white>
                    <Link to={info.route}> {info.routeText} </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashCard;
