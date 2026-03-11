import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const activeClass = (e) => {
    let element = document.querySelector(".mobile-menu");
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  };
  const location = useLocation();

  return (
    <>
      {/* header-start */}
      <div className="bostami-header-area mb-30 z-index-5">
        <div className="container">
          <div className="bostami-header-wrap">
            <div className="row">
              {/* logo */}
              <div className="col-6">
                <div className="bostami-header-logo">
                  {/* <a className="site-logo" href="../index.html">
                    <img src="/assets/img/logo/logo-2.png" alt="" />
                  </a> */}
                </div>
              </div>
              {/* menu btn */}
              <div className="col-6">
                <div className="bostami-header-menu-btn text-right mb-0">
                  {/* <div className="dark-btn dark-btn-stored dark-btn-icon">
                    <i className="fa-light fa-moon" />
                    <i className="fa-light fa-sun" />
                  </div> */}
                  <div
                    className="menu-btn toggle_menu d-lg-none"
                    onClick={(e) => activeClass(e)}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className="mobile-menu-wrap">
            <div className="mobile-menu mobile_menu_3 mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  className="meanmenu-reveal"
                  style={{ right: 0, left: "auto", display: "inline" }}
                >
                  <span>
                    <span>
                      <span />
                    </span>
                  </span>
                </a>
                <nav className="mean-nav">
                  <ul style={{ display: "none" }}>
                    <li className={`${location.pathname.toLowerCase() === "/" || location.pathname.toLowerCase() === "/about" ? "active" : ""}`}>
                      <NavLink to="/about">
                        <div className="d-flex gap-2">
                          <span>
                            <i className="fa-light fa-address-card" />
                          </span>
                          à propos
                        </div>
                      </NavLink>
                    </li>
                    <li className={`${location.pathname.toLowerCase() === "/resume" ? "active" : ""}`}>
                      <NavLink to="/resume">
                        <div className="d-flex gap-2">
                          <span>
                            <i className="fa-light fa-file-user" />
                          </span>
                          Mon CV
                        </div>
                      </NavLink>
                    </li>
                    <li className={`${location.pathname.toLowerCase() === "/portfolio" ? "active" : ""}`}>
                      <NavLink to="/portfolio">
                        <div className="d-flex gap-2">
                          <span>
                            <i className="fa-light fa-briefcase" />
                          </span>
                          Mon portfolio
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header-end */}
    </>
  );
};

export default Header;
