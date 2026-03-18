import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@routes/navLinks";
import { useLanguage } from "@contexts/LanguageContext";
import { translations } from "@utils/translations";

const MainMenu = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  return (
    <>
      {/* main-menu-start */}
      <div className="text-right">
        <div className="bostami-main-menu-wrap">
          <nav className="bastami-main-menu main_menu_3">
            <ul>
              {NAV_LINKS.map((link) => {
                const pathname = location.pathname.toLowerCase();
                const isRootAbout = link.path === "/about" && pathname === "/";
                const isActive =
                  link.path.toLowerCase() === pathname || isRootAbout;

                return (
                  <li key={link.path} className={isActive ? "active" : ""}>
                    <NavLink to={link.path}>
                      <span>
                        <i className={link.icon} />
                      </span>
                      {t[link.labelKey]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
