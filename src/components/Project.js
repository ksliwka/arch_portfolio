import { useState, useEffect } from "react";
import {
  Image,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import classes from "./Project.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Project = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }
  return (
    <Container className={classes.projectContainer}>
      <Navbar sticky="top" className={classes.project__navbar}>
        <Row className="w-100">
          <Col className="text-start d-sm-block d-none">
            <Navbar.Text>{project.location}</Navbar.Text>
          </Col>
          <Col className="text-center">
            <NavbarBrand className={classes.project__brand}>
              {project.title}
            </NavbarBrand>
          </Col>
          <Col className="text-end d-sm-block d-none">
            <Navbar.Text>{project.author}</Navbar.Text>
          </Col>
        </Row>
      </Navbar>
      <Row className="justify-content-center">
        <div className={`position-fixed bottom-0 ${classes.stickyLink}`}>
          <Link to="/" className={`${classes.back} text-center`}>
            <AiOutlineArrowLeft className="me-2 ms-1" />
            Go Back
          </Link>
        </div>
      </Row>
      <Row
        className={`align-items-center justify-content-center ${classes.project__main}`}
      >
        <Col>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </Col>
        <Col sm={3}></Col>
      </Row>
      <Row className={classes.main_image_row}>
        <Col>
          <Image src={project.main} fluid className="mt-5 "></Image>
        </Col>
      </Row>
      {project.images.map((image, index) => (
        <Row
          className={`mt-4  align-items-center ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
          style={{ margin: "200px 0" }}
        >
          <Col sm={5} className="text-center">
            <h3 className={classes.image__description}>{image.description}</h3>
          </Col>
          <Col>
            <div style={{ maxHeight: "100%", overflow: "hidden" }}>
              <Image src={image.image} fluid />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Project;
