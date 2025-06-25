import React from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";

import { CameraIcon } from "@heroicons/react/24/outline";
import Button from "@app/ui/button/Button";

interface CreateWorkspaceProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const CreateWorkspace: React.FC<CreateWorkspaceProps> = ({
  title,
  onClose,
  isOpen,
}) => {
  return (
    <>
      <ModalComponent title={title} onClose={onClose} isOpen={isOpen}>
        <StyledCreateGroupContent>
          <StyledUploadImage htmlFor={"upload-Workspace-image"}>
            <StyledGroupImagePreview>
              <CameraIcon />
            </StyledGroupImagePreview>
            <StyledUploadImageLabel>
              <span>Add Workspace image (optional)</span>
            </StyledUploadImageLabel>
            <input
              type="file"
              id="upload-Workspace-image"
              name="upload-Workspace-image"
            />
          </StyledUploadImage>
          <StyledInputContent>
            <StyledInputLabel htmlFor="Workspace-name">
              Provide Workspace name *
            </StyledInputLabel>
            <StyledInput
              placeholder="Workspace name"
              type="text"
              name="Workspace-name"
              id="Workspace-name"
            ></StyledInput>
          </StyledInputContent>
          <StyledButtons>
            <StyledButtonsList>
              <Button
                onClick={onClose}
                variant="cancel"
                type="button"
                title="Cancel"
              />
              <Button variant="primary" type="submit" title="Create" />
            </StyledButtonsList>
          </StyledButtons>
        </StyledCreateGroupContent>
      </ModalComponent>
    </>
  );
};

export default CreateWorkspace;

const StyledCreateGroupContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledGroupImagePreview = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1.5px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.placeholder};
  svg {
    width: 2.4rem;
  }
`;

const StyledUploadImage = styled.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover ${StyledGroupImagePreview} {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const StyledUploadImageLabel = styled.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledInputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInputLabel = styled.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledInput = styled.input`
  padding: 0 1.5rem 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
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
