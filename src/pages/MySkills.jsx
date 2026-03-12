import { AUTRES_SKILLS } from "@utils/autresskills.utils";
import { BACK_END_SKILLS } from "@utils/backendskills.utils";
import { BDD_SKILLS } from "@utils/baseskills.utils";
import { FRAMEWORK } from "@utils/framework.utils";
import { FRONT_END_SKILLS } from "@utils/frontendskills.utils";

const SKILL_SECTIONS = [
  {
    title: "Frontend",
    icon: "fa-light fa-swatchbook",
    bgClass: "bg-prink",
    items: FRONT_END_SKILLS,
  },
  {
    title: "Backend",
    icon: "fa-regular fa-grid-2",
    bgClass: "bg-catkrill",
    items: BACK_END_SKILLS,
  },
  {
    title: "Framework",
    icon: "fa-regular fa-grid-2",
    bgClass: "bg-prink bg-blue",
    items: FRAMEWORK,
  },
  {
    title: "Base de données",
    icon: "fa-regular fa-code",
    bgClass: "bg-catkrill",
    items: BDD_SKILLS,
  },
  {
    title: "Autres",
    icon: "fa-regular fa-code",
    bgClass: "bg-prink bg-blue",
    items: AUTRES_SKILLS,
  },
];

const MySkills = (props) => {
  const { noPadding } = props;

  return (
    <>
      {/* what-do */}
      <div className={`section-wrapper ${noPadding ? "" : "pl-60 pr-60"}`}>
        <div className="bostami-section-title-wrap mt-30 mb-20">
          <h3 className="section-title">Mes Compétences</h3>
        </div>
        <div className="bostami-what-do-wrap mb-30">
          <div className="row">
            {SKILL_SECTIONS.map((section) => (
              <div className="col-xxl-12 col-xl-12 col-lg-12" key={section.title}>
                <div className={`bostami-what-do-item ${section.bgClass}`}>
                  <div className="icon">
                    <i className={section.icon} />
                  </div>
                  <div className="text">
                    <h4 className="title">{section.title}</h4>

                    <div className="d-flex flex-wrap gap-4">
                      {section.items.map((element) => (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={element.nom}
                        >
                          <img
                            src={element.image}
                            alt={element.nom}
                            height={"50px"}
                            width={"auto"}
                          />
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

export default MySkills;
