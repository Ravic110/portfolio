import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MyGallery = ({ images, thumbnailPosition, autoPlay, lazyLoad }) => (
  <ImageGallery
    items={images}
    thumbnailPosition={thumbnailPosition}
    autoPlay={autoPlay}
    lazyLoad={lazyLoad}
  />
);

MyGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      originalAlt: PropTypes.string,
      thumbnailAlt: PropTypes.string,
    })
  ).isRequired,
  thumbnailPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  autoPlay: PropTypes.bool,
  lazyLoad: PropTypes.bool,
};

MyGallery.defaultProps = {
  thumbnailPosition: "bottom",
  autoPlay: false,
  lazyLoad: false,
};

export default MyGallery;
