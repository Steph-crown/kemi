import { lazy } from "react";

// lazy imports
const Home = lazy(() => import("./../pages/Home/Home"));
const About = lazy(() => import("./../pages/About/About"));
const CaseStudies = lazy(() => import("./../pages/CaseStudies/CaseStudies"));
const Contact = lazy(() => import("./../pages/Contact/Contact"));
const DesignProcess = lazy(() =>
  import("./../pages/DesignProcess/DesignProcess")
);

// list app routes
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/case-studies",
    element: <CaseStudies />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/design-process",
    element: <DesignProcess />,
  },
];

export default routes;
