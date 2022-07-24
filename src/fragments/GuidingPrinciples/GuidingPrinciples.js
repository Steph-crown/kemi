import React from "react";
import { BannerHeaderText, Flex } from "../About/AboutBanner/styles";
import { Capsule, CapsuleWrapper, PrinciplesWrapper } from "./styles";
import { svgs } from "../../assets/svgs";
import { Components } from "../../components";

const { ArrowIcon } = svgs;
const {
  Buttons: { ArrowButton },
} = Components;

const GuidingPrinciples = () => {
  return (
    <PrinciplesWrapper>
      <section className="container__sub container__banner">
        <Flex className="banner__flex">
          <div>
            <BannerHeaderText className="sub">
              <span>LIFE OUTSIDE WORK</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <section className="principles">
          <div className="principles__content">
            <small>MY PRINCIPLES</small>
            <p>
              I combine the freedom of personality, diligence and integrity to
              design accessible and usable products. Striving daily to offer the
              best digital design solutions to users and organizations. I
              collaborate closely with a diverse team, and devote my heart and
              souls to my works, and the outcomes speak for themselves.
            </p>
          </div>

          <CapsuleWrapper>
            <Capsule>DILIGENCE & TIMELINESS</Capsule>
            <Capsule>INTEGRITY IS MY WATCHWORD</Capsule>
            <Capsule>PASSION IS MY CRAFT</Capsule>
            <Capsule>EFFECTIVE COMMUNICATION</Capsule>
          </CapsuleWrapper>
          <div className="btn-group">
            <ArrowButton
              themeColor={"var(--black)"}
              smFull={true}
              width="272px"
            >
              BECOME A CLIENT
            </ArrowButton>
          </div>
        </section>
      </section>
    </PrinciplesWrapper>
  );
};

export default GuidingPrinciples;
