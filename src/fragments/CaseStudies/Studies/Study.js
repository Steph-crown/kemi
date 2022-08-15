import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const { ArrowIcon, Diamond } = svgs;

const Study = ({ thumbnail, title, link, desc, tags, topics }) => {
  return (
    <Wrapper link={link}>
      <header className="proj__content--header">
        <h3>{title}</h3>
        <div className="proj__content--header-flex">
          <aside className="proj__content--topics">
            {topics.map((topic) => (
              <span key={topic}>
                <p>{topic}</p>
                <Diamond />
              </span>
            ))}
          </aside>
          <button>
            <ArrowIcon />
          </button>
        </div>
      </header>
      <section className="proj__flex">
        <div className="proj__image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="proj__content">
          <div className="proj__content-top">
            <p className="proj__content--body">{desc}</p>
          </div>
          <div className="proj__content--tags">
            {tags.map((tag) => (
              <p className="proj__content--tag">{tag}</p>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Study;

const Wrapper = styled(Link).attrs(({ link }) => ({
  to: `/case-studies${link}`,
}))`
  margin-bottom: 64px;
  display: block;

  @media screen and (min-width: 880px) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 96px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 120px;
  }

  .proj__flex {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 880px) {
      flex-direction: row;
      padding-top: 0;
      padding-bottom: 0;
      &:first-child {
        border-top: none;
      }

      & > * {
        width: 100%;
      }
    }
  }

  .proj {
    &__image {
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        height: 240px;
      }

      @media screen and (min-width: 880px) {
        padding: 0px 24px;
        img {
          height: 320px;
        }
      }
      @media screen and (min-width: 960px) {
        padding: 0px 34px;
        img {
          height: 400px;
        }
      }
      @media screen and (min-width: 1200px) {
        img {
          height: 504px;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;

      &--topics {
        display: flex;
        align-items: center;

        span {
          svg {
            margin-right: 7px;
          }
          display: flex;
          align-items: center;
          &:last-child svg {
            display: none;
          }
        }

        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 2.2rem;
          color: white;
          margin-right: 7px;

          @media screen and (min-width: 880px) {
            font-size: 1.4rem;
          }
        }
      }

      @media screen and (min-width: 880px) {
        padding: 0px 24px;
        margin-top: 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 0px 34px;
      }

      &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        padding-bottom: 12px;
        border-bottom: 1px dashed #b7b7b7;
        margin-bottom: 16px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        &-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media screen and (min-width: 880px) {
            min-width: 50%;
          }
          @media screen and (min-width: 1024px) {
            min-width: 64%;
          }
          @media screen and (min-width: 1200px) {
            min-width: 72%;
          }
        }

        @media screen and (min-width: 880px) {
          margin-left: 32px;
          margin-right: 32px;
          margin-top: 48px;
          margin-bottom: 32px;
          flex-direction: row;
        }
        @media screen and (min-width: 960px) {
          margin-left: 40px;
          margin-right: 40px;
          margin-top: 56px;
          margin-bottom: 40px;
        }
        @media screen and (min-width: 1024px) {
          margin-top: 64px;
          margin-bottom: 52px;
        }
        @media screen and (min-width: 1200px) {
          margin-top: 72px;
          margin-bottom: 52px;
        }

        h3 {
          font-weight: 600;
          font-size: 2rem;
          line-height: 2.4rem;
          color: var(--white);
          margin-bottom: 14px;

          @media screen and (min-width: 880px) {
            font-size: 2.4rem;
          }
          @media screen and (min-width: 960px) {
            font-size: 2.8rem;
          }
          @media screen and (min-width: 1100px) {
            font-size: 3.4rem;
          }
        }
      }

      &--body {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--white);

        @media screen and (min-width: 880px) {
          font-size: 1.6rem;
        }
      }

      &--tags {
        margin-bottom: 0;

        @media screen and (min-width: 880px) {
          margin-bottom: 40px;
        }
        @media screen and (min-width: 1024px) {
          margin-bottom: 64px;
        }
        @media screen and (min-width: 1200px) {
          margin-bottom: 80px;
        }
      }

      &--tag {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2.2rem;
        color: var(--white);
        margin-top: 16px;

        @media screen and (min-width: 1024px) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
