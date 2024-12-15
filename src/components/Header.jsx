import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaUser, FaServicestack, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '../components/header.css'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom fixed-top shadow-lg">
        <Container>
          <Navbar.Brand  className="brand-logo">
            <span className="brand-highlight">My</span>Port<span className="text-danger">folio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-4">
              <Nav.Link href="/" className="nav-link-custom">
                <FaHome className="me-1" /> Home
              </Nav.Link>
              <Nav.Link href="/About" className="nav-link-custom">
                <FaUser className="me-1" /> About
              </Nav.Link>
              <Nav.Link href="/Skills" className="nav-link-custom">
                <FaServicestack className="me-1" /> Skills
              </Nav.Link>
              <Nav.Link href="/Projects" className="nav-link-custom">
                <FaProjectDiagram className="me-1" /> Projects
              </Nav.Link>
              <Nav.Link href="/Contact" className="nav-link-custom">
                <FaEnvelope className="me-1" /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
