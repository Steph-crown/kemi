// Imports
import React from "react";
import { Components } from "../../components";
import { PageNotFoundWrapper } from "./styles";
import { useParams } from "react-router";
import CaseStudy from "../CaseStudy/CaseStudy";

// Destructure imports
const { Navbar } = Components;

const PageNotFound = () => {
  const { name } = useParams();
  return name ? (
    <CaseStudy />
  ) : (
    <PageNotFoundWrapper>
      <Navbar darkMode={true} />
      <h3>Page not found</h3>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
