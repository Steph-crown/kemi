import styled from "styled-components";

export const BannerWrapper = styled.section.attrs({
  className: "container",
})``;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

export const PenButtonIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green);

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
