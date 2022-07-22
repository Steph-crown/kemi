import styled from "styled-components";

export const ServicesWrapper = styled.section.attrs({
  className: "container",
})`
  .container {
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
    .md-hide {
      margin-bottom: 32px;
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
      padding-bottom: 18px;

      @media screen and (min-width: 880px) {
        font-size: 2.2rem;
        line-height: 3.2rem;
        padding-bottom: 36px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 2.76rem;
        line-height: 4rem;
        padding-bottom: 45px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.3rem;
        line-height: 4.8rem;
        padding-bottom: 56px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.8rem;
        line-height: 5.8rem;
        padding-bottom: 64px;
      }
    }
  }
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 880px) {
    flex-direction: row;
  }
  & > * {
    @media screen and (min-width: 880px) {
      width: 50%;
      &:first-child {
        border-right: 1px solid rgba(21, 21, 21, 0.15);
      }
    }
  }
  .services {
    &__list {
      &--item {
        display: block;
        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(21, 21, 21, 0.15);
          @media screen and (min-width: 880px) {
            padding-left: 40px;
            padding-right: 24px;
          }
          @media screen and (min-width: 1024px) {
            padding-left: 64px;
            padding-right: 32px;
          }
          @media screen and (min-width: 1200px) {
            padding-left: 78px;
            padding-right: 40px;
          }

          h2 {
            font-weight: 500;
            font-size: 2.5rem;
            line-height: 3.5rem;
            @media screen and (min-width: 880px) {
              font-size: 3rem;
              line-height: 4rem;
            }
            @media screen and (min-width: 1024px) {
              font-size: 3.5rem;
              line-height: 4.5rem;
            }
            @media screen and (min-width: 1200px) {
              font-size: 4rem;
              line-height: 5rem;
            }
            @media screen and (min-width: 1320px) {
              font-size: 4.5rem;
              line-height: 5.5rem;
            }
            color: var(--black);
          }
        }

        &__body {
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.4rem;

          @media screen and (min-width: 880px) {
            padding-left: 40px;
            padding-right: 14px;
            font-size: 1.6rem;
            line-height: 2.4rem;
          }
          @media screen and (min-width: 1024px) {
            padding-left: 64px;
            padding-right: 22px;
          }
          @media screen and (min-width: 1200px) {
            padding-left: 78px;
            padding-right: 28px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 880px) {
    .m-2 {
      margin-top: 32px;
    }
    .m-8 {
      margin-top: 248px;
    }
    .m-6 {
      margin-top: 200px;
    }
  }
`;
