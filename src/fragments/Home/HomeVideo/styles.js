import styled from "styled-components";

export const VideoWrapper = styled.section`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    margin-top: 18px;
    height: 270px;
    object-fit: cover;

    @media screen and (min-width: 600px) {
      margin-top: 40px;
      height: 400px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 64px;
      height: 600px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 100px;
      height: 740px;
    }
  }

  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      height: 24px;
      @media screen and (min-width: 600px) {
        height: 40px;
      }
      @media screen and (min-width: 960px) {
        height: 64px;
      }
      @media screen and (min-width: 1024px) {
        height: 80px;
      }
      @media screen and (min-width: 1200px) {
        height: 100px;
      }
    }
  }
`;
