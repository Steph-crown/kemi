// Imports
import React from "react";
import { Components } from "../../components";
import { CaseStudiesWrapper } from "./styles";

// Destructure imports
const { Navbar } = Components;
const CaseStudies = () => {
  return (
    <CaseStudiesWrapper>
      <Navbar />
      <h1>CaseStudies</h1>
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
