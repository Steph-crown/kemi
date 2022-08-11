import React from "react";
import styled from "styled-components";

const Summary = ({ summary, tags }) => {
  return (
    <Wrapper>
      <section className="container__sub container__banner">
        <h3 className="summary__header">SUMMARY</h3>
        <div className="summary__container">
          <p className="summary__text">{summary}</p>
          {tags && tags.length > 0 && (
            <div className="summary__tags">
              {tags.map((tag, index) => (
                <span key={index} className="summary__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Summary;

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

  * {
    color: var(--white);

    span {
      color: var(--white);
    }

    h1 {
      margin-bottom: 0;
    }
  }

  .summary {
    &__header {
      font-weight: 500;
      line-height: 160%;
      color: #cee6ff;
      font-size: 1.6rem;
      @media screen and (min-width: 600px) {
        font-size: 1.8rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 2rem;
      }
    }
    &__container {
      margin-top: 1.6rem;
      width: 100%;

      @media screen and (min-width: 880px) {
        max-width: 72%;
        margin-top: 0;
      }
    }

    &__text {
      font-weight: 400;
      line-height: 145%;
      font-size: 2.4rem;

      @media screen and (min-width: 600px) {
        font-size: 2.8rem;
      }
      @media screen and (min-width: 800px) {
        font-size: 3.2rem;
        margin-bottom: 0.8rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3.6rem;
      }
      @media screen and (min-width: 1200px) {
        font-size: 4rem;
      }
    }

    &__tags {
      display: flex;
      align-items: center;
      margin-top: 48px;
      flex-wrap: wrap;
    }

    &__tag {
      font-weight: 400;
      line-height: 181%;
      font-size: 1.8rem;
      padding: 8px 40px;
      border: 1.3px solid #cee6ff;
      border-radius: 50px;
      margin-bottom: 16px;
      margin-right: 16px;
      @media screen and (min-width: 600px) {
        font-size: 2.4rem;
        margin-right: 18px;
      }
      @media screen and (min-width: 800px) {
        font-size: 2.8rem;
        margin-right: 20px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3rem;
        margin-right: 24px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.2rem;
      }
    }
  }
`;
