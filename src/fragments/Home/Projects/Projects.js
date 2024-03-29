import React from "react";
import { Flex, ProjectsWrapper, ProjectsHeaderText } from "./styles";
import { Components } from "../../../components";
import listOfProjects from "./project.database";
import Project from "./Project";
import { Link } from "react-router-dom";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <section className="container__sub container__banner">
        <ProjectsHeaderText>
          <span>MY PAST PROJECTS</span>
        </ProjectsHeaderText>
        <Flex>
          <div className="flex__content">
            {listOfProjects.map((proj) => (
              <Project {...proj} key={proj.title} />
            ))}
          </div>
          <div className="btn-group">
            <Link to="/case-studies">
              <ArrowButton
                themeColor={"var(--blue)"}
                smFull={true}
                width="272px"
              >
                ALL CASE STUDIES
              </ArrowButton>
            </Link>
          </div>
        </Flex>
      </section>
    </ProjectsWrapper>
  );
};

export default Projects;
