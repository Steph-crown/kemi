import styled from "styled-components";

export const HomeAboutWrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      margin-top: 24px;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 1024px) {
        margin-top: 40px;
      }
      @media screen and (min-width: 880px) {
        margin-top: 64px;
        border-top: 1px solid rgba(21, 21, 21, 0.15);
        flex-direction: row-reverse;

        .btn-group {
          width: 332px;
          flex: 1 0 auto;
          border-right: 1px solid rgba(21, 21, 21, 0.15);
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
      @media screen and (min-width: 1024px) {
        margin-top: 80px;
      }
      @media screen and (min-width: 1200px) {
        margin-top: 100px;
      }
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
`;
