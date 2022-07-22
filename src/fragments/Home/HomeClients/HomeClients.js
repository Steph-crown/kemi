import React from "react";
import { HomeClientsWrapper, Flex } from "./styles";
import { Components } from "../../../components";
import { svgs } from "../../../assets/svgs";
import { pngs } from "../../../assets/pngs";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;
const { QuoteIcon, ArrowIcon } = svgs;
const { avatar } = pngs;

const HomeClients = () => {
  return (
    <HomeClientsWrapper>
      <section className="container__sub container__banner">
        <header>
          <h1>MY CLIENTS</h1>
          <aside className="slider-btns md-flex">
            <button>
              <ArrowIcon />
            </button>
            <button>
              <ArrowIcon />
            </button>
          </aside>
        </header>
        <Flex>
          <div className="about">
            <section className="client">
              <div className="client__comment">
                <QuoteIcon />
                <div>
                  <p>
                    I had the privilege of working with Kemi as part of the 2021
                    winter cohort for @co.lab. As the Product manager on the
                    team, I shared the vision of the problem we aimed to solve
                    and found Kemi to be an excellent resource. Kemi offered
                    design driven insights while immersing herself into the
                    problem space. She is a seasoned and creative designer who
                    always aims to understand the needs of the user. Kemi worked
                    with the team to designed a beautiful product and I'm sure
                    she will go on to design other great apps. I consider her to
                    be an asset to any team.
                  </p>
                  <div className="client__profile">
                    <p>DORCAS DARIYA</p>
                    <img src={avatar} alt="Dorcas Dariya" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="btn-group">
            <ArrowButton themeColor={"var(--blue)"} smFull={true} width="272px">
              BECOME A CLIENT
            </ArrowButton>
          </div>
        </Flex>
      </section>
    </HomeClientsWrapper>
  );
};

export default HomeClients;
