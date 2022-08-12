import styled from "styled-components";
import Timelines from "../../../components/Timelines";

const WorkNode = ({ workNode, name }) => {
  const { Timeline1 } = Timelines;
  return (
    <Wrapper>
      {(() => {
        if (name === "arthub" || name === "altride") {
          return <Timeline1 {...{ workNode, name }} />;
        } else if (name === "gxpay") {
          return;
        } else if (name === "utext") {
          return;
        } else {
          return null;
        }
      })()}
    </Wrapper>
  );
};

export default WorkNode;

const Wrapper = styled.section``;
