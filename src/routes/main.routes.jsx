import About from "@pages/About/About";
import Layout from "@pages/Layout";
import CV from "../pages/CV/CV";
import Portfolio from "../pages/Portfolio/Portfolio";

export const MAIN_ROUTES = {
  path: "/",
  element: <Layout/>,
  errorElement: <></>,
  children: [
    {
      path: "",
      element: <About/>,
      errorElement: <></>
    },
    {
      path: "about",
      element: <About/>,
      errorElement: <></>
    },
    {
      path: "resume",
      element: <CV/>,
      errorElement: <></>
    },
    {
      path: "portfolio",
      element: <Portfolio/>,
      errorElement: <></>
    },
  ],
};
