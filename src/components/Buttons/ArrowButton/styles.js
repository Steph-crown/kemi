import styled from "styled-components";

export const ArrowButtonWrapper = styled.button`
  background: ${({ themeColor }) => themeColor};
  width: ${({ width, smFull }) => (smFull ? "100%" : width || "100%")};
  max-width: 100%;

  @media screen and (min-width: 640px) {
    width: ${({ width }) => width || "100%"};
  }
`;
