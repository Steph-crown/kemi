import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Configure app routes
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route element={route.element} key={route.path} path={route.path} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
