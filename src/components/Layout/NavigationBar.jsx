import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../logo.svg";

const NavigationBar = () => {
  return (
    <>
      <Navbar sticky="top" className="bg-emerald-400">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Easy Users
          </Navbar.Brand>
          <img src={logo} alt="logo" />
          <Nav className="flex-grow-1 justify-content-end">
            <Nav.Link
              as={NavLink}
              to={"/add"}
              className="badge bg-secondary text-wrap text-white"
            >
              Add User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
