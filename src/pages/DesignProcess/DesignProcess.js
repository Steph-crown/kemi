// Imports
import React from "react";
import { Components } from "../../components";
import {
  BannerHeaderText,
  Flex,
} from "../../fragments/About/AboutBanner/styles";
import { DesignProcessWrapper } from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { Navbar } = Components;
const { DownIcon } = svgs;

const DesignProcess = () => {
  return (
    <DesignProcessWrapper>
      <Navbar />
      <section className="container">
        <section className="container__sub container__banner">
          <Flex className="banner__flex">
            <div>
              <BannerHeaderText>
                <span>DESIGN PROCESS</span>
              </BannerHeaderText>
            </div>
          </Flex>
        </section>
        <section className="design-table">
          <div>
            <button>
              <DownIcon />
            </button>
            <p>
              Leveraging a human centered design approach, I create solutions
              tailored to the needs of the brand's target audience that is aimed
              at growing their business and revenue.
            </p>
          </div>
          <div></div> <div></div> <div></div> <div></div>
        </section>
      </section>
    </DesignProcessWrapper>
  );
};

export default DesignProcess;
