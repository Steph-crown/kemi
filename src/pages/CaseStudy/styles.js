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
`;
