import React from "react";
import styled from "styled-components";

const Goal = ({ goal, role, goalBg }) => {
  const clickMe = () => {
    // let a = fetch("https://jsonplaceholder.typicode.com/posts/1");
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    ])
      .then(([items, contactlist, itemgroup]) => {
        console.log("yooooo");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper goalBg={goalBg}>
      <section className="container__sub container__banner">
        <h3 className="goal__header">MY GOAL</h3>
        <div className="goal__container">
          <p className="goal__text">{goal}</p>
          <div className="goal__role">
            <h6 className="goal__role--header">MY ROLE</h6>
            <p className="goal__role--text">{role}</p>
          </div>
          <button onClick={clickMe}>Click me</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Goal;

const Wrapper = styled.section.attrs({
  className: "container",
})`
  .container {
    &__banner {
      padding-top: 40px;
      padding-bottom: 40px;
      /* border-bottom: 1.2px solid rgba(206, 230, 255, 0.8); */

      @media screen and (min-width: 600px) {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      @media screen and (min-width: 1024px) {
        padding-top: 82px;
        padding-bottom: 82px;
      }
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  * {
    color: var(--white);

    span {
      color: var(--white);
    }

    h1 {
      margin-bottom: 0;
    }
  }

  .goal {
    &__header {
      font-weight: 500;
      line-height: 160%;
      color: #cee6ff;
      font-size: 1.6rem;
      @media screen and (min-width: 600px) {
        font-size: 1.8rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 2rem;
      }
    }
    &__container {
      margin-top: 1.6rem;
      width: 100%;

      @media screen and (min-width: 880px) {
        max-width: 72%;
        margin-top: 0;
      }
    }

    &__text {
      font-weight: 400;
      line-height: 145%;
      font-size: 2.4rem;

      @media screen and (min-width: 600px) {
        font-size: 2.8rem;
      }
      @media screen and (min-width: 800px) {
        font-size: 3.2rem;
        margin-bottom: 0.8rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3.6rem;
      }
      @media screen and (min-width: 1200px) {
        font-size: 4rem;
      }
    }

    &__role {
      margin-top: 48px;
      flex-wrap: wrap;
      background-color: ${({ goalBg }) => goalBg};
      width: fit-content;
      max-width: 100%;
      padding: 14px 36px 26px 36px;
      border-radius: 20px;

      &--header {
        font-weight: 500;
        line-height: 133%;
        font-size: 1.4rem;
        @media screen and (min-width: 880px) {
          font-size: 1.6rem;
        }
        @media screen and (min-width: 1024px) {
          font-size: 1.8rem;
        }
      }
      &--text {
        font-weight: 400;
        line-height: 155%;
        font-size: 1.4rem;
        max-width: 309px;
        margin-top: 12px;
        @media screen and (min-width: 880px) {
          font-size: 1.6rem;
        }
        @media screen and (min-width: 1024px) {
          font-size: 1.8rem;
        }
      }
    }

    &__tag {
      font-weight: 400;
      line-height: 181%;
      font-size: 1.8rem;
      padding: 8px 40px;
      border: 1.3px solid #cee6ff;
      border-radius: 50px;
      margin-bottom: 16px;
      margin-right: 16px;
      @media screen and (min-width: 600px) {
        font-size: 2.4rem;
        margin-right: 18px;
      }
      @media screen and (min-width: 800px) {
        font-size: 2.8rem;
        margin-right: 20px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 3rem;
        margin-right: 24px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 3.2rem;
      }
    }
  }
`;
