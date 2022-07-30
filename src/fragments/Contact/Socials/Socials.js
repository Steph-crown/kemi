import React from "react";
import styled from "styled-components";

const Socials = () => {
  return (
    <Wrapper>
      <section className="container__sub container__banner">
        <a href="/">LINKEDIN</a>
        <a href="/">EMAIL ADDRESS</a>
        <a href="/">BEHANCE</a>
      </section>
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  margin: 45px 0;

  .container {
    &__banner {
      display: flex;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;

      @media screen and (min-width: 640px) {
        justify-content: center;
      }
    }
  }

  a {
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    border: 1px solid var(--body-black);
    padding: 5px;
    width: 140px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    @media screen and (min-width: 640px) {
      width: 220px;
      padding: 16px;
      font-size: 1.4rem;
      margin: 0 24px;
      margin-bottom: 24px;
    }
    @media screen and (min-width: 1024px) {
      width: 272px;
      padding: 19px;
      font-size: 1.4rem;
      margin: 0 24px;
      margin-bottom: 24px;
    }
  }
`;
