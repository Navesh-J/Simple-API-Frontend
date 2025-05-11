import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
      <Container>
        <hr />
        <Row className="justify-content-center m-4 text-center">
          <Col md={10}>
            <Row>
              <Col md={4}>
                <h5>User</h5>
                <NavLink to="/add">Add User</NavLink>
              </Col>
              <Col md={4}>
                <h5>About Us</h5>
                <NavLink to="/about">About us</NavLink>
              </Col>
              <Col md={4}>
                <h5>Contact Us</h5>
                <NavLink to="/contact">Contact</NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Footer;
