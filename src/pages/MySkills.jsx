import { AUTRES_SKILLS } from "@utils/autresskills.utils";
import { BACK_END_SKILLS } from "@utils/backendskills.utils";
import { BDD_SKILLS } from "@utils/baseskills.utils";
import { FRAMEWORK } from "@utils/framework.utils";
import { FRONT_END_SKILLS } from "@utils/frontendskills.utils";
import { v4 as uuidv4 } from "uuid";

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
            {/* single item */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="bostami-what-do-item bg-prink">
                <div className="icon">
                  <i className="fa-light fa-swatchbook" />
                </div>
                <div className="text">
                  <h4 className="title">Frontend</h4>

                  <div className="d-flex flex-wrap gap-4">
                    {FRONT_END_SKILLS.map((element) => {
                      return (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={uuidv4()}
                        >
                          <img src={element.image} alt="" height={"50px"} width={"auto"} />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="bostami-what-do-item bg-catkrill">
                <div className="icon">
                  <i className="fa-regular fa-grid-2" />
                </div>
                <div className="text">
                  <h4 className="title">Backend</h4>

                  <div className="d-flex flex-wrap gap-4">
                    {BACK_END_SKILLS.map((element) => {
                      return (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={uuidv4()}
                        >
                          <img src={element.image} alt="" height={"50px"} width={"auto"} />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="bostami-what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="fa-regular fa-grid-2" />
                </div>
                <div className="text">
                  <h4 className="title">Framework</h4>

                  <div className="d-flex flex-wrap gap-4">
                    {FRAMEWORK.map((element) => {
                      return (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={uuidv4()}
                        >
                          <img src={element.image} alt="" height={"50px"} width={"auto"} />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* single item */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="bostami-what-do-item bg-catkrill">
                <div className="icon">
                  <i className="fa-regular fa-code" />
                </div>
                <div className="text">
                  <h4 className="title">Base de données</h4>

                  <div className="d-flex flex-wrap gap-4">
                    {BDD_SKILLS.map((element) => {
                      return (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={uuidv4()}
                        >
                          <img src={element.image} alt="" height={"50px"} width={"auto"} />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* single item */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="bostami-what-do-item bg-prink bg-blue">
                <div className="icon">
                  <i className="fa-regular fa-code" />
                </div>
                <div className="text">
                  <h4 className="title">Autres</h4>

                  <div className="d-flex flex-wrap gap-4">
                    {AUTRES_SKILLS.map((element) => {
                      return (
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          key={uuidv4()}
                        >
                          <img src={element.image} alt="" height={"50px"} width={"auto"} />
                          <span className="fw-bold" style={{ fontSize: "1em" }}>
                            {element.nom}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
