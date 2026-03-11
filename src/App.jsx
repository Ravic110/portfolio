import "./App.css";

// REACT-ROUTER-DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ROUTES
import { MAIN_ROUTES } from "./routes/main.routes";

const App = () => {
  const router = createBrowserRouter([MAIN_ROUTES]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
