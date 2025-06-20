import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import { HashtagIcon } from "@heroicons/react/24/solid";
// import { PlusIcon } from "@heroicons/react/24/outline";
import { type GroupProps } from "@/types/Group";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, PlusIcon } from "@heroicons/react/16/solid";

const Channel: React.FC = () => {
  const [groupData, setGroupData] = useState<GroupProps | null>({
    id: "234567834567",
    name: "Heisenberg",
    teams: [
      {
        id: "34567876543",
        name: "Frontend Team",
        channels: [
          { id: "chan-fe-gen", name: "general" },
          { id: "chan-fe-ui", name: "ui-design" },
          { id: "chan-fe-bugs", name: "bug-reports" },
        ],
      },
      {
        id: "456787654567",
        name: "Backend Team",
        channels: [
          { id: "chan-be-gen", name: "general" },
          { id: "chan-be-api", name: "api-development" },
          { id: "chan-be-db", name: "database" },
        ],
      },
      {
        id: "789012345678",
        name: "DevOps Team",
        channels: [
          { id: "chan-do-gen", name: "general" },
          { id: "chan-do-deploy", name: "deployment" },
          { id: "chan-do-test", name: "testing" },
        ],
      },
    ],
  });
  const [openedChannels, setOpenedChannels] = useState<string[]>(() => {
    try {
      const getItems = localStorage.getItem("o-c");
      if (getItems) {
        return JSON.parse(getItems);
      }
      return groupData?.teams.map((team) => team.id) || [];
    } catch (error) {
      console.warn("Error reading from localStorage:", error);
      return groupData?.teams.map((team) => team.id) || [];
    }
  });

  const handleChannelToggle = (id: string) => {
    setOpenedChannels((prev) => {
      const newChannels = prev.includes(id)
        ? prev.filter((channelId) => channelId !== id)
        : [...prev, id];
      try {
        localStorage.setItem("o-c", JSON.stringify(newChannels));
      } catch (error) {
        console.warn("Error saving to localStorage:", error);
      }
      return newChannels;
    });
  };
  return (
    <StyledChannel>
      <StyledTopHeader>
        <Heading title={`${groupData?.name}`} heading="h3" />
        <SearchBar placeholder="Search in Heisenberg group" />
      </StyledTopHeader>
      <StyledTeamsContent>
        <StyledTeamsList>
          {groupData?.teams.map((team) => (
            <StyledTeam key={team.id}>
              <StyledTeamsHeading onClick={() => handleChannelToggle(team.id)}>
                <StyledPart>
                  <StyledTeamName>
                    <span>{team.name}</span>
                  </StyledTeamName>
                  <StyledChevron>
                    <ChevronUpIcon />
                  </StyledChevron>
                </StyledPart>
                <StyledIconsPart>
                  <StyledChevron>
                    <Cog6ToothIcon />
                  </StyledChevron>
                  <StyledChevron>
                    <PlusIcon />
                  </StyledChevron>
                </StyledIconsPart>
              </StyledTeamsHeading>
              {openedChannels.includes(team.id) && (
                <StyledTeamChannel>
                  <StyledTeamChannelList>
                    {team.channels.map((channel) => (
                      <StyledChannelItem key={channel.id}>
                        <StyledChannelContainer>
                          <StyledChannelPart>
                            <HashtagIcon />
                            <span>{channel.name}</span>
                          </StyledChannelPart>
                          <StyledChannelPart>
                            <StyledChevron>
                              <Cog6ToothIcon />
                            </StyledChevron>
                          </StyledChannelPart>
                        </StyledChannelContainer>
                      </StyledChannelItem>
                    ))}
                  </StyledTeamChannelList>
                </StyledTeamChannel>
              )}
            </StyledTeam>
          ))}
        </StyledTeamsList>
      </StyledTeamsContent>
    </StyledChannel>
  );
};

export default Channel;

const StyledChannel = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const StyledTopHeader = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
`;

const StyledTeamsContent = styled.div`
  width: 100%;
  padding: 0 1.5rem 1.5rem;
`;

const StyledTeamsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledIconsPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    visibility: hidden;
    &:hover {
      color: ${({ theme }) => theme.text.primary};
    }
  }
`;

const StyledTeam = styled.li`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  overflow: hidden;
  &:hover svg {
    visibility: visible;
  }
`;
const StyledPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const StyledChevron = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  svg {
    width: 1.5rem;
    transition: rotate 0.2s ease;
  }
`;
const StyledTeamsHeading = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  svg {
    rotate: 180deg;
  }
`;
const StyledTeamName = styled.div`
  span {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.thirdly};
  }
  svg {
    width: 2rem;
  }
`;

const StyledPlusIcon = styled.div`
  svg {
    width: 2rem;
  }
`;
const StyledTeamChannel = styled.div`
  padding: 0.8rem;
`;
const StyledTeamChannelList = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
`;
const StyledChannelItem = styled.li`
  list-style-type: none;
`;

const StyledChannelContainer = styled.a`
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  span {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.thirdly};
  }
  svg {
    width: 1.5rem;
    color: ${({ theme }) => theme.text.thirdly};
    &:last-child {
      visibility: hidden;
      &:hover {
        color: ${({ theme }) => theme.text.primary};
      }
    }
  }
  &:hover svg {
    visibility: visible;
  }
`;

const StyledChannelPart = styled.a`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
