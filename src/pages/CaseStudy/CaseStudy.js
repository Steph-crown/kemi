// Imports
import React from "react";
import { CaseStudyWrapper } from "./styles";
import { useParams } from "react-router";
import { Components } from "../../components";
import { caseStudiesQueries } from "../../query";
import { CaseStudyFragment } from "../../fragments/CaseStudy";
import StudyDetail from "../../fragments/CaseStudy/StudyDetail/StudyDetail";

const { Navbar } = Components;
const { getCaseStudyByName } = caseStudiesQueries;
const { CaseStudyBanner, Summary, Goal, ImageSection } = CaseStudyFragment;

const CaseStudy = () => {
  const { name } = useParams();
  const study = getCaseStudyByName(name);

  const {
    name: studyName,
    title,
    color,
    shortDesc,
    bannerImage,
    summary,
    tags,
    goal,
    role,
    goalBg,
    comingSoonBg,
    comingSoonColor,
    caseStudiesImages,
    type,
  } = study;
  return (
    <CaseStudyWrapper bgColor={color}>
      <Navbar darkMode={true} bgColor={color} />

      {study ? (
        <main>
          <CaseStudyBanner {...{ title, shortDesc, bannerImage }} />
          <Summary {...{ summary, tags }} />
          <Goal {...{ goal, role, goalBg }} />
          <StudyDetail {...{ comingSoonBg, comingSoonColor }} />
          <ImageSection {...{ caseStudiesImages, name: studyName, type }} />
        </main>
      ) : (
        <h3 className="not-found">Page not found</h3>
      )}
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
