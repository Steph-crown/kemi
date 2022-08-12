import React from "react";
import styled from "styled-components";
import { svgs } from "../../assets/svgs";

const Timeline2 = ({ workNode, name }) => {
  const {
    HeaderIcon,
    titles,
    headerBg,
    bodyBg,
    timeLines: timelines,
  } = workNode;
  console.log("timelines", workNode.timeLines);
  return (
    <Wrapper>
      <section>
        <StyledFlex>
          {timelines.slice(0, 2).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
            >
              <div className="illus"></div>
              <div className="timeline__header">
                <h4 className="timeline__header--text">
                  {timeline.headerText}
                </h4>
                <HeaderIcon />{" "}
              </div>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex className="center">
          {timelines.slice(2, 3).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
            >
              <div className="illus"></div>
              <div className="timeline__header">
                <h4 className="timeline__header--text">
                  {timeline.headerText}
                </h4>
                <HeaderIcon />{" "}
              </div>
            </TimelineWrapper>
          ))}
        </StyledFlex>

        <StyledFlex>
          {timelines.slice(3, 5).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
            >
              <div className="illus"></div>
              <div className="timeline__header">
                <h4 className="timeline__header--text">
                  {timeline.headerText}
                </h4>
                <HeaderIcon />{" "}
              </div>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex className="center">
          {timelines.slice(5, 6).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
            >
              <div className="illus"></div>
              <div className="timeline__header">
                <h4 className="timeline__header--text">
                  {timeline.headerText}
                </h4>
                <HeaderIcon />{" "}
              </div>
            </TimelineWrapper>
          ))}
        </StyledFlex>
      </section>
    </Wrapper>
  );
};

export default Timeline2;

const Wrapper = styled.section`
  .container {
    &__banner {
    }
  }
  * {
    color: var(--white);
  }
  & > section {
    position: relative;
    height: 100%;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;

  &.center {
    justify-content: center;
  }

  .header {
    width: 33%;
    text-align: center;
    &__title {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 100%;

      @media screen and (min-width: 600px) {
        font-size: 2rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 416px;
  display: flex;
  background: ${({ headerBg }) => headerBg};
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 48%;
  }

  @media screen and (min-width: 880px) {
    /* margin: 40px 0; */
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1024px) {
    /* margin: 48px 0; */
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    /* margin: px 0; */
    margin-bottom: 70px;
  }

  .illus {
    /* height: 100%; */
    border-radius: 10px;
    width: 18px;
    background-color: ${({ iconColor }) => iconColor};
  }

  svg {
    /* margin-right: 12px; */

    & * {
      color: ${({ iconColor }) => iconColor};
    }
  }

  .timeline {
    background: ${({ bodyBg }) => bodyBg};
    border-radius: 20px;
    width: 380px;
    max-width: 90%;

    &__header {
      background: ${({ headerBg }) => headerBg};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 29px 29px 29px 40px;
      width: 100%;
      @media screen and (min-width: 960px) {
        padding: 29px 29px 29px 70px;
      }
      @media screen and (min-width: 1200px) {
        padding: 29px 29px 29px 72px;
      }

      &--text {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 100%;
        color: #000000;

        @media screen and (min-width: 960px) {
          font-size: 2rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 2.4rem;
        }
      }
    }

    &__body {
      padding: 24px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      &--text {
        list-style-type: disc;
        margin-left: 10px;
        width: 45%;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 119%;
        margin-bottom: 12px;
      }
    }
  }

  &.f {
    margin-bottom: 0;
    &:nth-child(1) {
      .timeline {
        width: 274px;

        &__body--text {
          width: 100%;
        }
      }
    }
  }

  &.s {
    &:nth-child(1) {
      position: relative;
      .timeline {
        /* position: absolute; */
        left: 20%;
        margin-left: 64px;
        &__body--text {
          width: 100%;
        }
      }
    }
    &:nth-child(2) {
      position: relative;
      .timeline {
        position: absolute;
        margin-top: -72px;
        width: 274px;
        &__body--text {
          width: 100%;
        }
      }
    }
    &:nth-child(3) {
      position: relative;
      .timeline {
        margin-left: -100px;
      }
    }
  }
`;
