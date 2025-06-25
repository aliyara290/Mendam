import { ChevronRightIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

interface QuickProfileProps {
  isOpen: boolean;
  shouldAnimate: boolean;
  onClose: () => void;
}

const QuickProfile: React.FC<QuickProfileProps> = ({
  isOpen,
  shouldAnimate,
  onClose,
}) => {
  // if (!isOpen) {
  //   return null;
  // }
  return (
    <>
      <StyledQuickProfile isOpen={isOpen} shouldAnimate={shouldAnimate}>
        <StyledPortfolioCover>
          <StyledAvatar>
            <StyledAvatarPic>
              <StyledAvatarPicContent>
                <img
                  src="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                  alt=""
                />
              </StyledAvatarPicContent>
            </StyledAvatarPic>
            <StyledAvatarName>
              <h4>Ali Yara</h4>
              <span>@aliyara290</span>
            </StyledAvatarName>
          </StyledAvatar>
        </StyledPortfolioCover>
        <StyledOptions>
          <StyledOptionsContainer>
            <StyledOptionItem>
              <StyledLeftPart>
                <StyledOptionName>Edit profile</StyledOptionName>
              </StyledLeftPart>
              {/* <StyledRightPart>
                <StyledIcon>
                  <ChevronRightIcon />
                </StyledIcon>
              </StyledRightPart> */}
            </StyledOptionItem>
            <StyledLine />
            <StyledOptionItem>
              <StyledLeftPart>
                <StyledOptionIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                      fill="#43a25a"
                    />
                  </svg>
                </StyledOptionIcon>
                <StyledOptionName>online</StyledOptionName>
              </StyledLeftPart>
              <StyledRightPart>
                <StyledIcon>
                  <ChevronRightIcon />
                </StyledIcon>
              </StyledRightPart>
            </StyledOptionItem>
          </StyledOptionsContainer>
        </StyledOptions>
      </StyledQuickProfile>
    </>
  );
};

export default QuickProfile;

interface StyledQuickProfileProps {
  isOpen: boolean;
  shouldAnimate: boolean;
}

const StyledQuickProfile = styled.div<StyledQuickProfileProps>`
  position: absolute;
  left: 1.5rem;
  top: ${({ isOpen }) => (isOpen ? "-31rem" : "31rem")};
  width: 25rem;
  /* height: 30rem; */
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  z-index: 456566;
  overflow: hidden;
    border: 1px solid ${({ theme }) => theme.border.primary};

  transition: ${({ shouldAnimate }) =>
    shouldAnimate ? "top 0.3s ease" : "none"};
`;

const StyledPortfolioCover = styled.div`
  width: 100%;
  height: 8rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 11rem;
`;
const StyledAvatar = styled.div`
  position: absolute;
  bottom: -9rem;
  left: 2rem;
  /* transform: translateX(-50%); */
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;
const StyledAvatarPic = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 0.8rem;
  position: relative;
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
  align-items: start;
  gap: 0.4rem;
  h4 {
    font-size: var(--text-xl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
  span {
    font-size: var(--text-sm);
    line-height: 1;
    color: ${({ theme }) => theme.text.thirdly};
  }
`;

const StyledOptions = styled.div`
  width: 100%;
  padding: 1rem;
  user-select: none;
`;
const StyledOptionsContainer = styled.div`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const StyledOptionItem = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;
const StyledOptionName = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.thirdly};
  line-height: 1;
`;
const StyledOptionIcon = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 1px;
`;
const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.border.secondary};
  opacity: 0.3;
`;
const StyledLeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StyledRightPart = styled.div`
  width: max-content;
`;
const StyledIcon = styled.div`
  svg {
    width: 1.6rem;
    color: ${({ theme }) => theme.text.placeholder};
  }
`;
