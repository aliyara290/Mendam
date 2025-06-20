import React from "react";
import styled from "styled-components";

interface GroupHeaderProps {}

const GroupHeader: React.FC<GroupHeaderProps> = ({}) => {
  return (
    <>
      <StyledGroupHeader></StyledGroupHeader>
    </>
  );
};

export default GroupHeader;

const StyledGroupHeader = styled.header`
  width: 100%;
  height: 8rem;
`;
