import React from "react";
import styled from "styled-components";
import WorkNode from "./WorkNode";

const Work = ({ work, name }) => {
  const { header, description, workNode } = work;
  return (
    <Wrapper>
      <section className="container__sub container__banner">
        <h3 className="work__header">{header}</h3>
        <p className="work__text">{description}</p>
        <WorkNode {...{ workNode, name }} />
      </section>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      padding-top: 40px;
      padding-bottom: 40px;
      border-bottom: 1.2px solid rgba(206, 230, 255, 0.8);

      @media screen and (min-width: 600px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 82px;
        padding-bottom: 82px;
      }
    }
  }
  * {
    color: var(--white);
  }

  .work {
    &__header {
      font-weight: 700;
      font-size: 3rem;
      line-height: 136%;
      text-align: center;
      margin-bottom: 10px;
    }
    &__text {
      text-align: center;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 170%;
      max-width: 680px;
      margin: 0 auto;
      margin-bottom: 32px;
    }

    @media screen and (min-width: 600px) {
      &__header {
        font-size: 3.6rem;
        margin-bottom: 14px;
      }
      &__text {
        font-size: 1.8rem;
        margin-bottom: 40px;
      }
    }
    @media screen and (min-width: 1024px) {
      &__header {
        font-size: 4.2rem;
        margin-bottom: 17px;
      }
      &__text {
        font-size: 2rem;
        margin-bottom: 48px;
      }
    }

    @media screen and (min-width: 1200px) {
      &__header {
        font-size: 5rem;
        margin-bottom: 20px;
      }
    }
  }
`;
