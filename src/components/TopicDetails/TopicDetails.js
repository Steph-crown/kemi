// Imports
import React from "react";
import { Link } from "react-router-dom";
import { TopicDetailsWrapper, NavL, NavListItem } from "./styles";
import { svgs } from "../../assets/svgs";

// Destructure imports
const { DownIcon } = svgs;

const TopicDetails = ({
  name,
  descriptions,
  Illustrations,
  bgColor,
  headerBg,
  isGreen,
}) => {
  const [FirstIllustration, SecondIllustration] = Illustrations;
  return (
    <TopicDetailsWrapper
      className="conainer"
      {...{ bgColor, headerBg, isGreen }}
    >
      <section className="container__sub subb">
        <div className="first-half">
          <FirstIllustration className="topic__illustration topic__illustration--first" />
          <header className="topic__header">
            <h3 className="topic__header--text">{name}</h3>
          </header>
          <SecondIllustration className="topic__illustration topic__illustration--second" />
        </div>
        <div className="second-half">
          <small className="topic__header--small">{name}</small>
          {descriptions.map((description, index) => (
            <p key={index + description} className="topic__description">
              {description}
            </p>
          ))}
        </div>
      </section>
    </TopicDetailsWrapper>
  );
};

export default TopicDetails;
