import styled from "styled-components";

export const StudiesWrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--black);
  color: var(--white);
  .container {
    &__banner {
      padding-top: 16px;
      margin-top: -2px;

      @media screen and (min-width: 640px) {
        padding-top: 16px;
      }
      @media screen and (min-width: 880px) {
        padding-top: 24px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 40px;
      }
      @media screen and (min-width: 1200px) {
        padding-top: 42px;
      }
    }
  }
`;

export const Flex = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column-reverse;
  color: var(--white);
  .flex {
    &__content {
      width: 100%;
    }
  }
  .btn-group {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;

      svg {
        height: 24px;
        width: 24px;
      }
    }
    h2 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;

      @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 880px) {
    margin-top: 64px;
    border-top: 1px solid rgba(183, 183, 183, 0.3);
    flex-direction: row-reverse;

    .btn-group {
      width: 332px;
      flex: 1 0 auto;
      border-right: 1px solid rgba(183, 183, 183, 0.3);
      padding-top: 32px;
      display: block;
      padding-left: 24px;
      padding-right: 24px;

      @media screen and (min-width: 1024px) {
        padding-top: 40px;
        h2 {
          font-size: 3.2rem;
          line-height: 4.2rem;
        }
      }
      @media screen and (min-width: 1441px) {
        padding-top: 44px;

        h2 {
          font-size: 4.5rem;
          line-height: 5.5rem;
        }
      }

      button {
        margin: 0 auto;
        /* display: block; */
      }
    }
  }
  @media screen and (min-width: 1024px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
  }
`;
