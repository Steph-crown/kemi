// Imports
import React from "react";
import { Components } from "../../components";
import { CaseStudiesWrapper } from "./styles";

// Destructure imports
const { Navbar, ContactSection } = Components;
const CaseStudies = () => {
  return (
    <CaseStudiesWrapper>
      <Navbar />
      <h1>CaseStudies</h1>
      <ContactSection />
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
