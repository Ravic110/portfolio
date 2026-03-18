import { EXPERIENCE } from "@data/experience";
import useTranslations from "@hooks/useTranslations";
import { localize } from "@utils/i18n";
import { useLanguage } from "@contexts/LanguageContext";

const Experience = () => {
  const t = useTranslations();
  const { lang } = useLanguage();

  return (
    <>
      <div className="col-xl-6 col-lg-5">
        <div className="bostami-section-title-wrap mb-20">
          <h4 className="section-title">
            <i className="fa-light fa-briefcase" />
            {t.cv.experience}
          </h4>
        </div>

        {EXPERIENCE.map((element) => {
          const item = localize(element, lang);
          return (
            <div
              className="bostami-card-item bg-catkrill mb-20"
              key={`${element.poste}-${element.debut}-${element.fin}`}
            >
              <span className="card-subtitle">
                {item.debut} - {item.fin}
              </span>
              <h6 className="card-title">{item.poste}</h6>
              <p className="card-text">{item.etablissement}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
