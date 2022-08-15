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
      position: relative;
      padding: 0px 16px;
      @media screen and (min-width: 768px) {
        padding: 0 32px;
      }
      @media screen and (min-width: 880px) {
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
      @media screen and (max-width: 880px) {
        height: 240px;
      }

      @media screen and (min-width: 880px) {
        width: 50%;
        max-height: 1024px;
      }
    }
  }

  footer {
    margin: 40px 0;
    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.7rem;
      color: #b7b7b7;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 4px;
      }

      @media screen and (min-width: 880px) {
        font-size: 1.4rem;
      }
    }
  }

  .up-btn {
    position: absolute;
    bottom: 0;
    left: 16px;
    margin-bottom: 32px;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    @media screen and (min-width: 880px) {
      left: 32px;
    }

    @media screen and (min-width: 1024px) {
      left: 64px;
      margin-bottom: 64px;
    }

    @media screen and (min-width: 1280px) {
      left: 80px;
      margin-bottom: 82px;
    }
    svg {
      height: 40px;
      width: 40px;
    }
  }
`;

export const ContactFormWrapper = styled.form.attrs({ "data-netlify": "true" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input,
  textarea {
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--black);
    padding: 12px 28px;
    border: 1px solid #999999;
    border-radius: 30px;
    margin-bottom: 24px;

    &:focus {
      border-color: var(--blue);
    }

    @media screen and (min-width: 880px) {
      font-size: 1.6rem;
    }

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

  textarea {
    height: 182px;
    border-radius: 10px;
  }

  button {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    border-radius: 30px;
    background: var(--blue);
    margin: 0 auto;
    padding: 16px;
    width: 272px;
    color: white;
    margin-top: 24px;

    &:hover {
      background-color: var(--black);
    }

    @media screen and (min-width: 880px) {
      margin-top: 0px;
    }
  }
`;
