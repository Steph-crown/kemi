import styled from "styled-components";

export const DesignProcessWrapper = styled.section`
  .design-table {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    overflow-x: hidden;

    @media screen and (min-width: 1100px) {
      border-top: 1px solid rgba(21, 21, 21, 0.15);
    }

    & > div {
      /* display: none; */
      padding: 16px;
      @media screen and (min-width: 880px) {
        padding: 32px 16px;
      }
      @media screen and (min-width: 1024px) {
        padding: 56px 24px;
      }

      p {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--body-black);

        @media screen and (min-width: 880px) {
          font-size: 1.6rem;
        }
      }

      border-bottom: 1px solid rgba(21, 21, 21, 0.15);
      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: none;
      }
      &:last-child {
        border-bottom: none;
      }

      @media screen and (min-width: 720px) {
        border-bottom: none;
        border-right: 1px solid rgba(21, 21, 21, 0.15);

        &:last-child,
        &:first-child {
          border-right: none;
        }
      }
      @media screen and (min-width: 1100px) {
        display: block;

        &:first-child {
          width: 32%;
          flex-direction: column;
          border-right: 1px solid rgba(21, 21, 21, 0.15);
        }
      }

      &:not(:first-child) {
        width: 100%;
        padding: 0;
        padding-top: 14px;
        padding-bottom: 24px;

        @media screen and (min-width: 720px) {
          width: 25%;
          padding: 16px;
          padding-top: 40px;
          border-top: 1px solid rgba(21, 21, 21, 0.15);
        }
        @media screen and (min-width: 1100px) {
          width: calc(68% / 4);
          padding-top: 72px;
        }
      }
    }

    &__down-btn {
      margin-right: 22px;
      margin-left: 22px;
      svg {
        height: 24px;
        width: 24px;

        @media screen and (min-width: 720px) {
          height: 32px;
          width: 32px;
        }
        @media screen and (min-width: 1024px) {
          height: 40px;
          width: 40px;
        }
      }
      @media screen and (min-width: 1100px) {
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 40px;
      }
    }

    &__header-text {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      max-width: 245px;
      margin-bottom: 10px;
      color: var(--body-black);

      @media screen and (min-width: 720px) {
        font-size: 1.4rem;
        line-height: 171%;
        font-weight: 400;
        margin-bottom: 56px;
      }
    }
    &__list-item {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 171%;
      color: var(--body-black);
      margin-bottom: 6px;

      @media screen and (min-width: 720px) {
        font-size: 1.6rem;
        line-height: 155%;
      }
      @media screen and (min-width: 1024px) {
        font-size: 1.8rem;
      }
    }
  }
`;
