// Imports
import React from "react";
import { Components } from "../../components";
import {
  BannerHeaderText,
  Flex,
} from "../../fragments/About/AboutBanner/styles";
import { DesignProcessWrapper, ProcessTopicWrapper } from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { Navbar, ProcessNavbar } = Components;
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

          <ProcessNavbar />
        </section>
      </section>
    </DesignProcessWrapper>
  );
};

export default DesignProcess;
