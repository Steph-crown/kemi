import styled from "styled-components";

export const ArrowButtonWrapper = styled.button`
  background: ${({ themeColor }) => themeColor};
  width: ${({ width, smFull }) => (smFull ? "100%" : width || "100%")};
  max-width: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  padding: 13px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;

  svg {
    margin-left: 40px;
  }

  @media screen and (min-width: 640px) {
    width: ${({ width }) => width || "100%"};
    padding: 16px;
  }
  @media screen and (min-width: 880px) {
    padding: 17px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    svg {
      margin-left: 28px;
    }
  }
`;
