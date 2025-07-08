import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import styled, { keyframes } from 'styled-components';
import Logo from '@/components/logo/Logo';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <StyledLoadingScreen>
                <StyledLoadingContent>
                    <StyledAnimatedLogo>
                        <Logo width={60} height={60} />
                    </StyledAnimatedLogo>
                    <StyledLoadingText>
                        <h2>Mendam</h2>
                        <p>Loading your workspace...</p>
                    </StyledLoadingText>
                    <StyledProgressBar>
                        <StyledProgress />
                    </StyledProgressBar>
                </StyledLoadingContent>
            </StyledLoadingScreen>
        );
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledLoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const StyledLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const StyledAnimatedLogo = styled.div`
  animation: ${pulse} 2s ease-in-out infinite;
  
  svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
`;

const StyledLoadingText = styled.div`
  text-align: center;
  color: white;

  h2 {
    font-size: var(--text-xxl);
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
  }

  p {
    font-size: var(--text-md);
    opacity: 0.9;
    font-weight: 400;
  }
`;

const StyledProgressBar = styled.div`
  width: 200px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
`;

const StyledProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e0e7ff);
  border-radius: 3px;
  animation: ${progressAnimation} 2s ease-in-out infinite;
`;