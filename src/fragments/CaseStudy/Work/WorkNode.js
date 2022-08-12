import styled from "styled-components";
import Timelines from "../../../components/Timelines";

const WorkNode = ({ workNode, name }) => {
  const { Timeline1, Timeline2, Timeline3 } = Timelines;
  return (
    <Wrapper>
      {(() => {
        if (name === "arthub" || name === "altride") {
          return <Timeline1 {...{ workNode, name }} />;
        } else if (name === "gxpay") {
          return <Timeline2 {...{ workNode: workNode.workNode, name }} />;
        } else if (name === "utext") {
          return <Timeline3 {...{ workNode, name }} />;
        } else {
          return null;
        }
      })()}
    </Wrapper>
  );
};

export default WorkNode;

const Wrapper = styled.section``;
