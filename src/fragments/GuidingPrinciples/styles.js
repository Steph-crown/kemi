import styled from "styled-components";

export const PrinciplesWrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--deep-green);
  margin-top: -4px;

  .container {
    &__banner {
      padding-top: 48px;
      padding-bottom: 24px;
    }
  }
  h1.sub {
    margin-top: 0;
    margin-bottom: 0;
  }

  small {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--body-black);
    margin-bottom: 11px;
    display: block;

    @media screen and (min-width: 880px) {
      font-size: 1.6rem;
      margin-bottom: 24px;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--body-black);

    @media screen and (min-width: 880px) {
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 2.76rem;
      line-height: 4rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 3.3rem;
      line-height: 4.8rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 3.8rem;
      line-height: 5.8rem;
    }
  }

  .principles {
    /* margin-top: 24px; */
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(21, 21, 21, 0.15);

    @media screen and (min-width: 1024px) {
      /* margin-top: 40px; */
    }
    @media screen and (min-width: 880px) {
      /* margin-top: 64px; */
      flex-direction: row-reverse;

      .btn-group {
        width: 332px;
        flex: 1 0 auto;
        border-right: 1px solid rgba(21, 21, 21, 0.15);
        padding-top: 32px;
        button:hover {
          background: transparent;
          border: 1px solid var(--black);
        }
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
    @media screen and (min-width: 1024px) {
      margin-top: 80px;
    }
    @media screen and (min-width: 1200px) {
      margin-top: 100px;
    }

    &__content {
      @media screen and (min-width: 880px) {
        padding: 32px 40px;
      }
      @media screen and (min-width: 1024px) {
        padding: 50px 64px;
      }
      @media screen and (min-width: 1200px) {
        padding: 54px 78px;
      }
    }
  }
`;

export const CapsuleWrapper = styled.section`
  position: relative;
  margin-top: 32px;
  margin-bottom: 24px;
  background: var(--deep-green);
  height: 240px;
`;

export const Capsule = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.8rem;
  color: var(--body-black);
  padding: 16px 22px;
  border: 1px solid var(--body-black);
  border-radius: 100px;
  text-align: center;
  position: absolute;

  &:nth-child(1) {
    top: 50px;
    left: -20px;
    transform: rotate(52.35deg);
  }
  &:nth-child(2) {
    top: -12px;
    left: 96px;
    transform: rotate(-9.01deg);
  }
  &:nth-child(3) {
    top: 50px;
    right: -20px;
    transform: rotate(-63.87deg);
  }
  &:nth-child(4) {
    top: 110px;
    left: 80px;
    transform: rotate(-59.97deg);
  }
`;
