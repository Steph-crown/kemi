import React from "react";
import styled from "styled-components";

const Timeline3 = ({ workNode, name }) => {
  const { HeaderIcon, titles, bodyBg, timeLines: timelines } = workNode;

  console.log("worknode", workNode);

  return (
    <Wrapper>
      <section>
        <StyledFlex>
          {timelines.slice(0, 3).map((timeline) => (
            <TimelineWrapper
              {...{
                bgColor: timeline.bgColor,
                bodyBg,
                iconColor: timeline.iconColor,
              }}
              key={timeline.headerText}
            >
              <HeaderIcon />
              <h4 className="timeline__header--text">{timeline.headerText}</h4>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex className="center">
          {timelines.slice(3, 4).map((timeline) => (
            <TimelineWrapper
              {...{
                bgColor: timeline.bgColor,
                bodyBg,
                iconColor: timeline.iconColor,
              }}
              key={timeline.headerText}
            >
              <HeaderIcon />
              <h4 className="timeline__header--text">{timeline.headerText}</h4>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex className="around">
          {timelines.slice(4, 6).map((timeline) => (
            <TimelineWrapper
              {...{
                bgColor: timeline.bgColor,
                bodyBg,
                iconColor: timeline.iconColor,
              }}
              key={timeline.headerText}
            >
              <HeaderIcon />
              <h4 className="timeline__header--text">{timeline.headerText}</h4>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex>
          {timelines.slice(6, 8).map((timeline) => (
            <TimelineWrapper
              {...{
                bgColor: timeline.bgColor,
                bodyBg,
                iconColor: timeline.iconColor,
              }}
              key={timeline.headerText}
            >
              <HeaderIcon />
              <h4 className="timeline__header--text">{timeline.headerText}</h4>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex className="center">
          {timelines.slice(8, 9).map((timeline) => (
            <TimelineWrapper
              {...{
                bgColor: timeline.bgColor,
                bodyBg,
                iconColor: timeline.iconColor,
              }}
              key={timeline.headerText}
            >
              <HeaderIcon />
              <h4 className="timeline__header--text">{timeline.headerText}</h4>
            </TimelineWrapper>
          ))}
        </StyledFlex>
      </section>
    </Wrapper>
  );
};

export default Timeline3;

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
  &.around {
    justify-content: space-around;
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 416px;
  display: flex;
  background: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: 600px) {
    width: 48%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  @media screen and (min-width: 880px) {
    /* margin: 40px 0; */
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1024px) {
    /* margin: 48px 0; */
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1200px) {
    /* margin: px 0; */
    margin-bottom: 36px;
  }

  background: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  width: 287px;
  max-width: 100%;
  padding: 34px 28px;
  color: white;
  svg {
    margin-right: 24px;
    & * {
      color: ${({ iconColor }) => iconColor};
    }
  }

  .timeline {
    &__header {
      background: ${({ bgColor }) => bgColor};
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
        color: #fff;

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
