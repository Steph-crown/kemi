// Imports
import React from "react";
import { Components } from "../../components";
import { ContactWrapper } from "./styles";

// Destructure imports
const { Navbar } = Components;
const Contact = () => {
  return (
    <ContactWrapper>
      <Navbar />
      <h1>Contact</h1>
    </ContactWrapper>
  );
};

export default Contact;
