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
                src="/assets/img/parsonal-info/profil.webp"
                alt="avatar"
                style={{width:"250px", height:"250px"}}
              />
            </div>
            {/* name */}
            <h4 className="bostami-parsonal-info-name">
              <a href="home-3.html#">Faliana RANAIVOSEHENO</a>
            </h4>
            <span className="bostami-parsonal-info-bio mb-15">
              Développeur Web Fullstack
            </span>
            {/* socail link */}
            <ul className="bostami-parsonal-info-social-link mb-30">
              {/* <li>
                <a href="home-3.html#" className="facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="home-3.html#" className="twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li> */}
              {/* <li>
                <a href="home-3.html#" className="instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/faliana-ranaivoseheno-45488425b/" className="linkedin" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
            {/* contact */}
            <div className="bostami-parsonal-info-contact mb-30">
              <div className="bostami-parsonal-info-contact-item phone">
                <div className="icon">
                  <i className="fa-solid fa-mobile-screen-button" />
                </div>
                <div className="text">
                  <span>Téléphone</span>
                  <p>+261 34 60 264 95</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item email">
                <div className="icon">
                  <i className="fa-regular fa-envelope-open-text" />
                </div>
                <div className="text">
                  <span>Email</span>
                  <p className="text-lowercase">faliana23@gmail.com</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item location">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="text">
                  <span>Adresse</span>
                  <p>Alasora, Antananarivo, Madagascar</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item calendar">
                <div className="icon">
                  <i className="fa-light fa-calendar-days" />
                </div>
                <div className="text">
                  <span>Date de naissance</span>
                  <p>03 Juin 2001</p>
                </div>
              </div>
            </div>
            {/* cv button */}
            <div className="bostami-parsonal-info-btn">
              <a className="btn-2 circle" href="/CV RANAIVOSEHENO Faliana Nirindra v5.pdf">
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
