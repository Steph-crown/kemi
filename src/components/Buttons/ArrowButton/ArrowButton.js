// imports
import React from "react";
import { ArrowButtonWrapper } from "./styles";
import { svgs } from "../../../assets/svgs";

// Destructure imports
const { ArrowIcon } = svgs;

const ArrowButton = ({
  children,
  themeColor,
  width,
  smFull,
  className,
  ...rest
}) => {
  return (
    <ArrowButtonWrapper
      themeColor={themeColor}
      width={width}
      smFull={smFull}
      className={className}
      {...rest}
    >
      {children}
      <ArrowIcon />
    </ArrowButtonWrapper>
  );
};

export default ArrowButton;
