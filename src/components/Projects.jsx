import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import quiz from '../assets/quiz.jpg';
import travel from '../assets/travel.jpg';
import '../components/project.css';
import Header from '../components/Header';


const Projects = () => {
  return (
  <>
  <Header/>
      <div className="container py-5">
        <h2 className="text-center mb-5" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '600', color:' rgb(129, 153, 174)' }}>
          My Projects
        </h2>
        <Row className="d-flex justify-content-evenly">
          {/* Project 1 */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="project-card shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={quiz} className="rounded-top" style={{ transition: 'transform 0.3s ease' }} />
              <Card.Body style={{ padding: '1.5rem' }}>
                <Card.Title className="font-weight-bold text-center" style={{ fontSize: '1.5rem' }}>
                  Quiz App
                </Card.Title>
                <Card.Text className='text-dark'>A simple Quiz App using React and Redux backend used json server</Card.Text>
              </Card.Body>
            </Card>
          </Col>
  
          {/* Project 2 */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="project-card shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={travel} className="rounded-top" style={{ transition: 'transform 0.3s ease' }} />
              <Card.Body style={{ padding: '1.5rem' }}>
                <Card.Title className="font-weight-bold text-center" style={{ fontSize: '1.5rem' }}>
                  Travel Story App
                </Card.Title>
                <Card.Text className='text-dark'>A personal Travel Story App to notes your travel experience & memories.Frontend used React and backend used Mngodb,nodejs,express </Card.Text>
  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
  </>
 
  );
};

export default Projects;
