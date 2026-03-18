import "./App.css";

// REACT-ROUTER-DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ROUTES
import { MAIN_ROUTES } from "./routes/main.routes";

// LANGUAGE
import { LanguageProvider } from "@contexts/LanguageContext";

const App = () => {
  const router = createBrowserRouter([MAIN_ROUTES]);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
