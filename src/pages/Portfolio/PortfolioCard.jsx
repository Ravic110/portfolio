import PropTypes from "prop-types";

const PortfolioCard = ({ element, modalId }) => (
  <div className="col-md-6">
    <div className="isotop-item mockup logo w-100">
      <div className="fillter-item bg-prink">
        <button
          className="img portfolio-btn portfolio-btn--block"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
          aria-label={`Voir ${element.nom}`}
        >
          <img src={element.image} alt={element.nom} />
        </button>
        <h6 className="item-title">
          <button
            className="portfolio-btn"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
            aria-label={`Voir les détails du projet : ${element.nom}`}
          >
            {element.nom}
          </button>
        </h6>
      </div>
    </div>
  </div>
);

PortfolioCard.propTypes = {
  element: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  modalId: PropTypes.string.isRequired,
};

export default PortfolioCard;
