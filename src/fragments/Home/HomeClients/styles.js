import styled from "styled-components";

export const HomeClientsWrapper = styled.section.attrs({
  className: "container",
})`
  background-color: var(--body-black);
  padding-bottom: 40px;
  @media screen and (min-width: 880px) {
    padding-bottom: 0;
  }
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
    justify-content: space-between;

    h1 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: var(--white);
      font-family: var(--font-made);
      max-width: 648px;

      @media screen and (min-width: 880px) {
        font-weight: 600;
        font-size: 7rem;
        line-height: 9rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 9rem;
        line-height: 11rem;
      }
      @media screen and (min-width: 1200px) {
        font-weight: 700;
        font-size: 11rem;
        line-height: 13rem;
      }
    }

    .slider-btns {
      margin-bottom: -24px;
      button {
        border-left: 1px solid rgba(183, 183, 183, 0.4);
        padding: 60px 90px;
        display: flex;
        align-items: flex-end;

        svg {
          height: 40px;
        }

        &:last-child {
          svg {
            transform: rotate(180deg);
          }
        }
      }
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

        @media screen and (min-width: 880px) {
          height: 32px;
          width: 40px;
        }
        @media screen and (min-width: 1024px) {
          height: 40px;
          width: 40px;
        }
      }
      p {
        color: var(--white);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.6rem;

        @media screen and (min-width: 880px) {
          font-size: 1.8rem;
          line-height: 2.8rem;
        }
        @media screen and (min-width: 1024px) {
          font-size: 2.2rem;
          line-height: 2.4rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 2.4rem;
          line-height: 4rem;
        }
      }
    }
    &__profile {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      align-items: flex-end;
      margin-bottom: 42px;

      @media screen and (min-width: 880px) {
        margin-top: 40px;
        margin-bottom: 24px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 50px;
        margin-bottom: 60px;
        align-items: center;
      }
      @media screen and (min-width: 1200px) {
        margin-top: 62px;
        margin-bottom: 87px;
      }

      img {
        height: 40px;

        @media screen and (min-width: 880px) {
          height: 80px;
        }
        @media screen and (min-width: 1024px) {
          height: 120px;
        }
        @media screen and (min-width: 1200px) {
          height: 150px;
        }
      }

      p {
        text-transform: uppercase;
        color: var(--white);
        font-size: 1.4rem;
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
