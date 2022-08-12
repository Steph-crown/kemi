import React from "react";
import styled from "styled-components";

const ImageSection = ({ caseStudiesImages, name, type, solution }) => {
  return (
    <Wrapper {...{ type }} className={`${name}`}>
      <section className="container__sub container__banner">
        <p>THE SOLUTION</p>
        <h5>{solution}</h5>
        <div className="images__container">
          {caseStudiesImages.map((image, index) => (
            <img
              src={image}
              alt={`${name} ${index}`}
              key={`index ${index}`}
              className={`image__image image__image--${index} image__image--${name}__${index}`}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ImageSection;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      padding-top: 40px;
      padding-bottom: 40px;
      /* border-bottom: 1.2px solid rgba(206, 230, 255, 0.8); */

      @media screen and (min-width: 600px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 82px;
        padding-bottom: 82px;
      }

      @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  .images {
    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .image__image {
    width: ${(props) => (props.type === "mobile" ? "30%" : "100%")};
    margin-bottom: 32px;

    @media screen and (min-width: 640px) {
      margin-bottom: 64px;
    }
    @media screen and (min-width: 960px) {
      margin-bottom: 96px;
    }

    @media screen and (min-width: 1200px) {
      margin-bottom: 120px;
    }

    &:nth-child(3n - 1) {
      margin-top: ${({ type }) => (type === "mobile" ? "40px" : "")};

      @media screen and (min-width: 640px) {
        margin-top: ${({ type }) => (type === "mobile" ? "56px" : "")};
      }
      @media screen and (min-width: 960px) {
        margin-top: ${({ type }) => (type === "mobile" ? "80px" : "")};
      }

      @media screen and (min-width: 1200px) {
        margin-top: ${({ type }) => (type === "mobile" ? "120px" : "")};
      }
    }

    &--altride {
      &__1 {
        /* margin-top: 40px; */
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;
    color: #cee6ff;
  }

  h5 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 120%;
    text-align: center;
    color: #ffffff;
    margin-top: 16px;
    margin-bottom: 64px;
    @media screen and (min-width: 640px) {
      margin-bottom: 78px;
      font-size: 2.2rem;
    }
    @media screen and (min-width: 960px) {
      margin-bottom: 96px;
      font-size: 2.4rem;
    }

    @media screen and (min-width: 1200px) {
      margin-bottom: 106px;
    }
  }
`;
