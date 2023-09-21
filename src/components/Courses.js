import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Botomy from "../assets/images/botomy.png";
import CNA from "../assets/images/cna.png";
import CPR from "../assets/images/cpr.png";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="crs-info">
            <div className="image-container botomy">
              <p className="new-price">
                <b>Price:$1,500</b>
              </p>
            </div>
            <h2 className="heading">PHLEBOTOMY TRAINING</h2>
            <p className="crs-text">
              Phlebotomists draw blood from patients for medical purposes,
              including laboratory testing, transfusions, or donations, while
              prioritizing patient comfort and safety.
            </p>
          </div>
          <Link className="none">
            <p className="read-more-new">Read More!</p>
          </Link>
        </Col>
        <Col>
          <div className="crs-info">
            <div className="image-container cpr">
              <p className="new-price">
                <b>Price:$99</b>
              </p>
            </div>
            <h2 className="heading">CPR TRAINING</h2>
            <p className="crs-text">
              CPR training teaches life-saving skills for emergencies when
              someone's heart or breathing has stopped.
            </p>
          </div>
          <Link className="none">
            <p className="read-more-new">Read More!</p>
          </Link>
        </Col>
        <Col>
          <div className="crs-info">
            <div className="image-container cna">
              <p className="new-price">
                <b>Coming Soon!</b>
              </p>
            </div>
            <h2 className="heading">CNA TRAINING</h2>
            <p className="crs-text">
              CNAs provide basic patient care in healthcare settings under RN or
              LPN supervision, including hospitals and nursing homes.
            </p>
          </div>
          <Link className="none">
            <p className="read-more-new">Read More!</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Courses;
