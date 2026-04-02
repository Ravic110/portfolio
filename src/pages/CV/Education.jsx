import { EDUCATION } from "@data/education";
import useTranslations from "@hooks/useTranslations";
import { localize } from "@utils/i18n";
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
            const item = localize(element, lang);
            return (
              <div
                className="bostami-card-item bg-prink mb-20"
                key={`${element.parcours}-${element.anneeDebut}-${element.anneeFin}`}
              >
                <span className="card-subtitle">
                  {item.anneeDebut}-{item.anneeFin}
                </span>
                <h6 className="card-title">
                  {item.parcours} <span>- {item.etablissement},</span>
                </h6>
                <p className="card-text">{item.lieu}</p>
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
