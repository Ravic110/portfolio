import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@routes/navLinks";

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
                  <button
                    className="menu-btn toggle_menu d-lg-none"
                    aria-label="Ouvrir le menu"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={(e) => activeClass(e)}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className="mobile-menu-wrap">
            <div
              id="mobile-menu"
              className="mobile-menu mobile_menu_3 mean-container"
            >
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
                    {NAV_LINKS.map((link) => {
                      const pathname = location.pathname.toLowerCase();
                      const isRootAbout =
                        link.path === "/about" && pathname === "/";
                      const isActive =
                        link.path.toLowerCase() === pathname || isRootAbout;

                      return (
                        <li
                          key={link.path}
                          className={isActive ? "active" : ""}
                        >
                          <NavLink to={link.path}>
                            <div className="d-flex gap-2">
                              <span>
                                <i className={link.icon} />
                              </span>
                              {link.label}
                            </div>
                          </NavLink>
                        </li>
                      );
                    })}
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
