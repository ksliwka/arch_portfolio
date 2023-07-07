import { Navbar, Col, Row, NavbarBrand, Container } from "react-bootstrap";
import classes from "./AboutNavbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AboutNavbar = () => {
  return (
    <Container>
      <Navbar sticky="top" className={`sticky-top ${classes.about__navbar}`}>
        <Row className="w-100">
          <Col className="text-start mt-2">
            <Link to="/" className={`${classes.back} text-center`}>
              <AiOutlineArrowLeft className="me-2 ms-1" />
              Go Back
            </Link>
          </Col>
          <Col className="text-center">
            <NavbarBrand className={classes.about__brand}>About</NavbarBrand>
          </Col>
          <Col className="text-end">
            <Navbar.Text>Katarzyna Śliwka</Navbar.Text>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default AboutNavbar;
