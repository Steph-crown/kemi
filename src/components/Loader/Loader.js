import React from "react";
import { LoaderIcon } from "react-hot-toast";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <LoaderIcon />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .go1858758034 {
    width: 40px;
    height: 40px;
  }
`;
