import React from "react";
import { HomeClientsWrapper, Flex } from "./styles";
import { Components } from "../../../components";
import { svgs } from "../../../assets/svgs";
import { pngs } from "../../../assets/pngs";
import { Link } from "react-router-dom";
import { testimonials } from "../../../data/testimonials";
import { avatars } from "../../../assets/pngs/avatars";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;
const { QuoteIcon, ArrowIcon } = svgs;

const HomeClients = () => {
  const [index, setIndex] = React.useState(0),
    handleBackClick = () => {
      setIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
    },
    handleForwardClick = () => {
      setIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
    };

  return (
    <HomeClientsWrapper>
      <section className="container__sub container__banner">
        <header>
          <h1>MY CLIENTS</h1>
          <aside className="slider-btns md-flex">
            <button onClick={handleBackClick}>
              <ArrowIcon />
            </button>
            <button onClick={handleForwardClick}>
              <ArrowIcon />
            </button>
          </aside>
        </header>
        <Flex>
          <div className="about">
            <section className="client">
              <div className="client__comment">
                <QuoteIcon />
                {console.log("tu", testimonials[index])}
                <div>
                  <p>{testimonials[index].comment}</p>
                  <div className="client__profile">
                    <p>{testimonials[index].name}</p>
                    <img src={avatars[index]} alt={testimonials[index].name} />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="btn-group">
            <a href="/#contact">
              <ArrowButton
                themeColor={"var(--blue)"}
                smFull={true}
                width="272px"
              >
                BECOME A CLIENT
              </ArrowButton>
            </a>
          </div>
        </Flex>
      </section>
    </HomeClientsWrapper>
  );
};

export default HomeClients;
