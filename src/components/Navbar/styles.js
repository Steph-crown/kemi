import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  .container {
    &__sub {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      position: relative;

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
    &__nav {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: none;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 960px) {
        display: flex;
      }
    }
  }
`;

export const MenuButton = styled.button`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

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

export const LetsTalkButton = styled.button`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--green);
  align-items: center;
  display: none;

  @media screen and (min-width: 960px) {
    display: flex;
  }

  span {
    width: 50px;
    height: 50px;
    background: var(--green);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
  }
`;
