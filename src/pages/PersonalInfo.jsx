const PersonalInfo = () => {
  
  return (
    <>
      {/* parsonal-info-start */}
      <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="bostami-parsonal-info-area">
          <div className="bostami-parsonal-info-wrap">
            {/* img */}
            <div className="bostami-parsonal-info-img">
              <img
                src="/assets/img/parsonal-info/profile-new.jpg"
                alt="avatar"
                style={{ width: "250px", height: "250px" }}
              />
            </div>
            {/* name */}
            <h4 className="bostami-parsonal-info-name">
              <a href="home-3.html#">Victorien ANDRIANASOAVINA</a>
            </h4>
            <span className="bostami-parsonal-info-bio mb-15">
              Ingénieur Informatique & Data
            </span>
            {/* socail link */}
            <ul className="bostami-parsonal-info-social-link mb-30">
              
            </ul>
            {/* contact */}
            <div className="bostami-parsonal-info-contact mb-30">
              <div className="bostami-parsonal-info-contact-item phone">
                <div className="icon">
                  <i className="fa-solid fa-mobile-screen-button" />
                </div>
                <div className="text">
                  <span>Téléphone</span>
                  <p>+261 34 36 772 34</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item email">
                <div className="icon">
                  <i className="fa-regular fa-envelope-open-text" />
                </div>
                <div className="text">
                  <span>Email</span>
                  <p className="text-lowercase">andriavict@gmail.com</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item location">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="text">
                  <span>Adresse</span>
                  <p>IVF 167 ter Anosisoa, Ambohimanarina, Antananarivo</p>
                </div>
              </div>
            </div>
            {/* cv button */}
            <div className="bostami-parsonal-info-btn">
              <a className="btn-2 circle" href="/certificates/CV_victorien_ANDRIANASOAVINA.pdf">
                <span className="icon">
                  <i className="fa-regular fa-download" />
                </span>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* personal-info-end */}
    </>
  );
};

export default PersonalInfo;
