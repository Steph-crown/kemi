// Imports
import React from "react";
import { Components } from "../../components";
import { CaseStudiesWrapper } from "./styles";
import { CaseStudiesFragment } from "../../fragments/CaseStudies";
import { useParams } from "react-router";
import CaseStudy from "../CaseStudy/CaseStudy";

// Destructure imports
const { Navbar, ContactSection } = Components;
const { CaseStudiesBanner, Studies } = CaseStudiesFragment;

const CaseStudies = () => {
  const { name } = useParams();
  return name ? (
    <CaseStudy />
  ) : (
    <CaseStudiesWrapper>
      <Navbar darkMode={true} />
      <CaseStudiesBanner />
      <Studies />
      <ContactSection />
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
