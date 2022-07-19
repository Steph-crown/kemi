import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: none;
    box-sizing: border-box;
    margin: 0;
    font-family: var(--font-neue);
    font-size: 62.5%;
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: var(--body-black);
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

  ul, li {
    list-style: none;
  }

  .container {
    width: 100%;
    padding: 0 16px;

    @media screen and (min-width: 768px) {
      padding: 0 32px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0 64px;
    }

    @media screen and (min-width: 1280px) {
      padding: 0 80px;
    }

    &__sub {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
