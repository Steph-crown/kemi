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

  return (
    <CaseStudyWrapper>
      <Navbar darkMode={true} />
      {study ? (
        <p>single case study {name}</p>
      ) : (
        <h3 className="not-found">Page not found</h3>
      )}
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
