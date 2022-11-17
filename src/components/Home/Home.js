import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <section className="home active section" id="Home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name">Muhammad Tehsin </span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing">Frontend Developer</span>
              </h3>
              <p>
                A professional Front-End Web Developer, responsibly creating
                website designs by using coding and markup languages such as
                HTML5, CSS3, Bootstrap, SASS, JavaScript & Reactjs.
              </p>
              <a href="\Muhammad Tehsin CV.pdf" className="btn hire-me">
                Download CV
              </a>
            </div>
            <div className="home-img padd-15">
              <img src="\images\hero.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
