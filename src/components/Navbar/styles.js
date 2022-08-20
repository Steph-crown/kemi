import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.header`
  position: relative;
  background-color: ${({ darkMode, bgColor }) =>
    bgColor || (darkMode ? "var(--black)" : "var(--white)")};
  .container {
  }
  .subb {
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

    .home {
      /* position: relative; */
      z-index: 2;
    }
  }

  .nav {
    &__logo {
      height: 32px;
      width: 32px;
      @media screen and (min-width: 960px) {
        height: 50px;
        width: 50px;
      }
      @media screen and (min-width: 1200px) {
        height: 56px;
        width: 56px;
      }

      color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};

      &:hover {
        transform: scale(1.5);
      }
    }
    &__buttons {
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      width: 300px;
      justify-content: flex-end;
      padding: 12px 0;

      @media screen and (min-width: 960px) {
        display: none;
      }
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
  color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};

  .line {
    position: relative;
    left: -100%;
    width: 100%;
    border-top: 1px solid var(--green);
  }

  &:hover,
  &.active {
    color: var(--green);
    .line {
      transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }
  }
`;

export const LetsTalkButton = styled.button`
  align-items: center;
  display: none;
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  color: white;
  background: var(--green);
  padding: 12px;
  border-radius: 50px;

  @media screen and (min-width: 960px) {
    display: flex;
    cursor: pointer;
    justify-content: center;
    /* justify-content: space-between; */

    /* .label {
      opacity: 1;
      transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--green);
    } */

    &:hover {
      /* .icon { */
      transform: scale(1.1);
      /* } */
    }
  }

  .icon {
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

export const NavDropdown = styled.section.attrs({
  className: "container_sub",
})`
  width: 100%;
  background: var(--black);
  z-index: 8;
  height: 100vh;
  position: fixed;
  transform: translate3d(0px, -150vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  &.open {
    transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    li {
      a {
        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
      }
    }
  }

  ul {
    margin-top: 64px;
  }

  li {
    margin-bottom: 24px;
  }
`;

export const MobileLetsTalkButton = styled.button`
  @media screen and (min-width: 960px) {
    display: none;
  }
  /* width: 42px;
  height: 42px; */
  background: var(--green);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  color: white;
  background: var(--green);
  padding: 12px;
  border-radius: 50px;

  position: absolute;
  right: -250px;

  /* &:hover {
    transform: scale(1.4);
  } */
  &.open {
    right: 56px;
  }
`;
