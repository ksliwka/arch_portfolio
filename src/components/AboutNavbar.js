import { Navbar, Col, Row, NavbarBrand, Container } from "react-bootstrap";
import classes from "./AboutNavbar.module.css";

const AboutNavbar = () => {
  return (
    <Container>
      <Navbar sticky="top" className={classes.about__navbar}>
        <Row className="w-100">
          <Col className="text-start">
            <Navbar.Text></Navbar.Text>
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
