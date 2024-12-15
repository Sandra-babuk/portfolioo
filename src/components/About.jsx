import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4">Why Choose Me?</h2>
            <p className="text-muted mb-5">
              I am a dedicated and passionate developer with a strong commitment to delivering high-quality solutions. Here are a few reasons to consider me for your project:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="card custom-card">
              <div className="card-body">
                
                <h5 className="card-title">Innovative Solutions</h5>
                <p className="card-text text-muted">
                  I bring creative and efficient solutions to complex problems, ensuring your project stands out.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card custom-card">
              <div className="card-body">
                
                <h5 className="card-title">Technical Expertise</h5>
                <p className="card-text text-muted">
                  With hands-on experience in modern technologies, I deliver robust and scalable applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card custom-card">
              <div className="card-body">
               
                <h5 className="card-title">Client-Focused Approach</h5>
                <p className="card-text text-muted">
                  I prioritize understanding your needs to deliver tailor-made solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
