import { Container, Row, Col } from "react-bootstrap";
import classes from "./Technologies.module.css";

export const technologies = [
  {
    skill: "AutoCAD",
  },
  {
    skill: "SketchUp",
  },
  {
    skill: "Revit",
  },
  {
    skill: "ArchiCAD",
  },
  {
    skill: "Lumion",
  },
  {
    skill: "V-Ray",
  },
  {
    skill: "Adobe Illustrator",
  },
  {
    skill: "Adobe Indesign",
  },
  {
    skill: "Adobe Photoshop",
  },
];

const Technologies = () => {
  return (
    <Container className="mb-4">
      <Row className={classes.technologies}>
        <h2>Used technologies</h2>
        <Col className="ms-5 mt-5">
          <ul>
            {technologies.map((technology) => (
              <li >{technology.skill}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
