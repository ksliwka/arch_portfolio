import { Container, Row, Col } from "react-bootstrap";
import classes from "./About.module.css";

const AboutIntro = () => {
  return (
    <Container>
      <Row
        className={`align-items-center justify-content-center ${classes.about}`}
      >
        <Col>
          <h1>Katarzyna Śliwka</h1>
          <p>
            Hello, I’m Katarzyna Śliwka, a passionate architecture student ready
            to make my mark in the industry! I thrive on challenges and am
            always seeking opportunities to grow both personally and
            professionally. With an unwavering enthusiasm for problem solving,
            I’m committed to expanding my skills and knowledge to bring fresh,
            innovative ideas to every project I undertake. Join me on this
            exciting journey as we shape the future of architecture together!
          </p>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </Container>
  );
};

export default AboutIntro;
