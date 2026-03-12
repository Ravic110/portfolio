import { LEADERSHIP } from "@utils/leadership.utils";

const Leadership = () => {
  return (
    <div className="col-12">
      <div className="bostami-section-title-wrap mb-20 mt-40">
        <h4 className="section-title">
          <i className="fa-light fa-users" />
          Expériences associatives & leadership
        </h4>
      </div>
      <div className="bostami-card-wrap">
        {LEADERSHIP.map((item) => (
          <div
            className="bostami-card-item bg-prink mb-20"
            key={`${item.poste}-${item.debut}-${item.fin}`}
          >
            <span className="card-subtitle">
              {item.debut} - {item.fin}
            </span>
            <h6 className="card-title">
              {item.poste} <span>- {item.etablissement}</span>
            </h6>
            {item.details ? <p className="card-text mb-0">{item.details}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
