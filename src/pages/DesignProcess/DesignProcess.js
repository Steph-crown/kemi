// Imports
import React from "react";
import { Components } from "../../components";
import {
  BannerHeaderText,
  Flex,
} from "../../fragments/About/AboutBanner/styles";
import {
  DesignProcessWrapper,
  GreenScene,
  ProcessTopicWrapper,
} from "./styles";
import { svgs } from "../../assets/svgs";
import topics from "../../data/topics";

// Destructure imports
const { Navbar, ProcessNavbar, TopicDetails } = Components;
const { DownIcon } = svgs;

const DesignProcess = () => {
  return (
    <DesignProcessWrapper>
      <Navbar />
      <section className="container">
        <section className="container__sub container__banner">
          <Flex className="banner__flex">
            <div>
              <BannerHeaderText>
                <span>DESIGN PROCESS</span>
              </BannerHeaderText>
            </div>
          </Flex>

          <section className="design-table">
            <div>
              <button className="design-table__down-btn">
                <DownIcon />
              </button>
              <p>
                Leveraging a human centered design approach, I create solutions
                tailored to the needs of the brand’s target audience that is
                aimed at growing their business and revenue.
              </p>
            </div>
            <div>
              <h6 className="design-table__header-text">USER RESEARCH</h6>
              <ul className="design-table__list">
                <li className="design-table__list-item">PRODUCT DEFINITION</li>
                <li className="design-table__list-item">RESEARCH & ANALYSIS</li>
                <li className="design-table__list-item">IDEATION</li>
              </ul>
            </div>{" "}
            <div>
              <h6 className="design-table__header-text">UX DESIGN</h6>
              <ul className="design-table__list">
                <li className="design-table__list-item">WIREFRAMING</li>
                <li className="design-table__list-item">PROTOTYPING</li>
                <li className="design-table__list-item">USER - TESTING</li>
              </ul>
            </div>{" "}
            <div>
              <h6 className="design-table__header-text">UI DESIGN</h6>
              <ul className="design-table__list">
                <li className="design-table__list-item">MOODBOARD</li>
                <li className="design-table__list-item">CONCEPT</li>
                <li className="design-table__list-item">FINAL DESIGN</li>
              </ul>
            </div>{" "}
            <div>
              <h6 className="design-table__header-text">DELIVERY</h6>
              <ul className="design-table__list">
                <li className="design-table__list-item">DEVELOPER HANDOFF</li>
                <li className="design-table__list-item">BETA - TESTING</li>
              </ul>
            </div>
          </section>

          <ProcessTopicWrapper>
            <BannerHeaderText>
              <span>UX RESEARCH</span>
            </BannerHeaderText>
            <p className="topic__description">
              Pursuing a data-driven design approach, I continuously resort to
              UX research, which constitutes the core of product development. I
              meticulously observe the brand’s target audience and users,
              uncover their pain points, and discover their needs to create the
              most relevant solution.
            </p>
          </ProcessTopicWrapper>

          {topics["uxresearch"].map((topic) => (
            <TopicDetails key={topic.name} {...topic} />
          ))}

          <ProcessTopicWrapper>
            <BannerHeaderText>
              <span>UX DESIGN</span>
            </BannerHeaderText>
            <p className="topic__description">
              Being cautious and preventing costly errors in advance, we
              visualize your ideas using simple experimental models to assess
              the idea viability and validate design solutions. We employ
              user-testing to pinpoint improvement areas, adapt changes, and
              ultimately release the right product for your brand.
            </p>
          </ProcessTopicWrapper>

          {topics["uxdesign"].map((topic) => (
            <TopicDetails key={topic.name} {...topic} />
          ))}
        </section>
      </section>

      <GreenScene>
        <section className="container__sub container__banner">
          <ProcessTopicWrapper>
            <BannerHeaderText>
              <span>UI DESIGN</span>
            </BannerHeaderText>
            <p className="topic__description">
              Focusing on the client’s business objectives, I creates UI design
              that communicate the brand values and reinforce users’ trust. To
              ensure an efficient and joyful user experience, I create an
              “invisible” feel with proper visual accents that guide users
              throughout the interface.
            </p>
          </ProcessTopicWrapper>

          {topics["uidesign"].map((topic) => (
            <TopicDetails key={topic.name} {...topic} isGreen={true} />
          ))}
        </section>
      </GreenScene>

      <ProcessNavbar />
    </DesignProcessWrapper>
  );
};

export default DesignProcess;
