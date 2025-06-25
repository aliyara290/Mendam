import React from "react";
import styled from "styled-components";
import Button from "../../ui/button/Button";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useSettings } from "@/contexts/openSettingContext";
import Heading from "../heading/Heading";


const Profile: React.FC = ({ }) => {
  const { setOpenSettings } = useSettings();

  return (
    <>
      <StyledProfile>
        <Heading onClick={() => setOpenSettings(false)} title="Profile" />

        <StyledProfileContent>
          <StyledLeftPart>
            <StyledUpdateAvatar>
              <StyledUpdateAvatarContent htmlFor={"upload-image"}>
                <CameraIcon />
                <span>Update Avatar</span>
                <input type="file" name="upload-image" id="upload-image" />
              </StyledUpdateAvatarContent>
            </StyledUpdateAvatar>
            <StyledItemsList>
              <StyledItems>
                <StyledLabel htmlFor="display-name">Display Name</StyledLabel>
                <StyledInput
                  type="text"
                  name="display-name"
                  id="display-name"
                  value={"leibe"}
                  placeholder="Display Name"
                ></StyledInput>
              </StyledItems>
              <StyledItems>
                <StyledLabel htmlFor="job-title">Job Title</StyledLabel>
                <StyledInput
                  type="text"
                  name="job-title"
                  id="job-title"
                  value={"Full Stack Developer"}
                  placeholder="Job Title"
                ></StyledInput>
              </StyledItems>
              <StyledItems>
                <StyledLabel htmlFor="bio">Bio</StyledLabel>
                <StyledTextarea
                  name="bio"
                  id="bio"
                  value={"Passionate Software Engineer with experience in building scalable web applications and modern user interfaces. Skilled in JavaScript, TypeScript, React, and Node.js. Strong problem-solver with a focus on clean, efficient code and agile collaboration. Committed to continuous learning and delivering high-quality solutions that drive innovation and user satisfaction."}
                  placeholder="Bio..."
                ></StyledTextarea>
              </StyledItems>
              <StyledButtons>
                <StyledButtonsList>
                  <Button variant="cancel" type="button" title="Cancel" />
                  <Button disabled variant="primary" type="submit" title="Update" />
                </StyledButtonsList>
              </StyledButtons>
            </StyledItemsList>
          </StyledLeftPart>
          <StyledRightPart>
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
          </StyledRightPart>
        </StyledProfileContent>
      </StyledProfile>
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
  width: 100%;
`;

const StyledHeading = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledProfileContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  gap: 3rem;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
   @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const StyledUpdateAvatar = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;
const StyledUpdateAvatarContent = styled.label`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.placeholder};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  cursor: pointer;
  svg {
    width: 5rem;
    color: ${({ theme }) => theme.text.placeholder};
  }
  input {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
    svg {
      color: ${({ theme }) => theme.text.thirdly};
    }
  }
`;
const StyledLeftPart = styled.div`
  width: 100%;
`;

const StyledItemsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const StyledItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledLabel = styled.label`
  line-height: 1;
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.secondary};
`;
const StyledInput = styled.input`
  padding: 0 1.5rem 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
`;
const StyledTextarea = styled.textarea`
  padding: 1.5rem;
  width: 100%;
  height: 10rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
`;
const StyledRightPart = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.secondary};
@media (max-width: 1000px) {
    display: none;
  }
`;

const StyledPortfolioCover = styled.div`
  width: 100%;
  height: 10rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 14rem;
`;

const StyledAvatar = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledAvatarPic = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 1rem;
  position: relative;
`;
const StyledBar = styled.div`
  width: 135%;
  height: 4rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.background.primary};
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
    font-size: var(--text-xl);
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

const StyledButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const StyledButtonsList = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
