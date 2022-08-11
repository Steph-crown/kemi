import styled from "styled-components";

export const CaseStudyWrapper = styled.section`
  *::selection {
    color: var(--black) !important;
    background: var(--white) !important;
  }

  main {
    background: ${({ bgColor }) => bgColor};
    min-height: 100vh;
  }

  .not-found {
    color: var(--black);
    text-align: center;
    font-size: 3rem;
    margin-top: 3rem;
  }

  header.container {
    padding-bottom: 24px;

    @media screen and (min-width: 600px) {
      padding-bottom: 28px;
    }
    @media screen and (min-width: 960px) {
      padding-bottom: 32px;
    }
    @media screen and (min-width: 1200px) {
      padding-bottom: 40px;
    }
  }
`;
