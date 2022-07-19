// Imports
import React from "react";
import { HomeWrapper } from "./styles";
import { Components } from "../../components";

// Destructure imports
const { Navbar } = Components;

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <h1>Home</h1>
    </HomeWrapper>
  );
};

export default Home;
