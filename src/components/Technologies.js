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
    <Container >
      <Row className={`  ${classes.technologies}`}>
        <h2>Used technologies</h2>
        <Col className="mt-5">
            {technologies.map((technology) => (
              <p>{technology.skill}</p>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
