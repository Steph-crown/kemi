import React from "react";
import { ContactFormWrapper } from "../../../components/ContactSection/styles";
import { FormWrapper } from "./styles";
import { svgs } from "../../../assets/svgs";

const { Copyright } = svgs;

const Form = () => {
  return (
    <FormWrapper>
      <section className="container__sub container__banner">
        <ContactFormWrapper>
          <input placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Hi Kemi, I have an idea which needs your expertise......" />
          <button type="button">SUBMIT</button>
        </ContactFormWrapper>
        <footer>
          <p>
            <Copyright />
            Copyright 2022 . All right reserved
          </p>
        </footer>
      </section>
    </FormWrapper>
  );
};

export default Form;
