import styled from "styled-components";

export const ContactBannerWrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      margin-top: 12px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* margin-bottom: 14px; */

  &.banner__flex {
    will-change: transform;
    transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--body-black);
    }
  }

  @media screen and (max-width: 780px) {
    &:nth-child(3) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        max-width: 380px;
        margin-top: 14px;
      }
    }
  }
`;

export const TextFlex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const BannerHeaderText = styled.h1`
  transform: translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  span {
    font-weight: 600;
    font-size: 4.5rem;
    line-height: 5.7rem;
    color: var(--black);
    text-transform: uppercase;
    font-family: var(--font-made);
    transform: translate3d(0px, 0px, 0rem) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 6rem;
      line-height: 7.5rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 8rem;
      line-height: 10rem;
    }
    @media screen and (min-width: 1280px) {
      font-size: 11rem;
      line-height: 13rem;
    }
  }
  &.sub {
    margin-top: 24px;
    @media screen and (min-width: 768px) {
      margin-top: 40px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 64px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 96px;
    }
    @media screen and (min-width: 1200px) {
      margin-top: 124px;
    }
    span {
      font-size: 2.4rem;
      line-height: 3.2rem;

      @media screen and (min-width: 768px) {
        font-size: 6rem;
        line-height: 7.5rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 8rem;
        line-height: 10rem;
      }
      @media screen and (min-width: 1280px) {
        font-size: 11rem;
        line-height: 13rem;
      }
    }
  }
  max-width: 268px;

  margin: 0px 0 32px 0;
  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin: 9px 0 32px 0;
  }
  @media screen and (min-width: 960px) {
    margin: 8px 0 56px 0;
  }
  @media screen and (min-width: 1024px) {
    max-width: 100%;
    margin: 16px 0 64px 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 100%;
    margin: 24px 0 60px 0;
  }
`;

export const ImageFlex = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    border-top: 1px solid rgba(21, 21, 21, 0.15);
    flex-direction: row;
    justify-content: space-between;
  }

  .divider {
    width: 1px;
    background: rgba(21, 21, 21, 0.15);
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      width: 47%;
      height: unset;
      margin-bottom: 0;
      margin-top: 32px;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: var(--body-black);

    @media screen and (min-width: 768px) {
      width: 50%;
      font-size: 1.8rem;
      line-height: 3.6rem;
      margin-top: 32px;
    }
    @media screen and (min-width: 880px) {
      width: 50%;
      font-size: 2.4rem;
      line-height: 4.32rem;
    }
    @media screen and (min-width: 1200px) {
      width: 50%;
      font-size: 3.2rem;
      line-height: 5.8rem;
    }
  }
`;
