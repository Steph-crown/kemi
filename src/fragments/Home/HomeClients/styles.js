import styled from "styled-components";

export const HomeClientsWrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--body-black);
  padding-bottom: 40px;
  .container {
    &__banner {
    }
  }

  small {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--light-grey);
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

  .btn-group {
    padding-top: 18px;

    @media screen and (min-width: 400px) {
      padding-top: 24px;
    }
  }

  .about {
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

  header {
    display: flex;
    padding-top: 60px;
    padding-bottom: 24px;

    h1 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: var(--white);
      font-family: var(--font-made);
    }
  }

  .client {
    color: var(--white);
    margin-top: 21px;
    &__comment {
      display: flex;
      svg {
        flex: 1 0 auto;
        height: 24px;
        margin-right: 2px;
      }
      p {
        color: var(--white);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.6rem;
      }
    }
    &__profile {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      align-items: flex-end;
      margin-bottom: 42px;

      img {
        height: 40px;
      }

      p {
        text-transform: uppercase;
        color: var(--white);
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(183, 183, 183, 0.4);

  @media screen and (min-width: 880px) {
    flex-direction: row-reverse;

    .btn-group {
      width: 332px;
      flex: 1 0 auto;
      border-right: 1px solid rgba(183, 183, 183, 0.4);
      padding-top: 32px;
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
