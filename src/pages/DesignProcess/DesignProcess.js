// Imports
import React from "react";
import { Components } from "../../components";
import { DesignProcessWrapper } from "./styles";

// Destructure imports
const { Navbar } = Components;

const DesignProcess = () => {
  return (
    <DesignProcessWrapper>
      <Navbar />
      <h1>DesignProcess</h1>
    </DesignProcessWrapper>
  );
};

export default DesignProcess;
