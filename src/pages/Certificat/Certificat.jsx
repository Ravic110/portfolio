import { CERTIFICAT } from "@data/certificat";
import useTranslations from "@hooks/useTranslations";

const Certificat = () => {
  const t = useTranslations();

  return (
    <>
      <div className="section-wrapper">
        <div className="bostami-section-title-wrap mt-30 mb-20">
          <h3 className="section-title">{t.cv.certifications}</h3>
        </div>

        <div className="bostami-card-wrap">
          <div className="row d-flex">
            {CERTIFICAT.map((element, index) => (
              <div
                className="col-md-6"
                key={`${element.nom}-${element.dateObtention}`}
              >
                <div className={`bostami-card-item mb-20 ${index % 2 === 0 ? "bg-prink" : "bg-catkrill"}`}>
                  <span className="card-subtitle">{element.dateObtention}</span>
                  <h6 className="card-title">
                    {element.nom} <span>- {element.etablissement},</span>
                  </h6>
                  {element.lien ? (
                    <a
                      href={element.lien}
                      className="d-flex justify-content-end pt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="form-btn">
                        {t.certificat.view}{" "}
                        <i className="fa-solid fa-chevron-right" />
                      </button>
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificat;
