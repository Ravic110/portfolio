import { PORTFOLIO } from "@data/portfolio";
import useTranslations from "@hooks/useTranslations";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const t = useTranslations();

  return (
    <>
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">{t.portfolio.title}</h2>
          </div>
        </div>
        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="row">
            <div className="col-12">
              <div className="row d-flex">
                {PORTFOLIO.map((element, index) => (
                  <PortfolioCard
                    key={`${element.nom}-${index}`}
                    element={element}
                    modalId={`portfolio-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {PORTFOLIO.map((element, index) => (
        <PortfolioModal
          key={`${element.nom}-${index}-modal`}
          element={element}
          modalId={`portfolio-${index}`}
        />
      ))}
    </>
  );
};

export default Portfolio;
