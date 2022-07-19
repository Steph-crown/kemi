import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  .container {
    &__sub {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;

      @media screen and (min-width: 768px) {
        padding: 20px 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 24px 0;
      }
      @media screen and (min-width: 1280px) {
        padding: 32px 0;
      }
    }
  }

  .nav {
    &__logo {
      height: 24px;
    }
  }
`;

export const MenuButton = styled.button``;

export const NavL = styled(NavLink).attrs({
  className: ({ isActive }) => (isActive ? "active" : ""),
})`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  margin: 0 16px;
  font-family: var(--font-neue);

  &.active {
    color: red;
  }
`;

export const LetsTalk = styled.button``;
