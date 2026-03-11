import { v4 as uuidv4 } from "uuid";
import { EXPERIENCE } from "../../utils/experience.utils";

const Experience = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-5">
        <div className="bostami-section-title-wrap mb-20">
          <h4 className="section-title">
            <i className="fa-light fa-briefcase" />
            expériences
          </h4>
        </div>

        {EXPERIENCE.map((element) => {
          return (
            <div
              className="bostami-card-item bg-catkrill  mb-20"
              key={uuidv4()}
            >
              <span className="card-subtitle">
                {element.debut} - {element.fin}
              </span>
              <h6 className="card-title">{element.poste}</h6>
              <p className="card-text">{element.etablissement}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
