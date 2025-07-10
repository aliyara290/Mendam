// frontend/src/components/home/Features.tsx - Modern features section
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
  }
`;

const Features: React.FC = () => {
    const features = [
        {
            icon: "💬",
            title: "Real-time Messaging",
            description: "Lightning-fast messaging with typing indicators, read receipts, and instant delivery across all devices.",
            stats: "99.9% uptime",
            color: "#667eea"
        },
        {
            icon: "🤖",
            title: "AI-Powered Assistant",
            description: "Smart suggestions, automated summaries, and intelligent task management to boost your team's productivity.",
            stats: "40% faster workflows",
            color: "#764ba2"
        },
        {
            icon: "🔒",
            title: "Enterprise Security",
            description: "End-to-end encryption, SSO integration, and compliance with GDPR, HIPAA, and SOC 2 standards.",
            stats: "Bank-level security",
            color: "#f093fb"
        },
        {
            icon: "📊",
            title: "Advanced Analytics",
            description: "Deep insights into team performance, communication patterns, and productivity metrics.",
            stats: "Real-time insights",
            color: "#f5576c"
        },
        {
            icon: "🔗",
            title: "Seamless Integrations",
            description: "Connect with 200+ tools including Slack, Microsoft Teams, Google Workspace, and custom APIs.",
            stats: "200+ integrations",
            color: "#4facfe"
        },
        {
            icon: "📱",
            title: "Cross-Platform",
            description: "Native apps for iOS, Android, Windows, macOS, and web. Your conversations sync everywhere.",
            stats: "All platforms",
            color: "#43e97b"
        }
    ];

    return (
        <StyledFeatures id="features">
            <StyledContainer>
                <StyledHeader>
                    <StyledBadge>Features</StyledBadge>
                    <StyledTitle>
                        Everything you need for
                        <StyledGradientText> modern communication</StyledGradientText>
                    </StyledTitle>
                    <StyledSubtitle>
                        Discover the powerful features that make Mendam the preferred choice
                        for teams who demand excellence in their communication tools.
                    </StyledSubtitle>
                </StyledHeader>

                <StyledFeaturesGrid>
                    {features.map((feature, index) => (
                        <StyledFeatureCard key={index} index={index} color={feature.color}>
                            <StyledFeatureHeader>
                                <StyledFeatureIcon>{feature.icon}</StyledFeatureIcon>
                                <StyledFeatureStats>{feature.stats}</StyledFeatureStats>
                            </StyledFeatureHeader>

                            <StyledFeatureContent>
                                <StyledFeatureTitle>{feature.title}</StyledFeatureTitle>
                                <StyledFeatureDescription>{feature.description}</StyledFeatureDescription>
                            </StyledFeatureContent>

                            <StyledFeatureGlow color={feature.color} />
                        </StyledFeatureCard>
                    ))}
                </StyledFeaturesGrid>

                <StyledCTASection id="cta">
                    <StyledCTAContent>
                        <StyledCTATitle>Ready to transform your team communication?</StyledCTATitle>
                        <StyledCTADescription>
                            Join thousands of teams already using Mendam to collaborate more effectively.
                        </StyledCTADescription>
                        <StyledCTAButtons>
                            <StyledPrimaryButton>
                                <Link to="/auth/register">Get Started</Link>
                            </StyledPrimaryButton>
                        </StyledCTAButtons>
                    </StyledCTAContent>
                </StyledCTASection>
            </StyledContainer>
        </StyledFeatures>
    );
};

export default Features;

// Styled Components
const StyledFeatures = styled.section`
  /* padding: 12rem 0; */
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  }
`;

const StyledContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  animation: ${slideInLeft} 0.8s ease-out;
`;

const StyledBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5rem;
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledTitle = styled.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
  margin-bottom: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledGradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StyledSubtitle = styled.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`;

const StyledFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  margin-bottom: 8rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
const StyledFeatureGlow = styled.div<{ color: string }>`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, ${props => props.color}20 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const StyledFeatureCard = styled.div<{ index: number; color: string }>`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${props => props.index % 2 === 0 ? slideInLeft : slideInRight} 0.8s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.color};
    
    ${StyledFeatureGlow} {
      opacity: 0.6;
      animation: ${glow} 2s infinite;
    }
  }
`;



const StyledFeatureHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledFeatureIcon = styled.div`
  font-size: 4rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const StyledFeatureStats = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 5rem;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledFeatureContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledFeatureTitle = styled.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
`;

const StyledFeatureDescription = styled.p`
  font-size: var(--text-md);
  color: #4a5568;
  line-height: 1.6;
`;

const StyledCTASection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 3rem;
  padding: 6rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    border-radius: 2rem;
  }
`;

const StyledCTAContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledCTATitle = styled.h3`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const StyledCTADescription = styled.p`
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const StyledCTAButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StyledPrimaryButton = styled.div`
  a {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 1.4rem 3rem;
    border-radius: 3rem;
    font-weight: 600;
    font-size: var(--text-md);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      background: #f7fafc;
    }
  }
`;

const StyledSecondaryButton = styled.div`
  a {
    display: inline-block;
    background: transparent;
    color: white;
    padding: 1.4rem 3rem;
    border-radius: 3rem;
    font-weight: 600;
    font-size: var(--text-md);
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-2px);
    }
  }
`;