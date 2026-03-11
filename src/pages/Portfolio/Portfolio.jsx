import MyGallery from "@components/ReactImageGallery/MyGallery";
import { v4 as uuidv4 } from "uuid";
import { PORTFOLIO } from "../../utils/portfolio.utils";

const Portfolio = () => {
  return (
    <>
      <div className="bostami-page-content-wrap">
        {/* page title */}
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">Mon Portfolio</h2>
          </div>
        </div>
        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="row">
            <div className="col-12">
              <div className="row d-flex">
                {PORTFOLIO.map((element, index) => {
                  return (
                    <div className="col-md-6" key={uuidv4()}>
                      <div className=" isotop-item mockup logo w-100">
                        <div className="fillter-item bg-prink">
                          <a
                            className="img"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target={`#portfolio-${index}`}
                          >
                            <img src={element.image} alt="" />
                          </a>
                          <h6 className="item-title">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target={`#portfolio-${index}`}
                            >
                              {element.nom}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {PORTFOLIO.map((element, index) => {
        return (
          <div
            className="modal portfolio-modal-box fade"
            id={`portfolio-${index}`}
            tabIndex={-1}
            role="dialog"
            key={uuidv4()}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    <i className="far fa-times" />
                  </button>
                </div>
                <div className="modal-body">
                  <h6 className="blog-title">{element.nom}</h6>
                  <div className="portfolio-modal-table">
                    <div className="row">

                      <div className="col-md-12">
                        <h3 className="portfolio-modal-table-text">
                          <i className="fa-solid fa-code" />
                          Technologies :{" "}
                          <div className="d-flex flex-wrap gap-2 pt-3">
                            {element.technologies.map((tech, index) => {
                              return (
                                <div
                                  key={uuidv4()}
                                  className="d-flex flex-column gap-2 align-items-center"
                                >
                                  <img src={tech.image} alt="" height={"50px"} width={"auto"}/>
                                  <span style={{ fontSize: "0.7em" }}>{tech.nom}</span>
                                </div>
                              );
                            })}
                          </div>
                        </h3>
                      </div>

                      <div className="col-md-12">
                        <h3 className="portfolio-modal-table-text">
                          Description :{" "}
                        </h3>
                        <p>{element.description}</p>
                      </div>

                    </div>
                  </div>

                  <div className="h1-modal-img">
                  <MyGallery
                    images={element.galerie.map((img) => {
                      return {
                        original: img,
                        thumbnail: img,
                      };
                    })}
                    thumbnailPosition={"bottom"}
                    autoPlay={true}
                    lazyLoad={true}
                  />
                    {/* <img src="assets/img/work/portfolio-modal-img-1.jpg" alt /> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Portfolio;
