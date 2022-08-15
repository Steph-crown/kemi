import React from "react";
import { Flex, ServicesWrapper, ServicesSection } from "./styles";
import { Components } from "../../../components";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const {
  Buttons: { ArrowButton },
} = Components;
const { ArrowBlackIcon } = svgs;

const Services = () => {
  return (
    <ServicesWrapper>
      <section className="container__sub container__banner">
        <Flex>
          <div className="flex__content">
            <div className="about">
              <small>SERVICED INDUSTRIES</small>
              <p>
                I combine human empathy, research and intelligent data to
                provide the highest level of satisfaction for organizations and
                their users.
              </p>
              <ArrowButton
                themeColor={"var(--blue)"}
                smFull={true}
                width="272px"
                className={"md-hide"}
              >
                SERVICED INDUSTRIES
              </ArrowButton>
            </div>
            <ServicesSection>
              <div className="services__list">
                <div className="services__list--item m-2">
                  <header className="services__list--item__header">
                    <h2>Fintech</h2>
                    <button>
                      <ArrowBlackIcon />
                    </button>
                  </header>
                  <p className="services__list--item__body">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </p>
                </div>
                <div className="services__list--item m-8">
                  <header className="services__list--item__header">
                    <h2>E-commerce</h2>
                    <button>
                      <ArrowBlackIcon />
                    </button>
                  </header>
                  <p className="services__list--item__body">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </p>
                </div>
              </div>
              <div className="services__list">
                <div className="services__list--item m-8">
                  <header className="services__list--item__header">
                    <h2>Blockchain</h2>
                    <button>
                      <ArrowBlackIcon />
                    </button>
                  </header>
                  <p className="services__list--item__body">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </p>
                </div>
                <div className="services__list--item m-6">
                  <header className="services__list--item__header">
                    <h2>Logistics</h2>
                    <button>
                      <ArrowBlackIcon />
                    </button>
                  </header>
                  <p className="services__list--item__body">
                    We design smart, in-demand financial solutions, delighting
                    your audience with innovations in the finance sector.
                    Putting end-users at the forefront and creating a high-end
                    experience, we improve your business metrics.
                  </p>
                </div>
              </div>
            </ServicesSection>
          </div>
          <div className="btn-group">
            <ArrowButton themeColor={"var(--blue)"} smFull={true} width="272px">
              SERVICED INDUSTRIES
            </ArrowButton>
          </div>
        </Flex>
      </section>
    </ServicesWrapper>
  );
};

export default Services;
