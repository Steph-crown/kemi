import React from "react";
import { Flex, BannerWrapper, BannerHeaderText, PenButtonIcon } from "./styles";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const { PenIcon } = svgs;

const HomeBanner = () => {
  return (
    <BannerWrapper>
      <section className="container__sub container_banner">
        <Flex>
          <div>
            <BannerHeaderText>
              <span>P</span>
              <span>R</span>
            </BannerHeaderText>
          </div>
          <PenButtonIcon>
            <PenIcon />
          </PenButtonIcon>
          <div>
            <BannerHeaderText>
              <span>D</span>
              <span>U</span>
              <span>C</span>
              <span>T</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <Flex>
          <div>
            <BannerHeaderText>
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <Flex>
          <div>
            <BannerHeaderText>
              <span>m</span>
              <span>a</span>
              <span>n</span>
              <span>a</span>
              <span>g</span>
              <span>e</span>
              <span>r</span>
            </BannerHeaderText>
          </div>
        </Flex>
      </section>
    </BannerWrapper>
  );
};

export default HomeBanner;
