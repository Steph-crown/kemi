import styled from "styled-components";
import React from "react";
import { pngs } from "../../../assets/pngs";
import { svgs } from "../../../assets/svgs";
import { VideoWrapper } from "../../Home/HomeVideo/styles";

const { aboutVideo } = pngs;
const { PlayIcon } = svgs;

const AboutVideo = () => {
  return (
    <VideoWrapper>
      <img src={aboutVideo} alt="about kemi" />
      <button className="play-btn">
        <PlayIcon />
      </button>
    </VideoWrapper>
  );
};

export default AboutVideo;
