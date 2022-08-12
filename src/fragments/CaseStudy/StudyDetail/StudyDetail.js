import React from "react";
import styled from "styled-components";

const StudyDetail = ({ comingSoonColor, comingSoonBg }) => {
  return (
    <Wrapper {...{ comingSoonBg, comingSoonColor }}>
      <section className="container__sub container__banner">
        <div className="coming-soon">
          <h3 className="coming-soon__header">Case Study Coming Soon</h3>
        </div>
      </section>
    </Wrapper>
  );
};

export default StudyDetail;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      padding-top: 40px;
      padding-bottom: 40px;

      @media screen and (min-width: 600px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 82px;
        padding-bottom: 82px;
      }
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  .coming-soon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.comingSoonBg};
    color: ${(props) => props.comingSoonColor};
    padding: 32px;
    border-radius: 16px;

    &__header {
      font-weight: 400;
      font-size: 3.6rem;
      line-height: 100%;
      text-align: center;
    }

    @media screen and (min-width: 600px) {
      padding: 40px;

      &__header {
        font-size: 4.4rem;
      }
    }
    @media screen and (min-width: 960px) {
      padding: 56px;

      &__header {
        font-size: 5.2rem;
      }
    }
    @media screen and (min-width: 1200px) {
      padding: 64px;

      &__header {
        font-size: 7.2rem;
      }
    }
  }
`;
