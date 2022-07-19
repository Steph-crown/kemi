// Imports
import React from "react";
import { Link } from "react-router-dom";
import { LetsTalkButton, MenuButton, NavbarWrapper, NavL } from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { MenuIcon, Logo, PenIcon } = svgs;

const Navbar = () => {
  return (
    <NavbarWrapper className="container">
      <section className="container__sub">
        <Link to="/">
          <Logo className="nav__logo" />
        </Link>
        <nav className="nav__nav">
          <NavL to="/about">ABOUT</NavL>
          <NavL to="/case-studies">CASE STUDIES</NavL>
          <NavL to="/design-process">DESIGN PROCESS</NavL>
          <NavL to="/contact">CONTACT</NavL>
        </nav>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <LetsTalkButton>
          LET'S TALK
          <span>
            <PenIcon />
          </span>
        </LetsTalkButton>
      </section>
      <section className="nav__dropdown"></section>
    </NavbarWrapper>
  );
};

export default Navbar;
