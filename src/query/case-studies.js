import { caseStudies } from "../data";

const getCaseStudyByName = (name) => {
  return caseStudies.find((caseStudy) => caseStudy.name === name);
};

const caseStudiesQueries = { getCaseStudyByName };

export default caseStudiesQueries;
