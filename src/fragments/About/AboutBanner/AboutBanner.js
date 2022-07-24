import React from "react";
import {
  Flex,
  AboutBannerWrapper,
  BannerHeaderText,
  ImageFlex,
} from "./styles";
import { pngs } from "../../../assets/pngs";

// Destructure imports
const { kemi } = pngs;

const AboutBanner = () => {
  return (
    <AboutBannerWrapper>
      <section className="container__sub container__banner">
        <Flex className="banner__flex">
          <div>
            <BannerHeaderText>
              <span>About me</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <ImageFlex>
          <img src={kemi} alt="Kemi" />
          <div className="divider"></div>
          <p>
            Hello, I am Oluwakemi Adeleke. Product and User Experience Designer.
            I perfectly balance user and business needs to create delightful
            products. Creating user engaging and immersive applications has
            always been a longstanding ambition of mine, I focus on designing
            complex and functional web and mobile products for B2C and B2B
            organizations. Finding ways to communicate to users in a visually
            and cohesively inviting way is important to me. I am adept at
            handling multiple design projects in a fast paced environment.
            Excellent at time management, organization, problem solving and
            meeting deadlines.
          </p>
        </ImageFlex>
        <Flex className="banner__flex">
          <div>
            <BannerHeaderText className="sub">
              <span>LIFE OUTSIDE WORK</span>
            </BannerHeaderText>
          </div>
        </Flex>
        <p className="outside">
          Inspiration for my designs comes from living an active fun-filled
          life. Hanging out with friends, and creating memories with people are
          things I love and are important to me. My ever-inquisitive mind pushes
          me to explore other fields like fashion and I love travelling too. Oh,
          one more thing! It’s no mystery why my friends call me ‘the life of
          the party’. I definitely know when to close the lid and have a good
          time!
        </p>
      </section>
    </AboutBannerWrapper>
  );
};

export default AboutBanner;
