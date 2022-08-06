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
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img
                      src="https://img.youtube.com/vi/cWk5EKVxrgo/sddefault.jpg"
                      alt=""
                    />
                    <div class="flip-card-back">
                      <a href="#" className="view-code">
                        View Code
                      </a>
                      <a href="#" className="live-demo">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ======= Portfolio Items End --> */}

              {/* <!-- ======= Portfolio Items Start --> */}
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg "
                      alt=""
                      style={{ objectPosition: "cover" }}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- ======= Portfolio Items End --> */}

              {/* <!-- ======= Portfolio Items Start --> */}
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg "
                      alt=""
                      style={{ objectPosition: "cover" }}
                    />
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
