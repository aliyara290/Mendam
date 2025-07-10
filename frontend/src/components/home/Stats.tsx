// frontend/src/components/home/Stats.tsx - Statistics and testimonials
import React from "react";
import styled, { keyframes } from "styled-components";

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
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

const Stats: React.FC = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Active Teams",
      description: "Trust Mendom for daily communication"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on"
    },
    {
      number: "50M+",
      label: "Messages",
      description: "Sent securely every month"
    },
    {
      number: "150+",
      label: "Countries",
      description: "Teams worldwide using Mendom"
    }
  ];

  const testimonials = [
    {
      quote: "Mendom transformed how our distributed team communicates. The AI features save us hours every week.",
      author: "Sarah Chen",
      role: "Engineering Manager",
      company: "TechFlow Inc",
      avatar: "👩‍💻",
      rating: 5
    },
    {
      quote: "Best team chat app we've ever used. The security features give us peace of mind with sensitive data.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "SecureBank",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      quote: "The analytics dashboard helps us understand team dynamics better. Highly recommend for growing teams.",
      author: "Emma Thompson",
      role: "Head of Operations",
      company: "GrowthCo",
      avatar: "👩‍🎯",
      rating: 5
    }
  ];

  return (
    <StyledStats>
      <StyledContainer>
        {/* Statistics Section */}
        <StyledStatsSection>
          <StyledSectionHeader>
            <StyledBadge>Trusted Globally</StyledBadge>
            <StyledTitle>Numbers that speak for themselves</StyledTitle>
            <StyledSubtitle>
              Join thousands of teams who have already discovered the power of seamless communication.
            </StyledSubtitle>
          </StyledSectionHeader>

          <StyledStatsGrid>
            {stats.map((stat, index) => (
              <StyledStatCard key={index} index={index}>
                <StyledStatNumber>{stat.number}</StyledStatNumber>
                <StyledStatLabel>{stat.label}</StyledStatLabel>
                <StyledStatDescription>{stat.description}</StyledStatDescription>
                <StyledStatIcon>📈</StyledStatIcon>
              </StyledStatCard>
            ))}
          </StyledStatsGrid>
        </StyledStatsSection>

        {/* Testimonials Section */}
        <StyledTestimonialsSection>
          <StyledSectionHeader>
            <StyledBadge>Customer Stories</StyledBadge>
            <StyledTitle>What our customers are saying</StyledTitle>
            <StyledSubtitle>
              Don't just take our word for it. Here's what real teams say about their Mendom experience.
            </StyledSubtitle>
          </StyledSectionHeader>

          <StyledTestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <StyledTestimonialCard key={index} index={index}>
                <StyledTestimonialContent>
                  <StyledQuoteIcon>"</StyledQuoteIcon>
                  <StyledQuote>{testimonial.quote}</StyledQuote>
                  
                  <StyledRating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StyledStar key={i}>⭐</StyledStar>
                    ))}
                  </StyledRating>
                </StyledTestimonialContent>
                
                <StyledTestimonialAuthor>
                  <StyledAuthorAvatar>{testimonial.avatar}</StyledAuthorAvatar>
                  <StyledAuthorInfo>
                    <StyledAuthorName>{testimonial.author}</StyledAuthorName>
                    <StyledAuthorRole>{testimonial.role}</StyledAuthorRole>
                    <StyledAuthorCompany>{testimonial.company}</StyledAuthorCompany>
                  </StyledAuthorInfo>
                </StyledTestimonialAuthor>
              </StyledTestimonialCard>
            ))}
          </StyledTestimonialsGrid>
        </StyledTestimonialsSection>

     
      </StyledContainer>
    </StyledStats>
  );
};

export default Stats;

// Styled Components
const StyledStats = styled.section`
  /* padding: 10rem 0; */
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
`;

const StyledContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StyledStatsSection = styled.div`
  margin-bottom: 10rem;
`;

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
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
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const StyledSubtitle = styled.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`;

const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledStatCard = styled.div<{ index: number }>`
  background: white;
  border-radius: 2rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${countUp} 0.8s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.1);
    border-color: #667eea;
  }
`;

const StyledStatNumber = styled.div`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
`;

const StyledStatLabel = styled.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const StyledStatDescription = styled.div`
  font-size: var(--text-sm);
  color: #718096;
  line-height: 1.5;
`;

const StyledStatIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  opacity: 0.3;
`;

const StyledTestimonialsSection = styled.div`
  margin-bottom: 8rem;
`;

const StyledTestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StyledTestimonialCard = styled.div<{ index: number }>`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.index * 0.5}s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`;

const StyledTestimonialContent = styled.div`
  margin-bottom: 2rem;
`;

const StyledQuoteIcon = styled.div`
  font-size: 4rem;
  color: #667eea;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
`;

const StyledQuote = styled.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const StyledRating = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
`;

const StyledStar = styled.span`
  font-size: 1.4rem;
`;

const StyledTestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledAuthorAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`;

const StyledAuthorInfo = styled.div`
  flex: 1;
`;

const StyledAuthorName = styled.div`
  font-size: var(--text-md);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.2rem;
`;

const StyledAuthorRole = styled.div`
  font-size: var(--text-sm);
  color: #4a5568;
  margin-bottom: 0.2rem;
`;

const StyledAuthorCompany = styled.div`
  font-size: var(--text-sm);
  color: #718096;
`;

const StyledTrustSection = styled.div`
  text-align: center;
`;

const StyledTrustHeader = styled.div`
  margin-bottom: 4rem;
`;

const StyledTrustTitle = styled.h3`
  font-size: var(--text-xl);
  color: #4a5568;
  font-weight: 500;
`;

const StyledTrustLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledTrustLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: #f7fafc;
  }
`;

const StyledCompanyName = styled.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
`;

const StyledCompanyType = styled.div`
  font-size: var(--text-sm);
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;