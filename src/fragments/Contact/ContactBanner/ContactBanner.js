import React from "react";
import { Flex, ContactBannerWrapper, BannerHeaderText } from "./styles";
import { pngs } from "../../../assets/pngs";

// Destructure imports

const ContactBanner = () => {
  return (
    <ContactBannerWrapper>
      <section className="container__sub container__banner">
        <Flex className="banner__flex">
          <div>
            <BannerHeaderText>
              <span>GET IN TOUCH</span>
            </BannerHeaderText>
          </div>
        </Flex>
      </section>
    </ContactBannerWrapper>
  );
};

export default ContactBanner;
