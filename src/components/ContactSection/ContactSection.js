import React from "react";
import { ContactSectionWrapper, ContactFormWrapper } from "./styles";
import { svgs } from "../../assets/svgs";
import { pngs } from "../../assets/pngs";
import { useNavigate, useLocation } from "react-router";

const { Gmail, Twitter, GoUpIcon, Linkedin, Behance, Copyright } = svgs;
const { footerImage } = pngs;

const ContactSection = () => {
  const navigate = useNavigate(),
    location = useLocation(),
    handleGoUp = () => {
      console.log("navigate", location.pathname);
      navigate(`${location.pathname}#top`);
    };

  return (
    <ContactSectionWrapper id="contact">
      <section className="container__sub">
        <div className="contact__left">
          <h3 className="contact__header">
            I am not hard to find, let's design something truly spectacular!
          </h3>
          <div className="contact__icons">
            <a
              href="mailto:hello@kemiadeleke.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <Gmail />
            </a>
            <a
              href="https://www.behance.net/oluwakemiolivia"
              target={"_blank"}
              rel="noreferrer"
            >
              <Behance />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwakemi-adeleke/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/SpontaneousKemi"
              rel="noreferrer"
              target={"_blank"}
            >
              <Twitter />
            </a>
          </div>
          <ContactFormWrapper>
            <input placeholder="Full Name" />
            <input type="email" placeholder="Email" name="email" />
            <textarea placeholder="Hi Kemi, I have an idea which needs your expertise......" />
            <input type="hidden" name="subject" value="Kemi Adeleke" />

            <button type="submit">SUBMIT</button>
          </ContactFormWrapper>
          <footer>
            <p>
              <Copyright />
              Copyright 2022 . All right reserved
            </p>
          </footer>
          <button className="up-btn" onClick={handleGoUp}>
            <GoUpIcon />
          </button>
        </div>
        <img src={footerImage} alt="footer" className="contact__image" />
      </section>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
