import MySkills from "@pages/MySkills";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* about-page-start */}
      {/* main-menu-end */}
      <div className="bostami-page-content-wrap">
        {/* page title */}
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">à propos</h2>
            <p>
              Je suis un développeur web en constante évolution et toujours à
              l'écoute de nouvelles opportunités.
            </p>
            <p>
              Développant principalement en Javascript, je suis meilleur en
              Backend mais je me débrouille également en Frontend.
            </p>
            <div className="d-flex justify-content-end gap-3">
              <NavLink to="/resume">
                <button type="submit" value="Send" className="form-btn">
                  Mon CV <i className="fa-solid fa-chevron-right"></i>
                </button>
              </NavLink>

              <NavLink to="/portfolio">
                <button type="submit" value="Send" className="form-btn">
                  Mon Portfolio <i className="fa-solid fa-chevron-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <MySkills />
      </div>
      {/* about-page-end */}
    </>
  );
};

export default About;
