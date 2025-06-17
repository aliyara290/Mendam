import React from "react";
import styled from "styled-components";

interface ChannelHeaderProps {}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({}) => {
  return (
    <>
      <StyledChannelHeader></StyledChannelHeader>
    </>
  );
};

export default ChannelHeader;

const StyledChannelHeader = styled.header`
  width: 100%;
  height: 8rem;
`;
