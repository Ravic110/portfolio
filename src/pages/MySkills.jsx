import PropTypes from "prop-types";
import { AUTRES_SKILLS } from "@data/autresskills";
import { BACK_END_SKILLS } from "@data/backendskills";
import { BDD_SKILLS } from "@data/baseskills";
import { FRAMEWORK } from "@data/framework";
import { FRONT_END_SKILLS } from "@data/frontendskills";
import useTranslations from "@hooks/useTranslations";

const SKILL_SECTIONS = [
  { titleKey: "frontend", icon: "fa-light fa-swatchbook",  bgClass: "bg-prink",          items: FRONT_END_SKILLS },
  { titleKey: "backend",  icon: "fa-regular fa-grid-2",    bgClass: "bg-catkrill",        items: BACK_END_SKILLS },
  { titleKey: "framework",icon: "fa-regular fa-grid-2",    bgClass: "bg-prink bg-blue",   items: FRAMEWORK },
  { titleKey: "database", icon: "fa-regular fa-code",      bgClass: "bg-catkrill",        items: BDD_SKILLS },
  { titleKey: "others",   icon: "fa-regular fa-code",      bgClass: "bg-prink bg-blue",   items: AUTRES_SKILLS },
];

const MySkills = ({ noPadding }) => {
  const t = useTranslations();

  return (
    <>
      <div className={`section-wrapper ${noPadding ? "" : "pl-60 pr-60"}`}>
        <div className="bostami-section-title-wrap mt-30 mb-20">
          <h3 className="section-title">{t.skills.title}</h3>
        </div>
        <div className="bostami-what-do-wrap mb-30">
          <div className="row">
            {SKILL_SECTIONS.map((section) => (
              <div className="col-xxl-12 col-xl-12 col-lg-12" key={section.titleKey}>
                <div className={`bostami-what-do-item ${section.bgClass}`}>
                  <div className="icon">
                    <i className={section.icon} />
                  </div>
                  <div className="text">
                    <h4 className="title">{t.skills.categories[section.titleKey]}</h4>
                    <div className="d-flex flex-wrap gap-4">
                      {section.items.map((element) => (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={element.nom}
                        >
                          <img src={element.image} alt={element.nom} height="50px" width="auto" />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

MySkills.propTypes = {
  noPadding: PropTypes.bool,
};

MySkills.defaultProps = {
  noPadding: false,
};

export default MySkills;
