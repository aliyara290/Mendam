import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "@app/ui/button/Button";
import { CameraIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSettings } from "@/contexts/OpenSettingsContext";
import { useAuth } from "@/contexts/AuthContext";
import { authAPI } from "@/services/Api";
import Heading from "../heading/Heading";

const Profile: React.FC = () => {
  const { setOpenSettings } = useSettings();
  const { user, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    jobTitle: user?.jobTitle || '',
    biography: user?.biography || '',
  });

  const [hasChanges, setHasChanges] = useState(false);

  // Update form data when user changes
  useEffect(() => {
    if (user) {
      const newFormData = {
        fullName: user.fullName,
        jobTitle: user.jobTitle || '',
        biography: user.biography || '',
      };
      setFormData(newFormData);
    }
  }, [user]);

  // Check for changes
  useEffect(() => {
    if (user) {
      const hasFormChanges = 
        formData.fullName !== user.fullName ||
        formData.jobTitle !== (user.jobTitle || '') ||
        formData.biography !== (user.biography || '');
      setHasChanges(hasFormChanges);
    }
  }, [formData, user]);

  const handleCloseContent = () => {
    if (setOpenSettings) {
      setOpenSettings(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await authAPI.updateProfile(formData);
      
      // Merge the updated data with the existing user data
      const updatedUserData = {
        ...user,
        ...response.data.user,
        fullName: formData.fullName,
        jobTitle: formData.jobTitle,
        biography: formData.biography,
      };
      
      updateUser(updatedUserData);
      
      setSuccess('Profile updated successfully!');
      setHasChanges(false);
      
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (error: any) {
      setError(error.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        jobTitle: user.jobTitle || '',
        biography: user.biography || '',
      });
      setHasChanges(false);
      setError('');
      setSuccess('');
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a JPEG, PNG, WebP, or GIF image.');
      return;
    }

    // Validate file size (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('File too large. Please upload an image smaller than 5MB.');
      return;
    }

    setIsUploadingAvatar(true);
    setError('');

    try {
      const response = await authAPI.uploadAvatar(file);
      
      // Update user context with new avatar
      const updatedUserData = {
        ...user,
        avatar: response.data.user.avatar,
      };
      
      updateUser(updatedUserData);
      setSuccess('Avatar updated successfully!');
      
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (error: any) {
      setError(error.message || 'Failed to upload avatar');
    } finally {
      setIsUploadingAvatar(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteAvatar = async () => {
    if (!user?.avatar) return;

    if (!window.confirm('Are you sure you want to delete your avatar?')) {
      return;
    }

    setIsUploadingAvatar(true);
    setError('');

    try {
      const response = await authAPI.deleteAvatar();
      
      // Update user context to remove avatar
      const updatedUserData = {
        ...user,
        avatar: '',
      };
      
      updateUser(updatedUserData);
      setSuccess('Avatar deleted successfully!');
      
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (error: any) {
      setError(error.message || 'Failed to delete avatar');
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <StyledProfile>
      <Heading onClick={handleCloseContent} title="Profile" />

      <StyledProfileContent>
        <StyledLeftPart>
          <StyledAvatarSection>
            <StyledAvatarUpload>
              <StyledAvatarPreview onClick={handleAvatarClick}>
                {user.avatar ? (
                  <img src={user.avatar} alt={user.fullName} />
                ) : (
                  <StyledAvatarPlaceholder>
                    {user.fullName.charAt(0).toUpperCase()}
                  </StyledAvatarPlaceholder>
                )}
                <StyledAvatarOverlay>
                  <CameraIcon />
                  <span>{isUploadingAvatar ? 'Uploading...' : 'Change Avatar'}</span>
                </StyledAvatarOverlay>
              </StyledAvatarPreview>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                disabled={isUploadingAvatar}
              />
              
              <StyledAvatarActions>
                <Button
                  onClick={handleAvatarClick}
                  variant="primary"
                  title={isUploadingAvatar ? "Uploading..." : "Upload New"}
                  disabled={isUploadingAvatar}
                />
                {user.avatar && (
                  <StyledDeleteButton
                    onClick={handleDeleteAvatar}
                    disabled={isUploadingAvatar}
                  >
                    <TrashIcon />
                  </StyledDeleteButton>
                )}
              </StyledAvatarActions>
            </StyledAvatarUpload>
          </StyledAvatarSection>

          <form onSubmit={handleSubmit}>
            <StyledItemsList>
              {error && (
                <StyledMessage type="error">
                  {error}
                </StyledMessage>
              )}
              
              {success && (
                <StyledMessage type="success">
                  {success}
                </StyledMessage>
              )}

              <StyledItems>
                <StyledLabel htmlFor="fullName">Display Name</StyledLabel>
                <StyledInput
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Display Name"
                  disabled={isLoading}
                  required
                />
              </StyledItems>

              <StyledItems>
                <StyledLabel htmlFor="jobTitle">Job Title</StyledLabel>
                <StyledInput
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job Title"
                  disabled={isLoading}
                />
              </StyledItems>

              <StyledItems>
                <StyledLabel htmlFor="biography">Bio</StyledLabel>
                <StyledTextarea
                  name="biography"
                  id="biography"
                  value={formData.biography}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                  disabled={isLoading}
                />
              </StyledItems>

              <StyledButtons>
                <StyledButtonsList>
                  <Button 
                    onClick={handleCancel}
                    variant="cancel" 
                    type="button" 
                    title="Cancel"
                    disabled={isLoading || !hasChanges}
                  />
                  <Button 
                    variant="primary" 
                    type="submit" 
                    title={isLoading ? "Updating..." : "Update"}
                    disabled={isLoading || !hasChanges}
                  />
                </StyledButtonsList>
              </StyledButtons>
            </StyledItemsList>
          </form>
        </StyledLeftPart>

        <StyledRightPart>
          <StyledPortfolioCover>
            <StyledAvatar>
              <StyledAvatarPic>
                <StyledAvatarPicContent>
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.fullName} />
                  ) : (
                    <StyledRightAvatarPlaceholder>
                      {(formData.fullName || user.fullName).charAt(0).toUpperCase()}
                    </StyledRightAvatarPlaceholder>
                  )}
                </StyledAvatarPicContent>
                <StyledBar />
              </StyledAvatarPic>
              <StyledAvatarName>
                <h4>{formData.fullName || user.fullName}</h4>
                <span>@{user.username}</span>
              </StyledAvatarName>
            </StyledAvatar>
          </StyledPortfolioCover>
        </StyledRightPart>
      </StyledProfileContent>
    </StyledProfile>
  );
};

export default Profile;

// Styled components
const StyledProfile = styled.div`
  width: 100%;
`;

const StyledProfileContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 3rem;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const StyledMessage = styled.div<{ type: 'error' | 'success' }>`
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  font-weight: 500;
  
  ${({ type }) => type === 'error' && `
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    color: #dc2626;
  `}
  
  ${({ type }) => type === 'success' && `
    background-color: #d1fae5;
    border: 1px solid #a7f3d0;
    color: #065f46;
  `}
`;

const StyledLeftPart = styled.div`
  width: 100%;
`;

const StyledAvatarSection = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const StyledAvatarUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StyledAvatarPreview = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.border.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--blue);
    
    img {
      transform: scale(1.05);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const StyledAvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  color: white;
`;

const StyledAvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  
  ${StyledAvatarPreview}:hover & {
    opacity: 1;
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  
  span {
    font-size: var(--text-sm);
    font-weight: 500;
  }
`;

const StyledAvatarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledDeleteButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  background-color: ${({ theme }) => theme.background.secondary};
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #fee2e2;
    border-color: #fecaca;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
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
  font-weight: 500;
`;

const StyledInput = styled.input`
  padding: 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
  resize: vertical;
  font-size: var(--text-md);
  font-family: inherit;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledRightPart = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  border-radius: 0.8rem;
  overflow: hidden;
  
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
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const StyledRightAvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  color: white;
  background-color: var(--blue);
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