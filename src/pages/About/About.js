// Imports
import React from "react";
import { Components } from "../../components";
import { AboutWrapper } from "./styles";
import { AboutFragments } from "../../fragments/About";

// Destructure imports
const { Navbar, ContactSection } = Components;
const { AboutBanner, AboutVideo } = AboutFragments;

const About = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <AboutBanner />
      <AboutVideo />
      <ContactSection />
    </AboutWrapper>
  );
};

export default About;
