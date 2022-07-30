// Imports
import React from "react";
import { Components } from "../../components";
import { CaseStudiesWrapper } from "./styles";
import { CaseStudiesFragment } from "../../fragments/CaseStudies";

// Destructure imports
const { Navbar, ContactSection } = Components;
const { CaseStudiesBanner } = CaseStudiesFragment;

const CaseStudies = () => {
  return (
    <CaseStudiesWrapper>
      <Navbar darkMode={true} />
      <CaseStudiesBanner />
      <ContactSection />
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
