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

      @media screen and (min-width: 960px) {
        display: block;

        &-list {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const MenuButton = styled.button`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  margin: 0 16px;
`;

export const NavL = styled(NavLink).attrs({
  className: ({ isActive }) => (isActive ? "active" : ""),
})`
  overflow: hidden;
  position: relative;
  display: inline-block;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    font-family: var(--font-neue);
    display: block;
  }

  .line {
    position: relative;
    left: -100%;
    width: 100%;
    border-top: 1px solid var(--body-black);
  }

  &:hover {
    .line {
      transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }
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
