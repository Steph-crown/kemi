import styled from "styled-components";

export const BannerWrapper = styled.section.attrs({
  className: "container",
})``;

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
      margin-left: 18px;
    }

    @media screen and (min-width: 560px) {
      &:nth-child(1),
      &:nth-child(3) {
        margin-left: 96px;
      }
    }

    @media screen and (min-width: 780px) {
      &:nth-child(1),
      &:nth-child(3) {
        margin-left: 120px;
      }
    }

    @media screen and (min-width: 1024px) {
      &:nth-child(1),
      &:nth-child(3) {
        margin-left: 180px;
      }
    }
  }

  @media screen and (max-width: 780px) {
    &:nth-child(3) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        max-width: 380px;
        margin-left: 0;
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
`;

export const PenButtonIcon = styled.a.attrs({
  href: "mailto:hello@kemiadeleke.com",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green);
  cursor: pointer;

  &:hover {
    background: var(--blue);
    transform: scale3d(0.9, 0.6, 1.2);
  }

  @media screen and (min-width: 768px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (min-width: 1024px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;
