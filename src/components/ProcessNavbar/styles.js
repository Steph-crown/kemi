// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProcessNavbarWrapper = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
    width: 100%;

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
      position: relative;
      z-index: 2;
    }
  }

  .nav {
    &__logo {
      height: 32px;
      width: 32px;
      @media screen and (min-width: 960px) {
        height: 40px;
        width: 40px;
      }
      @media screen and (min-width: 12o0px) {
        height: 50px;
        width: 50px;
      }

      color: ${({ darkMode }) => (!darkMode ? "var(--black)" : "var(--white)")};

      &:hover {
        transform: scale(1.5);
      }
    }

    &__go-up {
      svg {
        transform: rotate(180deg);
        height: 24px;
        width: 24px;

        @media screen and (min-width: 768px) {
          height: 32px;
          width: 32px;
        }
        @media screen and (min-width: 1024px) {
          height: 40px;
          width: 40px;
        }
      }
    }

    &__nav {
      /* position: absolute;
      top: 50%;
      left: 50%; */
      /* transform: translate(-50%, -50%); */
      width: 100%;
      display: flex;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        width: 0px;
        height: 0;
      }

      &-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 1 0 auto;
      }
      /* } */
    }
    &__divider {
      position: absolute;
      top: 0;
      width: 100%;
      &-bg {
        height: 1px;
        background: rgba(21, 21, 21, 0.15);
      }
    }
    &__progress {
      width: ${({ progress }) => progress}%;
      height: 3px;
      background-color: var(--body-black);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @media screen and (min-width: 768px) {
        height: 4.5px;
      }
      @media screen and (min-width: 1024px) {
        height: 6px;
      }
    }
  }
`;

export const NavListItem = styled.li`
  margin: 0 6px;

  @media screen and (min-width: 768px) {
    margin: 0 10px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 16px;
  }
`;

export const NavL = styled(Link).attrs({
  className: ({ isActive }) => (isActive ? "active" : ""),
})`
  overflow: hidden;
  position: relative;
  display: inline-block;

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    font-family: var(--font-neue);
    display: block;
    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
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
