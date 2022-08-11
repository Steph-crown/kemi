// Imports
import React from "react";
import { CaseStudyWrapper } from "./styles";
import { useParams } from "react-router";
import { Components } from "../../components";
import { caseStudiesQueries } from "../../query";
import { CaseStudyFragment } from "../../fragments/CaseStudy";

const { Navbar } = Components;
const { getCaseStudyByName } = caseStudiesQueries;
const { CaseStudyBanner, Summary } = CaseStudyFragment;

const CaseStudy = () => {
  const { name } = useParams();
  const study = getCaseStudyByName(name);

  const { title, color, shortDesc, bannerImage, summary, tags } = study;
  return (
    <CaseStudyWrapper bgColor={color}>
      <Navbar darkMode={true} bgColor={color} />

      {study ? (
        <main>
          <CaseStudyBanner {...{ title, shortDesc, bannerImage }} />
          <Summary {...{ summary, tags }} />
        </main>
      ) : (
        <h3 className="not-found">Page not found</h3>
      )}
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
