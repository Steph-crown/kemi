// Imports
import React from "react";
import { Components } from "../../components";
import { CaseStudiesWrapper } from "./styles";
import { CaseStudiesFragment } from "../../fragments/CaseStudies";

// Destructure imports
const { Navbar, ContactSection } = Components;
const { CaseStudiesBanner, Studies } = CaseStudiesFragment;

const CaseStudies = () => {
  return (
    <CaseStudiesWrapper>
      <Navbar darkMode={true} />
      <CaseStudiesBanner />
      <Studies />
      <ContactSection />
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
