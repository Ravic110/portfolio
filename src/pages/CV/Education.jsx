import { EDUCATION } from "@data/education";
import useTranslations from "@hooks/useTranslations";
import { useLanguage } from "@contexts/LanguageContext";

const Education = () => {
  const t = useTranslations();
  const { lang } = useLanguage();

  return (
    <>
      {/* education */}
      <div className="col-xl-6 col-lg-7">
        <div className="bostami-section-title-wrap mb-20">
          <h4 className="section-title">
            <i className="fa-light fa-school" />
            {t.cv.education}
          </h4>
        </div>
        <div className="bostami-card-wrap">
          {EDUCATION.map((element) => {
            const parcours = lang === "en" && element.parcours_en
              ? element.parcours_en
              : element.parcours;
            return (
              <div
                className="bostami-card-item bg-prink mb-20"
                key={`${element.parcours}-${element.anneeDebut}-${element.anneeFin}`}
              >
                <span className="card-subtitle">
                  {element.anneeDebut}-{element.anneeFin}
                </span>
                <h6 className="card-title">
                  {parcours} <span>- {element.etablissement},</span>
                </h6>
                <p className="card-text">{element.lieu}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* education */}
    </>
  );
};

export default Education;
