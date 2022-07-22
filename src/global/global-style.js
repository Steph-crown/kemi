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
    cursor: pointer;
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

    &_banner {
      margin-top: 12px;

      @media screen and (min-width: 768px) {
        margin-top: 38px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 64px;
      }
      @media screen and (min-width: 1200px) {
        margin-top: 80px;
      }
    }
  }

  .md-hide {
    @media screen and (min-width: 880px) {
      display: none !important;
    }
  }
  .md-flex {
    display: none !important;
    @media screen and (min-width: 880px) {
      display: flex !important;
    }
  }
`;

export default GlobalStyle;
