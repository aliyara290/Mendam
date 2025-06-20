import React from "react";
import styled from "styled-components";
import ModalComponent from "../../modal/Modal";
import {
  BriefcaseIcon,
  CalendarIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface PortfolioProps {
  onClick: () => void;
  isOpen: boolean;
}

const Profile: React.FC<PortfolioProps> = ({ onClick, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <StyledPortfolio>
        <StyledPortfolioContent>
          <StyledPortfolioCover>
            <StyledAvatar>
              <StyledAvatarPic>
                <StyledAvatarPicContent>
                  <img
                    src="https://res.cloudinary.com/decjm9mmr/image/upload/v1750110103/WhatsApp_Image_2025-06-14_at_01.49.57_ba9322cc_uoefdw.jpg"
                    alt=""
                  />
                </StyledAvatarPicContent>
                <StyledBar />
              </StyledAvatarPic>
              <StyledAvatarName>
                <h4>leibe</h4>
                <span>@imanejabouji</span>
              </StyledAvatarName>
            </StyledAvatar>
          </StyledPortfolioCover>
          <StyledUserInfo>
            <StyledNavigation>
              <StyledButtonList>
                <StyledButtonListItem>Personnal infos</StyledButtonListItem>
                <StyledButtonListItem>Mutual Friends</StyledButtonListItem>
              </StyledButtonList>
            </StyledNavigation>
            <StyledPersonnalInfo>
              <StyledInfoItem>
                <StyledInfoIcon>
                  <EnvelopeIcon />
                </StyledInfoIcon>
                <StyledInfoData>ali.yara@gmail.com</StyledInfoData>
              </StyledInfoItem>
              <StyledInfoItem>
                <StyledInfoIcon>
                  <CalendarIcon />
                </StyledInfoIcon>
                <StyledInfoData>May 2023</StyledInfoData>
              </StyledInfoItem>
              <StyledInfoItem>
                <StyledInfoIcon>
                  <BriefcaseIcon />
                </StyledInfoIcon>
                <StyledInfoData>Full Stack Developer</StyledInfoData>
              </StyledInfoItem>
            </StyledPersonnalInfo>
            <StyledBio>
              <p>
                Passionate Software Engineer with experience in building
                scalable web applications and modern user interfaces. Skilled in
                JavaScript, TypeScript, React, and Node.js. Strong
                problem-solver with a focus on clean, efficient code and agile
                collaboration. Committed to continuous learning and delivering
                high-quality solutions that drive innovation and user
                satisfaction.
              </p>
            </StyledBio>
          </StyledUserInfo>
          <StyledCloseModal onClick={onClick}>
            <XMarkIcon />
          </StyledCloseModal>
        </StyledPortfolioContent>
      </StyledPortfolio>
    </>
  );
};

export default Profile;

const StyledPortfolio = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1e31;
  z-index: 234567890876543;
`;

const StyledPortfolioContent = styled.div`
  width: 100%;
  height: 50rem;
  max-width: 70rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  border-radius: 0.8rem;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  position: relative;
`;
const StyledCloseModal = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff39;
  color: ${({ theme }) => theme.text.thirdly};
  cursor: pointer;
  &:hover {
    background-color: #ffffff58;
  }
  svg {
    width: 2.2rem;
  }
`;
const StyledPortfolioCover = styled.div`
  width: 100%;
  height: 13rem;
  background: linear-gradient(35deg, var(--purple), #3c0287);
  position: relative;
  margin-bottom: 16rem;
`;
const StyledAvatar = styled.div`
  position: absolute;
  bottom: -14rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const StyledAvatarPic = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.thirdly};
  padding: 1rem;
  position: relative;
`;
const StyledBar = styled.div`
  width: 135%;
  height: 7rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const StyledAvatarPicContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 20% 10%;
  }
`;

const StyledAvatarName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  h4 {
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
  span {
    font-size: var(--text-md);
    line-height: 1;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledUserInfo = styled.div`
  width: 100%;
  max-height: 19rem;
  overflow: auto;
`;
const StyledNavigation = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.background.thirdly};
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  margin: 0 2rem;
  position: sticky;
  top: 0;
`;
const StyledButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* padding-bottom: 1rem; */
`;
const StyledButtonListItem = styled.li`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.thirdly};
  padding: 1rem 0;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
  &:first-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text.thirdly};
  }
`;
const StyledPersonnalInfo = styled.div`
  display: flex;
  align-items: centere;
  justify-content: space-between;
  padding: 2rem;
  /* border-bottom: 1px solid ${({ theme }) => theme.border.secondary}; */
`;
const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledInfoIcon = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  svg {
    width: 2rem;
  }
`;
const StyledInfoData = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  font-size: var(--text-md);
`;
const StyledBio = styled.div`
  padding: 0 2rem 0;
  p {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.thirdly};
  }
`;
