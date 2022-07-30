import styled from "styled-components";

export const DesignProcessWrapper = styled.section`
  .design-table {
    border-top: 1px solid rgba(21, 21, 21, 0.15);
    display: flex;
    align-items: flex-start;

    overflow-x: hidden;

    & > div {
      display: none;
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

      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media screen and (min-width: 1100px) {
        display: block;
        border-right: 1px solid rgba(21, 21, 21, 0.15);
        width: calc(66% / 4);

        &:first-child {
          width: 34%;
          flex-direction: column;
        }

        &:last-child {
          border-right: none;
        }
      }
    }
  }
`;
