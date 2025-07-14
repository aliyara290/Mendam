// frontend/src/components/app/sidebar/modals/CreateGroupModal.tsx - Updated with functionality
import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Button from "@app/ui/button/Button";
import { useGroups } from "@/contexts/GroupsContext";

interface CreateGroupModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({
  title,
  onClose,
  isOpen,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isPrivate: false,
    maxMembers: 100,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isCreating, setIsCreating] = useState(false);
  
  const { createGroup } = useGroups();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Group name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Group name must be at least 3 characters";
    } else if (formData.name.length > 100) {
      newErrors.name = "Group name cannot exceed 100 characters";
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = "Description cannot exceed 500 characters";
    }

    if (formData.maxMembers < 2) {
      newErrors.maxMembers = "Group must allow at least 2 members";
    } else if (formData.maxMembers > 1000) {
      newErrors.maxMembers = "Group cannot exceed 1000 members";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) || 0 : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsCreating(true);

    try {
      await createGroup(
        formData.name.trim(),
        formData.description.trim() || undefined,
        formData.isPrivate
      );
      
      // Reset form and close modal
      setFormData({
        name: "",
        description: "",
        isPrivate: false,
        maxMembers: 100,
      });
      setErrors({});
      onClose();
    } catch (error: any) {
      setErrors({ general: error.message || 'Failed to create group' });
    } finally {
      setIsCreating(false);
    }
  };

  const handleClose = () => {
    if (!isCreating) {
      setFormData({
        name: "",
        description: "",
        isPrivate: false,
        maxMembers: 100,
      });
      setErrors({});
      onClose();
    }
  };

  const isFormValid = formData.name.trim().length >= 3 && Object.keys(errors).length === 0;

  return (
    <ModalComponent title={title} onClose={handleClose} isOpen={isOpen}>
      <StyledCreateGroupContent>
        <form onSubmit={handleSubmit}>
          {errors.general && (
            <StyledError>
              {errors.general}
            </StyledError>
          )}

          <StyledUploadImage htmlFor="upload-group-image">
            <StyledGroupImagePreview>
              <CameraIcon />
            </StyledGroupImagePreview>
            <StyledUploadImageLabel>
              <span>Add group image (optional)</span>
            </StyledUploadImageLabel>
            <input
              type="file"
              id="upload-group-image"
              name="upload-group-image"
              accept="image/*"
              disabled={isCreating}
            />
          </StyledUploadImage>

          <StyledInputContent>
            <StyledInputLabel htmlFor="group-name">
              Group name *
            </StyledInputLabel>
            <StyledInput
              placeholder="Enter group name"
              type="text"
              name="name"
              id="group-name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isCreating}
              hasError={!!errors.name}
            />
            {errors.name && <StyledFieldError>{errors.name}</StyledFieldError>}
          </StyledInputContent>

          <StyledInputContent>
            <StyledInputLabel htmlFor="group-description">
              Description (optional)
            </StyledInputLabel>
            <StyledTextarea
              placeholder="What's this group about?"
              name="description"
              id="group-description"
              value={formData.description}
              onChange={handleInputChange}
              disabled={isCreating}
              rows={3}
              hasError={!!errors.description}
            />
            {errors.description && <StyledFieldError>{errors.description}</StyledFieldError>}
          </StyledInputContent>

          <StyledGroupSettings>
            <StyledSettingItem>
              <StyledSettingInfo>
                <StyledSettingLabel>
                  <StyledSettingIcon isPrivate={formData.isPrivate}>
                    {formData.isPrivate ? <LockClosedIcon /> : <GlobeAltIcon />}
                  </StyledSettingIcon>
                  {formData.isPrivate ? 'Private Group' : 'Public Group'}
                </StyledSettingLabel>
                <StyledSettingDescription>
                  {formData.isPrivate 
                    ? 'Only invited members can join this group'
                    : 'Anyone can discover and join this group'
                  }
                </StyledSettingDescription>
              </StyledSettingInfo>
              <StyledToggle>
                <input
                  type="checkbox"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={handleInputChange}
                  disabled={isCreating}
                />
                <StyledToggleSlider />
              </StyledToggle>
            </StyledSettingItem>

            <StyledInputContent>
              <StyledInputLabel htmlFor="max-members">
                Maximum members (2-1000)
              </StyledInputLabel>
              <StyledInput
                type="number"
                name="maxMembers"
                id="max-members"
                value={formData.maxMembers}
                onChange={handleInputChange}
                disabled={isCreating}
                min="2"
                max="1000"
                hasError={!!errors.maxMembers}
              />
              {errors.maxMembers && <StyledFieldError>{errors.maxMembers}</StyledFieldError>}
            </StyledInputContent>
          </StyledGroupSettings>

          <StyledButtons>
            <StyledButtonsList>
              <Button
                onClick={handleClose}
                variant="cancel"
                type="button"
                title="Cancel"
                disabled={isCreating}
              />
              <Button 
                variant="primary" 
                type="submit" 
                title={isCreating ? "Creating..." : "Create Group"}
                disabled={isCreating || !isFormValid}
              />
            </StyledButtonsList>
          </StyledButtons>
        </form>
      </StyledCreateGroupContent>
    </ModalComponent>
  );
};

export default CreateGroupModal;

const StyledCreateGroupContent = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

  }
`;

const StyledError = styled.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
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
  transition: all 0.2s ease;
  
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
    border-color: var(--blue);
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
  font-weight: 500;
`;

interface StyledInputProps {
  hasError?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  padding: 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ hasError, theme }) => hasError ? '#ef4444' : theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${({ hasError }) => hasError ? '#ef4444' : 'var(--blue)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledTextarea = styled.textarea<StyledInputProps>`
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ hasError, theme }) => hasError ? '#ef4444' : theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${({ hasError }) => hasError ? '#ef4444' : 'var(--blue)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledFieldError = styled.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`;

const StyledGroupSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border.secondary};
`;

const StyledSettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledSettingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const StyledSettingLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-md);
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
`;

const StyledSettingIcon = styled.div<{ isPrivate: boolean }>`
  width: 2rem;
  height: 2rem;
  color: ${({ isPrivate }) => isPrivate ? '#f59e0b' : '#10b981'};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledSettingDescription = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.4;
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 4.4rem;
  height: 2.4rem;
  cursor: pointer;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: var(--blue);
    }
    
    &:checked + span:before {
      transform: translateX(2rem);
    }
  }
`;

const StyledToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background.thirdly};
  transition: 0.2s;
  border-radius: 2.4rem;
  
  &:before {
    position: absolute;
    content: "";
    height: 1.8rem;
    width: 1.8rem;
    left: 0.3rem;
    bottom: 0.3rem;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

const StyledButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  /* border-top: 1px solid ${({ theme }) => theme.border.secondary}; */
`;

const StyledButtonsList = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;