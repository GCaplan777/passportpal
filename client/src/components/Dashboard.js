import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DashboardList from "./Constants";
import DashCard from "./DashCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard() {
  return (
    <Container className="bg-primary">
      <Row>
        {/* <div class="col-sm-6 col-md-3 col-lg-6 col-xl-3 bg-danger"> */}
        {DashboardList.map((dashCardObj) => (
          <DashCard key={dashCardObj.id} {...dashCardObj} />
        ))}
        {/* </div> */}
      </Row>
    </Container>
  );
}
