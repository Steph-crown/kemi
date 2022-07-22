import React from "react";
import { Flex, ProjectsWrapper, ProjectsHeaderText } from "./styles";
import { svgs } from "../../../assets/svgs";
import { Components } from "../../../components";

// Destructure imports
const { PenIcon } = svgs;
const {
  Buttons: { ArrowButton },
} = Components;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <section className="container__sub container__banner">
        <ProjectsHeaderText>
          <span>
            MY PAST <br />
            PROJECTS
          </span>
        </ProjectsHeaderText>
        <Flex>
          <div className="flex__content">
            <small>ABOUT ME</small>
            <p>
              I am a Product and UX Designer! I work at the intersection of
              curiosity, reasoning and imagination, which guide me to uncover
              insights, (re)frame problems and craft meaningful, future-oriented
              solutions. <br /> I am passionate about providing solutions to
              users by building accessible products.
            </p>
          </div>
          <div className="btn-group">
            <ArrowButton themeColor={"var(--blue)"} smFull={true} width="272px">
              ALL CASE STUDIES
            </ArrowButton>
          </div>
        </Flex>
      </section>
    </ProjectsWrapper>
  );
};

export default Projects;
