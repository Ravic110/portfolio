import MySkills from "@pages/MySkills";
import { NavLink } from "react-router-dom";
import useTranslations from "@hooks/useTranslations";

const About = () => {
  const t = useTranslations();

  return (
    <>
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">{t.about.title}</h2>
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <div className="d-flex justify-content-end gap-3">
              <NavLink to="/resume">
                <button type="submit" className="form-btn">
                  {t.about.cvBtn} <i className="fa-solid fa-chevron-right" />
                </button>
              </NavLink>
              <NavLink to="/portfolio">
                <button type="submit" className="form-btn">
                  {t.about.portfolioBtn} <i className="fa-solid fa-chevron-right" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <MySkills />
      </div>
    </>
  );
};

export default About;
