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
const { MenuIcon, Logo, PenIcon } = svgs;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <NavbarWrapper className="container">
        <section className="container__sub subb">
          <Link to="/" className="home">
            <Logo className="nav__logo" />
          </Link>
          <nav className="nav__nav">
            <ul className="nav__nav-list">
              <NavListItem>
                <NavL to="/about">
                  <span>ABOUT</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
              <NavListItem>
                <NavL to="/case-studies">
                  <span>case studies</span>
                  <div className="line"></div>
                </NavL>{" "}
              </NavListItem>
              <NavListItem>
                <NavL to="/design-process">
                  <span>design process</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
              <NavListItem>
                <NavL to="/contact">
                  <span>contact</span>
                  <div className="line"></div>
                </NavL>
              </NavListItem>
            </ul>
          </nav>

          <section className="nav__buttons">
            <MobileLetsTalkButton className={isOpen ? "open" : ""}>
              <PenIcon />
            </MobileLetsTalkButton>
            <MenuButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <MenuIcon />
            </MenuButton>
          </section>
          <LetsTalkButton>
            <span className="label"> LET'S TALK</span>
            <span className="icon">
              <PenIcon />
            </span>
          </LetsTalkButton>
        </section>
      </NavbarWrapper>
      <NavDropdown className={!isOpen ? "open" : ""}>
        <ul className="nav__nav-list">
          <NavListItem>
            <NavL to="/about">
              <span>ABOUT</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <NavL to="/case-studies">
              <span>case studies</span>
              <div className="line"></div>
            </NavL>{" "}
          </NavListItem>
          <NavListItem>
            <NavL to="/design-process">
              <span>design process</span>
              <div className="line"></div>
            </NavL>
          </NavListItem>
          <NavListItem>
            <NavL to="/contact">
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
