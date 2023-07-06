import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { data } from "../data";

function HomePage() {
  return (
    <Fragment>
      <div className="rectangle"></div>
      <Row className="main align-items-center justify-content-center">
        <Col className="text-center">
          <h1>WELCOME</h1>
          <Link to={`/about`} className="main__link">
            About me
          </Link>
        </Col>
        <Col>
          {data.map((project) => (
            <div key={project.id}>
              <Link to={`/detail/${project.id}`} className="link">
                <span>({project.id.toString().padStart(2, "0")})</span>
                {project.title}
              </Link>
            </div>
          ))}
        </Col>
      </Row>
    </Fragment>
  );
}

export default HomePage;
