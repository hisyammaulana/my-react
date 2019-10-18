import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navabar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    {/* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Testing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/event">Event</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/profil">Profil</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Testing</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/event">Event</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/profil">Profil</Nav.Link></Nav.Item>
      </Nav>
    </Navbar >
  </Styles >
)

