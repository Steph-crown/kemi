import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  width: 100%;
  padding: 0 0px;

  .container {
    &__sub {
      max-width: 2000px;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 880px) {
        flex-direction: row;
      }
    }
  }

  .contact {
    &__left {
      padding: 0px 16px;
      @media screen and (min-width: 880px) {
        padding: 0 32px;
        width: 50%;
      }

      @media screen and (min-width: 1024px) {
        padding: 0 64px;
        padding-right: 0;
      }

      @media screen and (min-width: 1280px) {
        padding: 0 80px;
        padding-right: 0;
      }
    }

    &__header {
      padding: 40px 0 24px 0;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      color: var(--black);
      font-family: var(--font-made);
    }

    &__image {
      width: 100%;
      object-fit: cover;

      @media screen and (min-width: 880px) {
        width: 50%;
      }
    }
  }
`;
