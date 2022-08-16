// Imports
import React from "react";
import { Link } from "react-router-dom";
import {
  LetsTalkButton,
  MenuButton,
  MobileLetsTalkButton,
  NavbarWrapper,
  NavDropdown,
  NavL,
  NavListItem,
} from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { MenuIcon, Logo, Close } = svgs;

const Navbar = ({ darkMode, bgColor }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <NavbarWrapper
        className="container"
        darkMode={darkMode || isOpen}
        bgColor={bgColor}
        // open={isOpen}
      >
        <section className="container__sub subb">
          <Link to="/" className="home">
            <Logo className="nav__logo" />
          </Link>
          <nav className="nav__nav">
            <ul className="nav__nav-list">
              <NavListItem>
                <NavL to="/about" darkMode={darkMode || isOpen}>
                  <span>ABOUT</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>

              <NavListItem>
                <NavL to="/case-studies" darkMode={darkMode || isOpen}>
                  <span>case studies</span>
                  <div className="line"></div>
                </NavL>{" "}
              </NavListItem>

              <NavListItem>
                <NavL to="/design-process" darkMode={darkMode || isOpen}>
                  <span>design process</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>

              <NavListItem>
                <NavL to="/contact" darkMode={darkMode || isOpen}>
                  <span>contact</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
            </ul>
          </nav>

          <section className="nav__buttons">
            <a
              href="mailto:hello@kemiadeleke.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <MobileLetsTalkButton className={isOpen ? "open" : ""}>
                {/* <PenIcon /> */}
                HELLO@KEMIADELEKE.COM
              </MobileLetsTalkButton>
            </a>
            <MenuButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? <MenuIcon /> : <Close />}
            </MenuButton>
          </section>
          <a
            href="mailto:hello@kemiadeleke.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <LetsTalkButton>
              {/* <span className="label"> LET'S TALK</span>
            <span className="icon">
              <PenIcon />
            </span> */}
              HELLO@KEMIADELEKE.COM
            </LetsTalkButton>
          </a>
        </section>
      </NavbarWrapper>
      <NavDropdown className={!isOpen ? "" : "open"}>
        <ul className="nav__nav-list">
          <NavListItem>
            <NavL to="/about" darkMode={darkMode || isOpen}>
              <span>ABOUT</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <NavL to="/case-studies" darkMode={darkMode || isOpen}>
              <span>case studies</span>
              <div className="line"></div>
            </NavL>{" "}
          </NavListItem>
          <NavListItem>
            <NavL to="/design-process" darkMode={darkMode || isOpen}>
              <span>design process</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <NavL to="/contact" darkMode={darkMode || isOpen}>
              <span>contact</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
        </ul>
      </NavDropdown>
    </>
  );
};

export default Navbar;
