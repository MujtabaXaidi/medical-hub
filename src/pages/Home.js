import React from "react";
import "../assets/styles/Home.css";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WELCOME from "../assets/images/welcome.png";

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Row>
          <Col >
          <div className="welcome-image-container">
            <img src={WELCOME} className="welcome-img" />
            </div>
          </Col>
          <Col xs={6}>
            <div className="text-container">
              <p className="welcome-text-one">A little about us</p>
              <h1 className="welcome-text-two">COMMITTED TO EXCELLENCE</h1>
              <p className="welcome-text-three">
                The All On Four concept means that the bridge that compensates
                all teeth of one jaw leans on only 4 implants. All On Four is a
                safe and predictable procedure, with an extremely high success
                rate.<br/><br/>If you want to walk in the dental clinic in the morning,
                leave all the troubles you’ve been having with your teeth
                behind, and walk out in the afternoon with beautiful, fixated
                teeth, call us and schedule the first check-up. * in certain
                cases, it takes up to 48h to make temporary work.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <h1 className="heading-home">OUR COURSES</h1>
      <h2 className="heading-home light">BROWSE HERE</h2>
      <Courses />
    </>
  );
}

export default Home;
