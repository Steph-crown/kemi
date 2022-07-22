// Imports
import React from "react";
import { HomeWrapper } from "./styles";
import { Components } from "../../components";
import { HomeFragments } from "./../../fragments/Home/index";

// Destructure imports
const { Navbar } = Components;
const { HomeBanner, HomeVideo, HomeAbout, Projects, Services, HomeClients } =
  HomeFragments;

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeBanner />
      <HomeVideo />
      <HomeAbout />
      <Projects />
      <Services />
      <HomeClients />
    </HomeWrapper>
  );
};

export default Home;
