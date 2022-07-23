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
      }

      @media screen and (min-width: 1280px) {
        padding: 0 80px;
      }
    }

    &__header {
      padding: 40px 0 24px 0;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      color: var(--black);
      font-family: var(--font-made);

      @media screen and (min-width: 880px) {
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.47rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 4rem;
        line-height: 5.6rem;
      }
      @media screen and (min-width: 1200px) {
        font-weight: 700;
        font-size: 5rem;
        line-height: 6.8rem;
      }
    }

    &__icons {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      svg {
        height: 24px;
      }

      a {
        margin-right: 16px;

        @media screen and (min-width: 880px) {
          margin-right: 20px;
          svg {
            height: 32px;
            width: 32px;
          }
        }
        @media screen and (min-width: 1024px) {
          margin-right: 28px;
          svg {
            height: 40px;
            width: 40px;
          }
        }
        @media screen and (min-width: 1200px) {
          margin-right: 32px;
          & > svg {
            height: 56px;
            width: 56px;
          }
        }
      }
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

export const ContactFormWrapper = styled.form`
  input,
  textarea {
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--black);

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #c4c4c4;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c4c4c4;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #c4c4c4;
    }
  }
`;
