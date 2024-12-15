import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/Profile.png';
import Resume from '../assets/Sandra Babu.pdf'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
        <Header/>

      <div className="landing-page">
        <Container fluid className="vh-100 d-flex align-items-center">
          <Row className="w-100">
            {/* Left Section */}
            <Col md={6} className="d-flex flex-column justify-content-center align-items-start ps-5">
              <h1 className="display-4 fw-bold">
                I'm <span className="text-primary">Sandra Babu K</span>
              </h1>
              <h3 className="text-muted">MERN Stack Developer</h3>
              <p className="mt-4 text-secondary">
                Create dynamic, responsive user interfaces and scalable server-side solutions. My expertise lies in crafting seamless web experiences, optimizing performance, and delivering robust, modern applications tailored to client needs.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a
                  href={Resume}
                  download
                  className="btn btn-primary"
                >
                  Download CV
                </a>
                <a
                  href={Resume}
                  target="_blank"
                  className="btn btn-outline-primary"
                >
                  View CV
                </a>
              </div>
            </Col>
  
            {/* Right Section */}
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img
                src={profilePic}
                alt="Sandra Babu K"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '300px', border: '5px solid #fff' }}
              />
            </Col>
          </Row>
        </Container>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
  
      </div>
    </>
  );
};

export default Home;
