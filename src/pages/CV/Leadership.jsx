import { LEADERSHIP } from "@data/leadership";
import useTranslations from "@hooks/useTranslations";
import { localize } from "@utils/i18n";
import { useLanguage } from "@contexts/LanguageContext";

const Leadership = () => {
  const t = useTranslations();
  const { lang } = useLanguage();

  return (
    <div className="col-12">
      <div className="bostami-section-title-wrap mb-20 mt-40">
        <h4 className="section-title">
          <i className="fa-light fa-users" />
          {t.cv.leadership}
        </h4>
      </div>
      <div className="bostami-card-wrap">
        {LEADERSHIP.map((item) => {
          const entry = localize(item, lang);
          return (
            <div
              className="bostami-card-item bg-prink mb-20"
              key={`${item.poste}-${item.debut}-${item.fin}`}
            >
              <span className="card-subtitle">
                {entry.debut} - {entry.fin}
              </span>
              <h6 className="card-title">
                {entry.poste} <span>- {item.etablissement}</span>
              </h6>
              {entry.details ? <p className="card-text mb-0">{entry.details}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
