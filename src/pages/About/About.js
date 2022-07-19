// Imports
import React from "react";
import { Components } from "../../components";
import { AboutWrapper } from "./styles";

// Destructure imports
const { Navbar } = Components;

const About = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <h1>About</h1>
    </AboutWrapper>
  );
};

export default About;
