import PropTypes from "prop-types";
import MyGallery from "@components/ReactImageGallery/MyGallery";
import useTranslations from "@hooks/useTranslations";
import { useLanguage } from "@contexts/LanguageContext";

const PortfolioModal = ({ element, modalId }) => {
  const t = useTranslations();
  const { lang } = useLanguage();
  const description = lang === "en" && element.description_en
    ? element.description_en
    : element.description;

  return (
    <div
      className="modal portfolio-modal-box fade"
      id={modalId}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Fermer la fenêtre">
              <i className="far fa-times" aria-hidden="true" />
            </button>
          </div>
          <div className="modal-body">
            <h6 className="blog-title">{element.nom}</h6>
            <div className="portfolio-modal-table">
              <div className="row">

                <div className="col-md-12">
                  <h3 className="portfolio-modal-table-text">
                    <i className="fa-solid fa-code" />
                    {t.portfolio.technologies} :{" "}
                    <div className="d-flex flex-wrap gap-2 pt-3">
                      {element.technologies.map((tech) => (
                        <div
                          key={`${element.nom}-${tech.nom}`}
                          className="d-flex flex-column gap-2 align-items-center"
                        >
                          <img src={tech.image} alt={tech.nom} height="50px" width="auto" />
                          <span style={{ fontSize: "0.7em" }}>{tech.nom}</span>
                        </div>
                      ))}
                    </div>
                  </h3>
                </div>

                <div className="col-md-12">
                  <h3 className="portfolio-modal-table-text">
                    {t.portfolio.description} :{" "}
                  </h3>
                  <p>{description}</p>
                </div>

              </div>
            </div>

            <div className="h1-modal-img">
              <MyGallery
                images={element.galerie.map((img) => ({
                  original: img,
                  thumbnail: img,
                  originalAlt: element.nom,
                  thumbnailAlt: element.nom,
                }))}
                thumbnailPosition="bottom"
                autoPlay={true}
                lazyLoad={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioModal.propTypes = {
  element: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    description_en: PropTypes.string,
    galerie: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        nom: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  modalId: PropTypes.string.isRequired,
};

export default PortfolioModal;
