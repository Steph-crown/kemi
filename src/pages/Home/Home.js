// Imports
import React from "react";
import { HomeWrapper } from "./styles";
import { Components } from "../../components";
import { HomeFragments } from "./../../fragments/Home/index";

// Destructure imports
const { Navbar } = Components;
const { HomeBanner, HomeVideo, HomeAbout, Projects } = HomeFragments;

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeBanner />
      <HomeVideo />
      <HomeAbout />
      <Projects />
    </HomeWrapper>
  );
};

export default Home;
