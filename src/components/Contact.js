import classes from "./Contact.module.css";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
      <Row
        className={`justify-content-center align-items-center ${classes.contact}`}
      >
        <Col className="text-center">
          <h1>Let's connect</h1>
          <p>sliwkakatarzyna12@gmail.com</p>
        </Col>
      </Row>
  );
};

export default Contact;
