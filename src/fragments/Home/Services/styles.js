import styled from "styled-components";

export const ServicesWrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    /* &__banner {
      margin-top: 32px;

      @media screen and (min-width: 640px) {
        margin-top: 56px;
      }
      @media screen and (min-width: 880px) {
        margin-top: 72px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 96px;
      }
      @media screen and (min-width: 1200px) {
        margin-top: 106px;
      }
    } */
  }
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .flex {
    &__content {
      width: 100%;
    }
  }

  .btn-group {
    display: none;
  }

  @media screen and (min-width: 880px) {
    border-top: 1px solid rgba(21, 21, 21, 0.15);
    flex-direction: row-reverse;

    .btn-group {
      width: 332px;
      flex: 1 0 auto;
      border-right: 1px solid rgba(21, 21, 21, 0.15);
      padding-top: 32px;
      display: block;

      @media screen and (min-width: 1024px) {
        padding-top: 40px;
      }
      @media screen and (min-width: 1200px) {
        padding-top: 44px;
      }

      button {
        margin: 0 auto;
        /* display: block; */
      }
    }
  }
`;

export const ServicesHeaderText = styled.h1`
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
