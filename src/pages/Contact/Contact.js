// Imports
import React from "react";
import { Components } from "../../components";
import { ContactWrapper } from "./styles";
import { ContactFragments } from "../../fragments/Contact";
import { pngs } from "../../assets/pngs";

// Destructure imports
const { Navbar } = Components;
const { ContactBanner, Socials } = ContactFragments;
const { library } = pngs;

const Contact = () => {
  return (
    <ContactWrapper>
      <Navbar />
      <ContactBanner />
      <img src={library} alt="library" className="library-img" />
      <Socials />
    </ContactWrapper>
  );
};

export default Contact;
