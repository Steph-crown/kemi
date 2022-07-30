import styled from "styled-components";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const { ArrowBlackIcon } = svgs;

const Study = ({ thumbnail, title, link, desc, type }) => {
  return (
    <Wrapper link={link}>
      <div className="proj__image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="proj__content">
        <div className="proj__content-top">
          <header className="proj__content--header">
            <h3>{title}</h3>
            <button>
              <ArrowBlackIcon />
            </button>
          </header>
          <p className="proj__content--body">{desc}</p>
        </div>
        <p className="proj__content--tag">{type}</p>
      </div>
    </Wrapper>
  );
};

export default Study;

const Wrapper = styled.a.attrs(({ link }) => ({
  href: link,
  target: "_blank",
  rel: "noreferrer",
}))`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(183, 183, 183, 0.3);
  padding-top: 40px;
  padding-bottom: 24px;

  @media screen and (min-width: 880px) {
    flex-direction: row-reverse;
    padding-top: 0;
    padding-bottom: 0;
    &:first-child {
      border-top: none;
    }

    & > * {
      width: 100%;
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
        padding: 32px 24px;
        img {
          height: 320px;
        }
      }
      @media screen and (min-width: 960px) {
        padding: 46px 34px;
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

      @media screen and (min-width: 880px) {
        padding: 32px 24px;
        border-right: 1px solid rgba(183, 183, 183, 0.3);
      }
      @media screen and (min-width: 1024px) {
        padding: 46px 34px;
      }

      &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
        margin-bottom: 24px;

        @media screen and (min-width: 880px) {
          margin-top: 0px;
          margin-bottom: 24px;
        }
        @media screen and (min-width: 1024px) {
          margin-bottom: 32px;
        }

        h3 {
          font-weight: 600;
          font-size: 2rem;
          line-height: 2.4rem;
          color: var(--white);

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

      &--tag {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2.2rem;
        color: var(--white);
        margin-top: 16px;
      }
    }
  }
`;
