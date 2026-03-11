import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LoadingPage from "./LoadingPage";
import MainMenu from "./MainMenu";
import PersonalInfo from "./PersonalInfo";

const Layout = () => {
  return (
    <>
      <div
        className="page-wrapper home-3"
        style={{ backgroundImage: "url('/assets/img/bg/page-bg-1.webp')" }}
        // data-background="/assets/img/bg/page-bg-1.jpg"
      >
        <LoadingPage/>
        <Header />

        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <div className="col-xxl-8 col-xl-8 col-lg-8">

              {/* main-menu-start */}
              <MainMenu />

              <Outlet></Outlet>
              <Footer/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
