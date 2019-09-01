import React, { Component } from "react";
import aboutTeam from "img/about-team.jpg";
import about1 from "img/about-1.jpg";
import about2 from "img/about-2.jpg";
import about3 from "img/about-3.jpg";
import "../styles/layout/AboutStyles.scss";
// Testing
import AOS from "aos";
import "aos/dist/aos.css";

export class About extends Component {
  componentWillMount() {
    AOS.init();
  }
  render() {
    return (
      <section className="About">
        <div className="About__container container">
          <div className="About__info">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="About__team-img"
              src={aboutTeam}
              alt="team members"
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="About__description"
            >
              <h3 className="About__header">
                <span>#</span>TeamZapatito
              </h3>
              <p className="About__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="About__paragraph">
                Praesent elementum facilisis leo vel fringilla. Ac tincidunt
                vitae semper quis lectus nulla. Egestas pretium aenean pharetra
                magna ac placerat vestibulum lectus. Risus commodo viverra
                maecenas accumsan. Sit amet purus gravida quis blandit turpis
                cursus in. In est ante in nibh mauris cursus mattis molestie a.
                Pretium aenean pharetra magna ac placerat vestibulum lectus
                mauris. A scelerisque purus semper eget duis at tellus. Sed
                ullamcorper morbi tincidunt ornare massa eget egestas purus
                viverra.
              </p>
            </div>
          </div>
          <div className="About__showcase">
            <img
              data-aos="zoom-in-up"
              data-aos-delay="500"
              src={about1}
              alt="team member"
              className="About__single-img"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="700"
              src={about2}
              alt="team member"
              className="About__single-img"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="900"
              src={about3}
              alt="team member"
              className="About__single-img"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
