import React from "react";
import styled from "styled-components";
import { BannerHeaderText, Flex } from "../../About/AboutBanner/styles";

const CaseStudiesBanner = () => {
  return (
    <Wrapper>
      <section className="container__sub container__banner">
        <Flex className="banner__flex">
          <div>
            <BannerHeaderText>
              <span>Case studies</span>
            </BannerHeaderText>
          </div>
        </Flex>
      </section>
    </Wrapper>
  );
};

export default CaseStudiesBanner;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--black);
  margin-top: -8px;
  .container {
    &__banner {
      padding-top: 20px;
    }
  }

  * {
    color: var(--white);

    span {
      color: var(--white);
    }

    h1 {
      margin-bottom: 0;
    }
  }
`;
