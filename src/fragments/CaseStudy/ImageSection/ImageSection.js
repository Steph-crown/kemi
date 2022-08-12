import React from "react";
import styled from "styled-components";

const ImageSection = ({ caseStudiesImages, name, type }) => {
  return (
    <Wrapper {...{ type }} className={`${name}`}>
      <section className="container__sub container__banner">
        <div className="images__container">
          {caseStudiesImages.map((image, index) => (
            <img
              src={image}
              alt={`${name} ${index}`}
              key={`index ${index}`}
              className={`image__image image__image--${index}`}
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
      display: flex;
      flex-direction: column;

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
    }
  }

  .image__image {
    width: ${(props) => (props.type === "mobile" ? "30%" : "100%")};
    margin-bottom: 200px;
  }
`;
