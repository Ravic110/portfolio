import About from "@pages/About/About";
import Layout from "@pages/Layout";
import CV from "@pages/CV/CV";
import Portfolio from "@pages/Portfolio/Portfolio";

export const MAIN_ROUTES = {
  path: "/",
  element: <Layout/>,
  errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>Une erreur s&apos;est produite. Veuillez actualiser la page.</div>,
  children: [
    {
      index: true,
      element: <About/>,
      errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>Une erreur s&apos;est produite. Veuillez actualiser la page.</div>
    },
    {
      path: "about",
      element: <About/>,
      errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>Une erreur s&apos;est produite. Veuillez actualiser la page.</div>
    },
    {
      path: "resume",
      element: <CV/>,
      errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>Une erreur s&apos;est produite. Veuillez actualiser la page.</div>
    },
    {
      path: "portfolio",
      element: <Portfolio/>,
      errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>Une erreur s&apos;est produite. Veuillez actualiser la page.</div>
    },
  ],
};
