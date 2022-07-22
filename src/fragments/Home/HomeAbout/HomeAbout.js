import React from "react";
import { HomeAboutWrapper } from "./styles";
import { Components } from "../../../components";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;

const HomeAbout = () => {
  return (
    <HomeAboutWrapper>
      <section className="container__sub container__banner">
        <div>
          <small>ABOUT ME</small>
          <p>
            I am a Product and UX Designer! I work at the intersection of
            curiosity, reasoning and imagination, which guide me to uncover
            insights, (re)frame problems and craft meaningful, future-oriented
            solutions. <br /> I am passionate about providing solutions to users
            by building accessible products.
          </p>
        </div>
        <div className="btn-group">
          <ArrowButton themeColor={"var(--blue)"} smFull={true} width="272px">
            MORE ABOUT ME
          </ArrowButton>
        </div>
      </section>
    </HomeAboutWrapper>
  );
};

export default HomeAbout;
