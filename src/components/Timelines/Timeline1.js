import React from "react";
import styled from "styled-components";
import { svgs } from "../../assets/svgs";

const Timeline1 = ({ workNode, name }) => {
  const {
    HeaderIcon,
    titles,
    headerBg,
    bodyBg,
    timeLines: timelines,
  } = workNode;
  return (
    <Wrapper>
      <section>
        {/* <VertLine className="first-abs" />
        <VertLine className="second-abs" /> */}
        <StyledFlex>
          {titles.map((title) => (
            <div key={title} className="header">
              <h6 className="header__title">{title}</h6>
            </div>
          ))}
        </StyledFlex>

        <StyledFlex>
          {timelines.slice(0, 3).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
              className="f"
            >
              <section className="timeline">
                <div className="timeline__header">
                  <HeaderIcon />
                  <h4 className="timeline__header--text">
                    {timeline.headerText}
                  </h4>
                </div>
                <ul className="timeline__body">
                  {timeline.list.map((listItem) => (
                    <li className="timeline__body--text" key={listItem}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </section>
            </TimelineWrapper>
          ))}
        </StyledFlex>
        <StyledFlex>
          {timelines.slice(3, 6).map((timeline) => (
            <TimelineWrapper
              {...{ headerBg, bodyBg, iconColor: timeline.iconColor }}
              key={timeline.headerText}
              className="s"
            >
              <section className="timeline">
                <div className="timeline__header">
                  <HeaderIcon />
                  <h4 className="timeline__header--text">
                    {timeline.headerText}
                  </h4>
                </div>
                <ul className="timeline__body">
                  {timeline.list.map((listItem) => (
                    <li className="timeline__body--text" key={listItem}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </section>
            </TimelineWrapper>
          ))}
        </StyledFlex>
      </section>
    </Wrapper>
  );
};

export default Timeline1;

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

    .first-abs,
    .second-abs {
      position: absolute;
      z-index: 0;
      height: 200%;
      margin-top: -150px;
    }

    .first-abs {
      left: 30%;
    }

    .second-abs {
      right: 34%;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: 960px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1304px) {
    margin-bottom: 40px;
  }
  position: relative;
  z-index: 5;

  &:nth-child(2) {
    margin-bottom: 20px;
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
  width: 33%;
  display: flex;
  justify-content: center;
  margin: 32px 0;
  @media screen and (min-width: 880px) {
    margin: 40px 0;
  }
  @media screen and (min-width: 1024px) {
    margin: 48px 0;
  }
  @media screen and (min-width: 1200px) {
    margin: 56px 0;
  }

  .timeline {
    background: ${({ bodyBg }) => bodyBg};
    border-radius: 20px;
    width: 380px;
    max-width: 90%;

    &__header {
      background: ${({ headerBg }) => headerBg};
      padding: 22px 28px;
      border-radius: 10px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 12px;
        /* color: red; */

        & * {
          color: ${({ iconColor }) => iconColor};
        }
      }

      &--text {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 133%;

        @media screen and (min-width: 1024px) {
          font-size: 1.8rem;
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
