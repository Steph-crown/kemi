import styled from "styled-components";

export const StudiesWrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--black);
  color: var(--white);
  .container {
    &__banner {
      padding-top: 32px;

      @media screen and (min-width: 640px) {
        padding-top: 56px;
      }
      @media screen and (min-width: 880px) {
        padding-top: 72px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 96px;
      }
      @media screen and (min-width: 1200px) {
        padding-top: 106px;
      }
    }
  }
`;

export const Flex = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  color: var(--white);
  .flex {
    &__content {
      width: 100%;
    }
  }

  .btn-group {
    display: none;
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
    margin-top: 32px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
  }
`;
