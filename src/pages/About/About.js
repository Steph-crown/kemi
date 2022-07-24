// Imports
import React from "react";
import { Components } from "../../components";
import { AboutWrapper } from "./styles";
import { AboutFragments } from "../../fragments/About";

// Destructure imports
const { Navbar, ContactSection } = Components;
const { AboutBanner } = AboutFragments;

const About = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <AboutBanner />
      <ContactSection />
    </AboutWrapper>
  );
};

export default About;
