import { Fragment } from "react";
import { Link, RouterProvider } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Fragment>
      <div className="rectangle"></div>
      <Row className="main align-items-center justify-content-center">
        <Col className="text-center">
          <h1>WELCOME</h1>
        </Col>
        <Col>
          <div>
            <Link to="/childrenshouse" className="link">
              <span>(01)</span>Children's House
            </Link>
          </div>
          <div>
            <Link to="/climbingcenter" className="link">
              <span>(02)</span>Climbing Center
            </Link>
          </div>
          <div>
            <Link to="/housingcomplex" className="link">
              <span>(03)</span>Housing Complex
            </Link>
          </div>
          <div>
            <Link to="/socialhousing" className="link">
              <span>(04)</span>Social Housing
            </Link>
          </div>
          <div>
            <Link to="/elederlypeoplehousing" className="link">
              <span>(05)</span>Elderly People Housing
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default HomePage;
