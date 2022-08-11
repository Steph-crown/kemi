// Imports
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Components } from "./../components";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

// Destructure imports
const { Loader } = Components;

// Configure app routes
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                element={route.element}
                key={route.path}
                path={route.path}
              />
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
