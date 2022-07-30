import styled from "styled-components";

export const FormWrapper = styled.section.attrs({
  className: "container",
})`
  margin: 45px 0;

  .container {
    &__banner {
    }
  }

  form {
    max-width: 582px;
    margin: 0 auto;
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
`;
