import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "../../../src/App.css";

function About() {
  return (
    <div>
      <div className="main-content">
        <section className="about active section" id="About">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>

            <div className="row">
              <div className="about-content padd-15">
                {/* <!--About Content Section  --> */}
                <div className="row">
                  <div className="about-text padd-15 className= mw-50">
                    <h3>
                      I'm Muhammad Tehsin and <span> Web Developer</span>
                    </h3>
                    <p>
                      A professional Front-End Web Developer, responsibly
                      creating website designs by using coding and markup
                      languages such as HTML5, CSS3, Bootstrap, SASS JavaScript
                      & Reactjs. Now working as a freelancer, I am applying my
                      expertise in designing user interactions on the web
                      application.
                    </p>
                  </div>
                </div>
                {/* <!--About Personal Info and Skills Section  --> */}
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>
                          Birthday : <span>18 oct 2000</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Age : <span>22</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Website :
                          <span>
                            <a
                              href="https://github.com/tehsin118"
                              target="_blank"
                            >
                              https://github.com/tehsin118
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email : <span>tehsin118@gmail.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Degree : <span>BSCS</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Phone : <span>+92 302 8760 618</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          City : <span>Islamabad</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Remote Work : <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <Link to="/contactPage" className="btn hire-me">
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* <!--About Skills Section  --> */}
                  <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>HTML5</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "86%" }}
                          ></div>
                          <div className="skill-percent">86%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>CSS3</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "70%" }}>
                            {" "}
                          </div>
                          <div className="skill-percent">70%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>Bootstrap</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "65%" }}
                          ></div>
                          <div className="skill-percent">65%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>JavaScript</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "50%" }}
                          ></div>
                          <div className="skill-percent">50%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>React.js</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "40%" }}
                          ></div>
                          <div className="skill-percent">40%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--About Educational Info Section  --> */}
                <div className="row">
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {/* <!-- TimeLine Items --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2013 - 2015
                            </h3>
                            <h4 className="timeline-title">Matriculation</h4>
                            <p className="timeline-text">
                              City Public High School Fatehpur Layyah
                            </p>
                          </div>

                          {/* <!-- TimeLine Items --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2016 - 2018
                            </h3>
                            <h4 className="timeline-title">
                              Intermediate In Computer science
                            </h4>
                            <p className="timeline-text">
                              Jinnah College of Science & Technology Fatehpur
                              Layyah
                            </p>
                          </div>

                          {/* <!-- TimeLine Items --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2018 - 2022
                            </h3>
                            <h4 className="timeline-title">
                              Bachelor in Computer science
                            </h4>
                            <p className="timeline-text">
                              Arid University Rawalpindi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
