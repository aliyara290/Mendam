import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/logo/Logo';
import Button from '@/components/app/ui/button/Button';
import Loader from '@/components/app/ui/Loader';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (formData.username.length > 20) {
      newErrors.username = 'Username cannot exceed 20 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Full name validation
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length > 50) {
      newErrors.fullName = 'Full name cannot exceed 50 characters';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
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

    setIsLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
      navigate('/app/@me');
    } catch (error: any) {
      if (error.response?.data?.message) {
        setErrors({ general: error.response.data.message });
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '') && 
                     formData.password === formData.confirmPassword &&
                     Object.keys(errors).length === 0;

  return (
    <StyledRegisterPage>
      <StyledRegisterContainer>
        <StyledRegisterCard>
          <StyledHeader>
            <Logo />
            <StyledTitle>
              <h1>Create an account</h1>
              <p>Join Mendom and start connecting with your team!</p>
            </StyledTitle>
          </StyledHeader>

          <StyledForm onSubmit={handleSubmit}>
            {errors.general && (
              <StyledError>
                <span>{errors.general}</span>
              </StyledError>
            )}

            <StyledInputGroup>
              <StyledLabel htmlFor="username">
                Username <span>*</span>
              </StyledLabel>
              <StyledInput
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter your username"
                hasError={!!errors.username}
              />
              {errors.username && <StyledFieldError>{errors.username}</StyledFieldError>}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="email">
                Email <span>*</span>
              </StyledLabel>
              <StyledInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter your email"
                hasError={!!errors.email}
              />
              {errors.email && <StyledFieldError>{errors.email}</StyledFieldError>}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="fullName">
                Full Name <span>*</span>
              </StyledLabel>
              <StyledInput
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder="Enter your full name"
                hasError={!!errors.fullName}
              />
              {errors.fullName && <StyledFieldError>{errors.fullName}</StyledFieldError>}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="password">
                Password <span>*</span>
              </StyledLabel>
              <StyledPasswordInput>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Enter your password"
                  hasError={!!errors.password}
                />
                <StyledPasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </StyledPasswordToggle>
              </StyledPasswordInput>
              {errors.password && <StyledFieldError>{errors.password}</StyledFieldError>}
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledLabel htmlFor="confirmPassword">
                Confirm Password <span>*</span>
              </StyledLabel>
              <StyledPasswordInput>
                <StyledInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Confirm your password"
                  hasError={!!errors.confirmPassword}
                />
                <StyledPasswordToggle
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </StyledPasswordToggle>
              </StyledPasswordInput>
              {errors.confirmPassword && <StyledFieldError>{errors.confirmPassword}</StyledFieldError>}
            </StyledInputGroup>

            <StyledSubmitButton>
              {isLoading ? (
                <StyledLoaderWrapper>
                  <Loader />
                  <span>Creating account...</span>
                </StyledLoaderWrapper>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  title="Continue"
                  disabled={isLoading || !isFormValid}
                />
              )}
            </StyledSubmitButton>

            <StyledLoginLink>
              Already have an account? <Link to="/login">Log In</Link>
            </StyledLoginLink>
          </StyledForm>
        </StyledRegisterCard>
      </StyledRegisterContainer>
    </StyledRegisterPage>
  );
};

export default RegisterPage;

const StyledRegisterPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const StyledRegisterContainer = styled.div`
  width: 100%;
  max-width: 520px;
`;

const StyledRegisterCard = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 1.6rem;
  padding: 4rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StyledTitle = styled.div`
  h1 {
    font-size: var(--text-xxl);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  p {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1.4;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLabel = styled.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`;

interface StyledInputProps {
  hasError?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 4.5rem;
  padding: 0 1.5rem;
  border: 1px solid ${({ hasError, theme }) => hasError ? '#ef4444' : theme.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => hasError ? '#ef4444' : 'var(--blue)'};
    box-shadow: 0 0 0 3px ${({ hasError }) => hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(36, 146, 194, 0.1)'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledPasswordToggle = styled.button`
  position: absolute;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.placeholder};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }

  svg {
    width: 2rem;
    height: 2rem;
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

const StyledSubmitButton = styled.div`
  margin-top: 1rem;
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.text.secondary};

  span {
    font-size: var(--text-md);
  }
`;

const StyledLoginLink = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-sm);

  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;