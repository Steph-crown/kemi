// Imports
import React from "react";
import { CaseStudyWrapper } from "./styles";
import { useParams } from "react-router";
import { Components } from "../../components";

const { Navbar } = Components;

const CaseStudy = () => {
  const { name } = useParams();
  console.log("name", name);
  return (
    <CaseStudyWrapper>
      <Navbar darkMode={true} />
      single case study {name}
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
