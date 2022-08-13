// Imports
import React from "react";
import { Link } from "react-router-dom";
import { ProcessNavbarWrapper, NavL, NavListItem } from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { DownIcon } = svgs;

const ProcessNavbar = ({ darkMode, bgColor }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const progress = 15;

  return (
    <ProcessNavbarWrapper
      className="container"
      darkMode={darkMode}
      bgColor={bgColor}
      progress={progress}
    >
      <section className="container__ub subb">
        <div className="nav__divider">
          <div className="nav__divider-bg"></div>
          <div className="nav__progress"></div>
        </div>
        <nav className="nav__nav">
          <button className="nav__go-up">
            <DownIcon />
          </button>
          <ul className="nav__nav-list">
            <NavListItem>
              <NavL to="/about" darkMode={darkMode}>
                <span>UX RESEARCH</span>
                <div className="line"></div>
              </NavL>
            </NavListItem>
            <NavListItem>
              <NavL to="/case-studies" darkMode={darkMode}>
                <span>UX DESIGN</span>
                <div className="line"></div>
              </NavL>{" "}
            </NavListItem>
            <NavListItem>
              <NavL to="/design-process" darkMode={darkMode}>
                <span>UI DESIGN</span>
                <div className="line"></div>
              </NavL>
            </NavListItem>
          </ul>
        </nav>
      </section>
    </ProcessNavbarWrapper>
  );
};

export default ProcessNavbar;
