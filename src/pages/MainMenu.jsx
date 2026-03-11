import { NavLink, useLocation } from "react-router-dom";

const MainMenu = () => {
  const location = useLocation();

  return (
    <>
      {/* main-menu-start */}
      <div className="text-right">
        <div className="bostami-main-menu-wrap">
          <nav className="bastami-main-menu main_menu_3">
            <ul>
              <li
                className={`${
                  location.pathname.toLowerCase() === "/" ||
                  location.pathname.toLowerCase() === "/about"
                    ? "active"
                    : ""
                }`}
              >
                <NavLink to="/about">
                  <span>
                    <i className="fa-light fa-address-card" />
                  </span>
                  à propos
                </NavLink>
              </li>
              <li
                className={`${
                  location.pathname.toLowerCase() === "/resume" ? "active" : ""
                }`}
              >
                <NavLink to="/resume">
                  <span>
                    <i className="fa-light fa-file-user" />
                  </span>
                  Mon CV
                </NavLink>
              </li>
              <li className={`${
                  location.pathname.toLowerCase() === "/portfolio" ? "active" : ""
                }`}>
                <NavLink to="/portfolio">
                  <span>
                    <i className="fa-light fa-briefcase" />
                  </span>
                  Mon Portfolio
                </NavLink>
              </li>
              


            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
