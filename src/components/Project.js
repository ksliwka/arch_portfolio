import {
  Image,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import classes from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div>
      <Navbar sticky="top" className={classes.project__navbar}>
        <Row className="w-100">
          <Col className="text-start">
            <Navbar.Text>{project.location}</Navbar.Text>
          </Col>
          <Col className="text-center">
            <NavbarBrand className={classes.project__brand}>
              {project.title}
            </NavbarBrand>
          </Col>
          <Col className="text-end">
            <Navbar.Text>{project.author}</Navbar.Text>
          </Col>
        </Row>
      </Navbar>
      <Row
        className={`align-items-center justify-content-center ${classes.project__main}`}
      >
        <Col>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </Col>
        <Col sm={3}></Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col>
          <Image src={project.main} fluid className="mt-5"></Image>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={project.plan} fluid className="mt-5"></Image>
        </Col>
        <Col sm={3}></Col>
      </Row>

      {project.images.map((image) => (
        <Row className="mt-4">
          <Image src={image} fluid></Image>
        </Row>
      ))}
    </div>
  );
};

export default Project;
