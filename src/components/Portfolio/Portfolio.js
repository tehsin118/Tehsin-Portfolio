import React from "react";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div>
      <div classNameName="main-content">
        <section className="portfolio active section" id="Portfolio">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="row">
              <div className="portfolio-heading padd-15">
                <h2>My Last Projects :</h2>
              </div>
            </div>
            <div className="row">
              {/* <!-- ======= Portfolio Items Start --> */}
              <div className="portfolio-item padd-15 ">
                <div className="portfolio-item-inner shadow-dark ">
                  <div className="portfolio-img ">
                    <img src="\images\pandamax.PNG" alt="" />

                    <div className="live-source">
                      <a
                        href="https://panda-max-react.vercel.app/"
                        className="live-demo"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                      <a
                        href=" https://github.com/tehsin118/PandaMax-react"
                        className="source-code"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ======= Portfolio Items End --> */}

              {/* <!-- ======= Portfolio Items Start --> */}
              <div className="portfolio-item padd-15 ">
                <div className="portfolio-item-inner shadow-dark ">
                  <div className="portfolio-img ">
                    <img src="\images\stockFotage.JPG" alt="" />

                    <div className="live-source">
                      <a
                        href="https://get-stock-footage.netlify.app/"
                        className="live-demo"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/tehsin118/Stock-Footage-Freelance-Project"
                        className="source-code"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ======= Portfolio Items End --> */}

              {/* <!-- ======= Portfolio Items Start --> */}
              <div className="portfolio-item padd-15 ">
                <div className="portfolio-item-inner shadow-dark ">
                  <div className="portfolio-img ">
                    <img src="\images\metamuze.JPG" alt="" />

                    <div className="live-source">
                      <a
                        href="https://vercel.com/tehsin118/metamuze"
                        className="live-demo"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/tehsin118/metamuze"
                        className="source-code"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ======= Portfolio Items End --> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
