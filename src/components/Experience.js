import { Container, Row, Col } from "react-bootstrap";
import classes from "./Experience.module.css";
import { experience } from "../data/experience";
import { BsArrowDownRight } from "react-icons/bs";

const Experience = () => {
  return (
    <Container className="mb-4 mt-5">
      <Row
        className={`align-items-top justify-content-top  ${classes.experience}`}
      >
        <Col>
          <h2>Experience</h2>
        </Col>
        {experience.map((item) => (
          <Row>
            <Col md={4} lg={3} className=" mt-xs-5 ">
              <h3 className={`text-muted ${classes.experience__year}`}>
                {item.year}{" "}
                <BsArrowDownRight
                  className={`d-md-none ${classes.right_arrow}`}
                />
              </h3>
            </Col>
            <Col>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
