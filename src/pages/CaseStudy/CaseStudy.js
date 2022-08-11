// Imports
import React from "react";
import { CaseStudyWrapper } from "./styles";
import { useParams } from "react-router";
import { Components } from "../../components";
import { caseStudiesQueries } from "../../query";

const { Navbar } = Components;
const { getCaseStudyByName } = caseStudiesQueries;

const CaseStudy = () => {
  const { name } = useParams();
  const study = getCaseStudyByName(name);

  const { title, color } = study;
  return (
    <CaseStudyWrapper>
      <Navbar darkMode={true} bgColor={color} />
      {study ? (
        <p>single case study {name}</p>
      ) : (
        <h3 className="not-found">Page not found</h3>
      )}
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
