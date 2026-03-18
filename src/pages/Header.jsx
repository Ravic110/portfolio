import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@routes/navLinks";
import { useLanguage } from "@contexts/LanguageContext";
import { translations } from "@utils/translations";

const Header = () => {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].nav;

  const activeClass = () => {
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
            <div className="row align-items-center">
              {/* logo */}
              <div className="col-6">
                <div className="bostami-header-logo" />
              </div>
              {/* menu btn */}
              <div className="col-6">
                <div className="bostami-header-menu-btn text-right mb-0 d-flex justify-content-end align-items-center gap-2">
                  <button
                    className="lang-toggle-btn"
                    onClick={toggleLanguage}
                    aria-label="Changer la langue"
                    title={lang === "fr" ? "Switch to English" : "Passer en Français"}
                  >
                    <i className="fa-light fa-globe" />
                    <span>{lang === "fr" ? "EN" : "FR"}</span>
                  </button>
                  <button
                    className="menu-btn toggle_menu d-lg-none"
                    aria-label="Ouvrir le menu"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={() => activeClass()}
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
                              {t[link.labelKey]}
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
