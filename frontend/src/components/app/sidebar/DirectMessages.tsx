import React from "react";
import styled from "styled-components";

interface DirectMessagesProps {}

const DirectMessages: React.FC<DirectMessagesProps> = ({}) => {
  return (
    <>
      <StyledDirectMess></StyledDirectMess>
    </>
  );
};

export default DirectMessages;

const StyledDirectMess = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
