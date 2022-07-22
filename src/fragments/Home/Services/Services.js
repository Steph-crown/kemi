import React from "react";
import { Flex, ServicesWrapper, ServicesHeaderText } from "./styles";
import { Components } from "../../../components";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;

const Services = () => {
  return (
    <ServicesWrapper>
      <section className="container__sub container__banner">
        <Flex>
          <div className="flex__content">ksd</div>
          <div className="btn-group">
            <ArrowButton themeColor={"var(--blue)"} smFull={true} width="272px">
              SERVICED INDUSTRIES
            </ArrowButton>
          </div>
        </Flex>
      </section>
    </ServicesWrapper>
  );
};

export default Services;
