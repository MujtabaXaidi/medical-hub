import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PERSON from "../assets/images/svgs/person-icon.svg";
import LOGO from "../assets/images/Logo.png";
import EMAIL from "../assets/images/svgs/email.svg";
import PHONE from "../assets/images/svgs/phone-svg.svg"
import "../assets/styles/Navbar.css";

function NavbarComp() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="upper-nav">
            <img src={LOGO} className="logo" />

            <div className="contact-info-container">
              <div className="contact-info-block">
                <img src={PHONE} className="upper-nav-icon-phone" />
                <div>
                <p>Call Us<br/><b>877-204-6232</b></p>
                <p></p>
                </div>
              </div>
              <div className="contact-info-block">
                <img src={EMAIL} className="upper-nav-icon" />
                <div>
                <p>Write to us<br/><b>Info@medicaltraininghub.com</b></p>
                <p></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/" className="nav-area">
                HOME
              </Nav.Link>
              <Nav.Link href="#/about-us" className="nav-area">
                ABOUT US{" "}
              </Nav.Link>
              <Nav.Link href="#/courses" className="nav-area">
                COURSES
              </Nav.Link>
              <NavDropdown
                title="POLICIES"
                id="basic-nav-dropdown"
                className="nav-area"
              >
                <NavDropdown.Item href="#/phlebotomy-policy" className="nav-area">
                  PHLEBOTOMY
                </NavDropdown.Item>
                <NavDropdown.Item href="#/cpr-policy" className="nav-area">
                  CPR
                </NavDropdown.Item>
                <NavDropdown.Item href="#/cna-policy" className="nav-area">
                  CNA
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#/contact-us" className="nav-area">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Nav.Link href="#/form">
              <div className="btn-nav">
                <img src={PERSON} className="icon" />
                REGISTER
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
