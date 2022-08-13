// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopicDetailsWrapper = styled.header`
  background-color: ${({ darkMode, bgColor }) =>
    bgColor || (darkMode ? "var(--black)" : "var(--white)")};
  .container {
  }
  .subb {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 100vh;
    padding: 16px 0;
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
      padding: 20px 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    @media screen and (min-width: 1024px) {
      padding: 24px 0;
    }
    @media screen and (min-width: 1280px) {
      padding: 32px 0;
    }
  }

  .first-half,
  .second-half {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }

  .first-half {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(21, 21, 21, 0.15);
    padding-bottom: 10px;

    @media screen and (min-width: 768px) {
      border-bottom: none;
      border-right: 1px solid rgba(21, 21, 21, 0.15);
      padding-right: 32px;
    }
    @media screen and (min-width: 1024px) {
      padding-right: 40px;
    }
  }
  .second-half {
    margin-top: 16px;
    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-left: 16px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 24px;
    }
    @media screen and (min-width: 1200px) {
      margin-left: 28px;
    }
  }

  .topic {
    &__illustration {
      width: 100%;
      height: 100%;
    }

    &__header {
      /* margin-left: 32px; */
      width: 94%;
      margin: 24px 0;
      max-width: 535px;
      background-color: ${({ headerBg }) => headerBg};
      border-radius: 10px;
      text-align: center;
      color: white;
      padding: 8px;
      @media screen and (min-width: 768px) {
        padding: 18px;
      }

      &--text {
        font-weight: 700;
        line-height: 155%;
        font-family: var(--font-made);
        font-size: 1.8rem;
        @media screen and (min-width: 768px) {
          font-size: 2.4rem;
        }
        @media screen and (min-width: 1024px) {
          font-size: 2.4rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 3.2rem;
          line-height: 175%;
        }
      }

      &--small {
        color: var(--light-grey);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 171%;
        margin-bottom: 32px;
        display: block;

        @media screen and (min-width: 960px) {
          font-size: 1.6rem;
        }
      }
    }

    &__description {
      color: var(--body-black);
      font-weight: 400;
      line-height: 171%;
      font-size: 1.6rem;
      margin-bottom: 24px;

      @media screen and (min-width: 560px) {
        font-size: 2rem;
        margin-bottom: 24px;
      }

      @media screen and (min-width: 768px) {
        margin-bottom: 32px;
        font-size: 2.4rem;
      }
      @media screen and (min-width: 1024px) {
        margin-bottom: 40px;
        font-size: 2.8rem;
      }
      @media screen and (min-width: 1200px) {
        margin-bottom: 48px;
        font-size: 3rem;
      }
      @media screen and (min-width: 1400px) {
        margin-bottom: 50px;
        font-size: 3.5rem;
      }
    }
  }
`;
