import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/logo/Logo';
import Button from '@/components/app/ui/button/Button';
import Loader from '@/components/app/ui/Loader';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login({ email: email, password: password });
            navigate('/app/@me');
        } catch (error: any) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledLoginPage>
            <StyledLoginContainer>
                <StyledLoginCard>
                    <StyledHeader>
                        <Logo />
                        <StyledTitle>
                            <h1>Welcome back!</h1>
                            <p>We're so excited to see you again!</p>
                        </StyledTitle>
                    </StyledHeader>

                    <StyledForm onSubmit={handleSubmit}>
                        {error && (
                            <StyledError>
                                <span>{error}</span>
                            </StyledError>
                        )}

                        <StyledInputGroup>
                            <StyledLabel htmlFor="email">
                                Email <span>*</span>
                            </StyledLabel>
                            <StyledInput
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="Enter your email"
                            />
                        </StyledInputGroup>

                        <StyledInputGroup>
                            <StyledLabel htmlFor="password">
                                Password <span>*</span>
                            </StyledLabel>
                            <StyledPasswordInput>
                                <StyledInput
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    placeholder="Enter your password"
                                />
                                <StyledPasswordToggle
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isLoading}
                                >
                                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                </StyledPasswordToggle>
                            </StyledPasswordInput>
                        </StyledInputGroup>

                        <StyledForgotPassword>
                            <Link to="/forgot-password">Forgot your password?</Link>
                        </StyledForgotPassword>

                        <StyledSubmitButton>
                            {isLoading ? (
                                <StyledLoaderWrapper>
                                    <Loader />
                                    <span>Signing in...</span>
                                </StyledLoaderWrapper>
                            ) : (
                                <Button
                                full
                                    type="submit"
                                    variant="primary"
                                    title="Log In"
                                    disabled={isLoading || !email || !password}
                                />
                            )}
                        </StyledSubmitButton>

                        <StyledRegisterLink>
                            Need an account? <Link to="/auth/register">Register</Link>
                        </StyledRegisterLink>
                    </StyledForm>
                </StyledLoginCard>
            </StyledLoginContainer>
        </StyledLoginPage>
    );
};

export default LoginPage;

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--blue) 0%, #320460 100%);
  padding: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/auth__lines-bg.png");
    background-position: center;
    background-size: cover;
    opacity: .5;
  }
`;

const StyledLoginContainer = styled.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 45678;
`;

const StyledLoginCard = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
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
    font-size: var(--text-xl);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  p {
    font-size: var(--text-base);
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1.4;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  color: ${({ theme }) => theme.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 4.5rem;
  padding: 0 1.5rem;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--blue);
    /* box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1); */
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

const StyledForgotPassword = styled.div`

  a {
    color: var(--blue);
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
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

const StyledRegisterLink = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-base);
  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;