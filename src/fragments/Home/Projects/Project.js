import styled from "styled-components";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const { ArrowBlackIcon } = svgs;

const Project = ({ thumbnail, title, link, desc, type }) => {
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

export default Project;

const Wrapper = styled.a.attrs(({ link }) => ({
  href: link,
  target: "_blank",
  rel: "noreferrer",
}))`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(21, 21, 21, 0.15);
  padding-top: 40px;
  padding-bottom: 24px;

  .proj {
    &__image {
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        height: 240px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
        margin-bottom: 24px;

        h3 {
          font-weight: 600;
          font-size: 2rem;
          line-height: 2.4rem;
          color: var(--black);
        }
      }

      &--body {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--body-black);
      }

      &--tag {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2.2rem;
        color: var(--body-black);
        margin-top: 16px;
      }
    }
  }
`;
