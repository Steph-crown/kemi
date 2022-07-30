import React from "react";
import { Flex, StudiesWrapper } from "./styles";
import { Components } from "../../../components";
import listOfStudies from "./studies.database";
import Study from "./Study";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;
const { ArrowIcon } = svgs;

const Studies = () => {
  return (
    <StudiesWrapper>
      <section className="container__sub container__banner">
        <Flex>
          <div className="flex__content">
            {listOfStudies.map((proj) => (
              <Study {...proj} key={proj.title} />
            ))}
          </div>
          <div className="btn-group">
            <div>
              <h2>What I do</h2>
              <ArrowIcon />
            </div>
            <p>
              I create engaging user experience design for brands and startups
              by balancing the business needs and the user’s needs.
            </p>
          </div>
        </Flex>
      </section>
    </StudiesWrapper>
  );
};

export default Studies;
