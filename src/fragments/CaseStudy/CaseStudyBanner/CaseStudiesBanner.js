import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { svgs } from "../../../assets/svgs";

const { BackIcon } = svgs;

const CaseStudyBanner = ({ title, shortDesc, bannerImage }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <section className="container__sub container__banner">
          <Content>
            <button
              className="back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              <BackIcon />
              Back
            </button>
            <p>{title}</p>
            <h1>{shortDesc}</h1>
          </Content>
        </section>
      </Wrapper>{" "}
      <StyledImage alt="" src={bannerImage} />
    </>
  );
};

export default CaseStudyBanner;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  margin-top: -2px;

  padding-top: 32px;
  @media screen and (min-width: 600px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 48px;
  }

  .container {
    &__banner {
      border-top: 4px solid #cee6ff;
      border-top-left-radius: 1px;
      border-top-right-radius: 1px;
      padding-top: 24px;
      padding-bottom: 24px;
      position: relative;

      @media screen and (min-width: 480px) {
        border-top-width: 6px;
        padding-top: 32px;
        padding-bottom: 32px;
      }
      @media screen and (min-width: 600px) {
        border-top-width: 6px;
        padding-top: 40px;
        padding-bottom: 40px;
      }
      @media screen and (min-width: 720px) {
        padding-top: 48px;
        padding-bottom: 48px;
      }
      @media screen and (min-width: 960px) {
        padding-top: 56px;
        padding-bottom: 56px;
      }
      @media screen and (min-width: 1200px) {
        padding-top: 62px;
        padding-bottom: 62px;
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
`;

const Content = styled.div`
  position: relative;
  .back-btn {
    display: flex;
    align-items: center;
    font-weight: 400;
    line-height: 155%;
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    left: 0;
    svg {
      margin-right: 6px;
      height: 16px;
      width: 16px;
    }
    @media screen and (min-width: 800px) {
      font-size: 1.6rem;
      svg {
        margin-right: 10px;
        height: 24px;
        width: 24px;
      }
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 133%;
    color: #cee6ff;
    padding-top: 32px;
    @media screen and (min-width: 800px) {
      font-size: 1.6rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 115%;
    margin-top: 16px;
    @media screen and (min-width: 560px) {
      font-size: 4.2rem;
    }
    @media screen and (min-width: 720px) {
      font-size: 5.8rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 6.8rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 7.8rem;
    }
  }

  * {
    text-align: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;
