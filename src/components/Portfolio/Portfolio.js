import { Icon } from "@iconify/react";
import React from "react";
import "./Portfolio.css";
function Portfolio() {
  const projects = [
    {
      id: 0,
      thumbnail: "images/supervet.png",
      link: "https://super-vet.netlify.app/",
      name: "Supervet",
    },
    {
      id: 1,
      thumbnail: "images/lighthouseStake.png",
      link: "https://lighthousestaking.netlify.app/",
      name: "Light House Staking",
    },
    {
      id: 2,
      thumbnail: "images/lighthouse.png",
      link: "https://lighthousekeepr.netlify.app/",
      name: "Lighthouse Keeper",
    },
    {
      id: 3,
      thumbnail: "images/deflymarket.png",
      link: "https://deflyball-marketplace.netlify.app/",
      name: "DeflyBall Marketplace",
    },
    {
      id: 4,
      thumbnail: "/images/Blocknote.png",
      link: "https://intequitylabs-staking.netlify.app/",
      name: "Blocknotes Staking",
    },
    {
      id: 5,
      thumbnail: "images/house.png",
      link: "https://house-of-dragonz.netlify.app/",
      name: "Houe of Dragonz ",
    },
    {
      id: 6,
      thumbnail: "images/Block.png",
      link: "https://intequitylabs.netlify.app/",
      name: "Blocknotes ",
    },
  ];

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

              {projects.map((item) => {
                return (
                  <div className="portfolio-item padd-15 ">
                    <div className="portfolio-item-inner shadow-dark ">
                      <div className="portfolio-img ">
                        {/* <img src="\images\pandamax.PNG" alt="" /> */}
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="layer">
                        <div className="mid">
                          <a href={item.link} target="ghj">
                            <Icon
                              icon="ic:outline-open-in-new"
                              color="#ededed"
                              width="48"
                              height="48"
                            />
                          </a>

                          <h2>{item.name}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <!-- ======= Portfolio Items End --> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
