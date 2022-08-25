import React, { useEffect, useRef } from "react";
import { Flex, BannerWrapper, BannerHeaderText, PenButtonIcon } from "./styles";
import { svgs } from "../../../assets/svgs";
import { gsap } from "gsap";
import useBannerAnimation from "../../../animations/banner-animation";

// Destructure imports
const { PenIcon } = svgs;

const HomeBanner = () => {
  const { bannerRef } = useBannerAnimation();

  return (
    <BannerWrapper ref={bannerRef}>
      <section className="container__sub container_banner">
        <Flex className="banner__flex first__flex">
          <div>
            <BannerHeaderText>
              <span>c</span>
              <span>r</span>
              <span>e</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>v</span>
              <span>e</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <Flex className="banner__flex second__flex">
          <div>
            <BannerHeaderText>
              <span>P</span>
              <span>R</span>
            </BannerHeaderText>
          </div>
          <PenButtonIcon className="pen-icon">
            {/* <a href="mailto:hello@kemiadeleke.com" > */}
            <PenIcon />
            {/* </a> */}
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
        <Flex className="banner__flex third__flex">
          <div>
            <BannerHeaderText>
              <span>d</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span>e</span>
              <span>r</span>
            </BannerHeaderText>
          </div>
          <p>
            I create engaging user experience design for brands and startups by
            balancing the business needs and the user's needs.
          </p>
        </Flex>
      </section>
    </BannerWrapper>
  );
};

export default HomeBanner;
