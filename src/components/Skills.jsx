import React, { useEffect } from "react";
import AOS from "aos";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import jsImage from "../assets/javascript.jpg";
import reactImage from "../assets/react.jpg";
import nodeImage from "../assets/node.jpg";
import ExpressImg from "../assets/express.jpg";
import MongodbImg from "../assets/mongodb.jpg";
import AngularImg from "../assets/angular.jpg";
import tailwindImg from "../assets/tailwind.png";
import '../components/Header'
import '../components/skills.css'
import Header from "./Header";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  <>
  <Header/>
      <div className="container py-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row justify-content-center">
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
          >
            <img src={htmlImage} alt="HTML" className="img-fluid mb-2 rounded-img" />
            <h6>HTML</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={cssImage} alt="CSS" className="img-fluid mb-2 rounded-img" />
            <h6>CSS</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={jsImage} alt="JavaScript" className="img-fluid mb-2 rounded-img" />
            <h6>JavaScript</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={reactImage} alt="React" className="img-fluid mb-2 rounded-img" />
            <h6>React</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
              <img src={tailwindImg} alt="HTML" className="img-fluid mb-2 rounded-img" />
            <h6>Tailwind Css</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={nodeImage} alt="Node.js" className="img-fluid mb-2 rounded-img" />
            <h6>Node.js</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={ExpressImg} alt="Express" className="img-fluid mb-2 rounded-img" />
            <h6>Express</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={MongodbImg} alt="MongoDB" className="img-fluid mb-2 rounded-img" />
            <h6>MongoDB</h6>
          </div>
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img src={AngularImg} alt="Angular" className="img-fluid mb-2 rounded-img" />
            <h6>Angular</h6>
          </div>
        </div>
      </div>
  </>
  );
};

export default Skills;
