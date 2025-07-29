// frontend/src/components/home/Hero.tsx - Professional redesign
import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "@components/button/Button";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <StyledHeroContent>
        <StyledHeroLeft>
          {/* <StyledBadge>
            <StyledBadgeIcon>🚀</StyledBadgeIcon>
            <span>Now in Public Beta</span>
          </StyledBadge> */}

          <StyledMainHeading>
            <StyledGradientText>Connect</StyledGradientText> teams.
            <br />
            <StyledGradientText>Build</StyledGradientText> relationships.
            <br />
            <StyledAccentText>Achieve more.</StyledAccentText>
          </StyledMainHeading>

          <StyledSubheading>
            Experience the future of team communication with Mendam's
            AI-powered chat platform. Real-time collaboration,
            custom workflows, and seamless integration - all in one place.
          </StyledSubheading>

          <StyledCTAContainer>
            <StyledPrimaryButton>
              <Button
              bg="light"
              hoverBg="blue"
              color="blue"
              hoverColor="light"
                isLink
                href="/auth/register"
                title="Get Started"
                
              />
            </StyledPrimaryButton>

          </StyledCTAContainer>

          {/* <StyledSocialProof>
            <StyledProofText>Trusted by 10,000+ teams worldwide</StyledProofText>
            <StyledCompanyLogos>
              <StyledCompanyLogo>Microsoft</StyledCompanyLogo>
              <StyledCompanyLogo>Google</StyledCompanyLogo>
              <StyledCompanyLogo>Spotify</StyledCompanyLogo>
              <StyledCompanyLogo>Netflix</StyledCompanyLogo>
            </StyledCompanyLogos>
          </StyledSocialProof> */}
        </StyledHeroLeft>

        <StyledHeroRight>
          <StyledMockupContainer>
            <StyledMockupFrame>
              <StyledMockupHeader>
                <StyledDot color="#ff5f57" />
                <StyledDot color="#ffbd2e" />
                <StyledDot color="#28ca42" />
                <StyledMockupTitle>Mendam</StyledMockupTitle>
              </StyledMockupHeader>

              <StyledMockupContent>
                <StyledChatInterface>
                  <StyledSidebar>
                    <StyledSidebarItem active>
                      <StyledAvatar color="#6366f1" />
                      <span>Design Team</span>
                      <StyledNotification>3</StyledNotification>
                    </StyledSidebarItem>
                    <StyledSidebarItem>
                      <StyledAvatar color="#10b981" />
                      <span>Development</span>
                    </StyledSidebarItem>
                    <StyledSidebarItem>
                      <StyledAvatar color="#f59e0b" />
                      <span>Marketing</span>
                      <StyledNotification>1</StyledNotification>
                    </StyledSidebarItem>
                  </StyledSidebar>

                  <StyledChatArea>
                    <StyledMessage>
                      <StyledMessageAvatar color="#6366f1" />
                      <StyledMessageContent>
                        <StyledMessageName>Alex Designer</StyledMessageName>
                        <StyledMessageText>Just finished the new component library! 🎨</StyledMessageText>
                      </StyledMessageContent>
                    </StyledMessage>

                    <StyledMessage>
                      <StyledMessageAvatar color="#10b981" />
                      <StyledMessageContent>
                        <StyledMessageName>Sarah Dev</StyledMessageName>
                        <StyledMessageText>Amazing work! The new buttons look fantastic</StyledMessageText>
                      </StyledMessageContent>
                    </StyledMessage>

                    <StyledTypingIndicator>
                      <StyledDot color="#6366f1" />
                      <StyledDot color="#6366f1" />
                      <StyledDot color="#6366f1" />
                      <span>Mike is typing...</span>
                    </StyledTypingIndicator>
                  </StyledChatArea>
                </StyledChatInterface>
              </StyledMockupContent>
            </StyledMockupFrame>

            <StyledFloatingCard delay="0s">
              <StyledCardIcon>📊</StyledCardIcon>
              <StyledCardText>
                <strong>Team Analytics</strong>
                <span>Real-time insights</span>
              </StyledCardText>
            </StyledFloatingCard>

            <StyledFloatingCard delay="1s">
              <StyledCardIcon>🔔</StyledCardIcon>
              <StyledCardText>
                <strong>Smart Notifications</strong>
                <span>Never miss important updates</span>
              </StyledCardText>
            </StyledFloatingCard>

            <StyledFloatingCard delay="2s">
              <StyledCardIcon>🚀</StyledCardIcon>
              <StyledCardText>
                <strong>AI Assistant</strong>
                <span>Boost productivity by 40%</span>
              </StyledCardText>
            </StyledFloatingCard>
          </StyledMockupContainer>
        </StyledHeroRight>
      </StyledHeroContent>

      <StyledBackgroundElements>
        <StyledGradientOrb top="10%" left="5%" size="300px" />
        <StyledGradientOrb top="60%" right="10%" size="200px" />
        <StyledGradientOrb bottom="20%" left="20%" size="150px" />
      </StyledBackgroundElements>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.section`
  min-height: 100svh;
  padding: 8rem 3rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem 2rem;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  z-index: 2;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
  height: 100%;
  }
`;

const StyledHeroLeft = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5rem;
  padding: 0.8rem 1.6rem;
  margin-bottom: 2rem;
  font-size: var(--text-sm);
  color: white;
  font-weight: 500;
`;

const StyledBadgeIcon = styled.span`
  font-size: 1.4rem;
  animation: ${pulse} 2s infinite;
`;

const StyledMainHeading = styled.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
`;

const StyledGradientText = styled.span`
  background: linear-gradient(135deg, #ffd89b 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StyledAccentText = styled.span`
  color: #ffd89b;
`;

const StyledSubheading = styled.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
`;

const StyledCTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledPrimaryButton = styled.div`
  a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
    }
  }
`;

const StyledSecondaryButton = styled.div`
  a {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;

const StyledSocialProof = styled.div`
  opacity: 0.9;
`;

const StyledProofText = styled.p`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const StyledCompanyLogos = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledCompanyLogo = styled.div`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const StyledHeroRight = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  position: relative;
  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledMockupContainer = styled.div`
  position: relative;
  perspective: 1000px;
`;

const StyledMockupFrame = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  transform: rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotateY(0deg) rotateX(0deg);
  }
`;

const StyledMockupHeader = styled.div`
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const StyledDot = styled.div<{ color: string }>`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${props => props.color};
`;

const StyledMockupTitle = styled.div`
  font-weight: 600;
  color: #495057;
  margin-left: auto;
`;

const StyledMockupContent = styled.div`
  height: 40rem;
  background: white;
`;

const StyledChatInterface = styled.div`
  display: flex;
  height: 100%;
`;

const StyledSidebar = styled.div`
  width: 25rem;
  background: #f8f9fa;
  padding: 2rem 1rem;
  border-right: 1px solid #e9ecef;
`;

const StyledSidebarItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  background: ${props => props.active ? '#e3f2fd' : 'transparent'};
  
  span {
    font-size: var(--text-sm);
    font-weight: 500;
    color: #495057;
    flex: 1;
  }
  
  &:hover {
    background: #e9ecef;
  }
`;

const StyledAvatar = styled.div<{ color: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.color};
  flex-shrink: 0;
`;

const StyledNotification = styled.div`
  background: #ff4757;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledChatArea = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledMessage = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const StyledMessageAvatar = styled(StyledAvatar)`
  width: 4rem;
  height: 4rem;
`;

const StyledMessageContent = styled.div`
  flex: 1;
`;

const StyledMessageName = styled.div`
  font-weight: 600;
  color: #495057;
  font-size: var(--text-sm);
  margin-bottom: 0.3rem;
`;

const StyledMessageText = styled.div`
  color: #6c757d;
  font-size: var(--text-sm);
  line-height: 1.4;
`;

const StyledTypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-size: var(--text-xs);
  color: #6c757d;
  
  ${StyledDot} {
    width: 0.6rem;
    height: 0.6rem;
    animation: ${pulse} 1.5s infinite;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const StyledFloatingCard = styled.div<{ delay: string }>`
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 20rem;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  
  &:nth-child(2) {
    top: 10%;
    right: -5rem;
  }
  
  &:nth-child(3) {
    bottom: 40%;
    right: -8rem;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    right: -3rem;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledCardIcon = styled.div`
  font-size: 2.4rem;
`;

const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  strong {
    font-weight: 600;
    color: #495057;
    font-size: var(--text-sm);
  }
  
  span {
    font-size: var(--text-xs);
    color: #6c757d;
  }
`;

const StyledBackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const StyledGradientOrb = styled.div<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
}>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: -2s;
  }
  
  &:nth-child(3) {
    animation-delay: -4s;
  }
`;