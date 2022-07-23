import React from "react";
import { ContactSectionWrapper } from "./styles";
import { svgs } from "../../assets/svgs";
import { pngs } from "../../assets/pngs";

// Destructure imports
const { Gmail, Twitter, GoUpIcon, Linkedin, Behance, Copyright } = svgs;
const { footerImage } = pngs;

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <section className="container__sub">
        <div className="contact__left">
          <h3 className="contact__header">
            I am not hard to find, let's design something truly spectacular!
          </h3>
          <div className="contact__icons">
            <a href="/">
              <Gmail />
            </a>
            <a href="/">
              <Behance />
            </a>
            <a href="/">
              <Linkedin />
            </a>
            <a href="/">
              <Twitter />
            </a>
          </div>
          <form>
            <input placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Hi Kemi, I have an idea which needs your expertise......" />
            <button type="button">SUBMIT</button>
          </form>
          <footer>
            <p>
              <span>
                <Copyright />
                Copyright 2022 . All right reserved
              </span>
            </p>
          </footer>
          <button>
            <GoUpIcon />
          </button>
        </div>
        <img src={footerImage} alt="footer" className="contact__image" />
      </section>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
