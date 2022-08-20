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
            <MobileLetsTalkButton className={isOpen ? "open" : ""}>
              HELLO@KEMIADELEKE.COM
            </MobileLetsTalkButton>
            <MenuButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? <MenuIcon /> : <Close />}
            </MenuButton>
          </section>

          <LetsTalkButton>HELLO@KEMIADELEKE.COM</LetsTalkButton>
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
