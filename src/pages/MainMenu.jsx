import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@routes/navLinks";

const MainMenu = () => {
  const location = useLocation();

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
                      {link.label}
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
