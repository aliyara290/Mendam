// frontend/src/components/home/Footer.tsx - Professional redesign
import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "@components/logo/Logo";
import { Link } from "react-router-dom";

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

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Stories", href: "#testimonials" },
      ],
    },
    {
      title: "Company",
      links: [{ label: "Contact", href: "" }],
    },

    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "" },
        { label: "Terms of Service", href: "" },
        { label: "Cookie Policy", href: "" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "GitHub", icon: "🐙", href: "#github" },
    { name: "Discord", icon: "💬", href: "#discord" },
    { name: "YouTube", icon: "📺", href: "#youtube" },
  ];

  return (
    <StyledFooter>
      <StyledContainer>
        {/* Main Footer Content */}
        <StyledFooterMain>
          {/* Company Info */}
          <StyledCompanySection>
            <StyledLogoSection>
              <StyledLogo>
                <Logo />
              </StyledLogo>
              <StyledBrandInfo>
                <StyledBrandName>Mendam</StyledBrandName>
              </StyledBrandInfo>
            </StyledLogoSection>

            <StyledCompanyDescription>
              Empowering teams worldwide with intelligent, secure, and seamless
              communication tools. Join thousands of organizations who trust
              Mendam for their daily collaboration needs.
            </StyledCompanyDescription>

            {/* <StyledSocialLinks>
              {socialLinks.map((social, index) => (
                <StyledSocialLink key={index} href={social.href}>
                  <span>{social.icon}</span>
                  <StyledSocialTooltip>{social.name}</StyledSocialTooltip>
                </StyledSocialLink>
              ))}
            </StyledSocialLinks> */}
          </StyledCompanySection>

          {/* Footer Links */}
          <StyledLinksGrid>
            {footerSections.map((section, index) => (
              <StyledLinkSection key={index}>
                <StyledSectionTitle>{section.title}</StyledSectionTitle>
                <StyledLinksList>
                  {section.links.map((link, linkIndex) => (
                    <StyledLink key={linkIndex}>
                      <Link to={link.href}>{link.label}</Link>
                    </StyledLink>
                  ))}
                </StyledLinksList>
              </StyledLinkSection>
            ))}
          </StyledLinksGrid>
        </StyledFooterMain>

        {/* Newsletter Section */}
        {/* <StyledNewsletterSection>
          <StyledNewsletterContent>
            <StyledNewsletterText>
              <StyledNewsletterTitle>Stay in the loop</StyledNewsletterTitle>
              <StyledNewsletterDescription>
                Get the latest updates, tips, and insights delivered to your
                inbox.
              </StyledNewsletterDescription>
            </StyledNewsletterText>

            <StyledNewsletterForm>
              <StyledEmailInput
                type="email"
                placeholder="Enter your email address"
              />
              <StyledSubscribeButton>
                <span>Subscribe</span>
                <StyledButtonIcon>✨</StyledButtonIcon>
              </StyledSubscribeButton>
            </StyledNewsletterForm>
          </StyledNewsletterContent>
        </StyledNewsletterSection> */}

        {/* Footer Bottom */}
        <StyledFooterBottom>
          <StyledCopyright>
            © 2024 Mendam Technologies Inc. All rights reserved.
          </StyledCopyright>

          {/* <StyledBottomLinks>
            <StyledBottomLink href="#privacy">Privacy</StyledBottomLink>
            <StyledDivider>•</StyledDivider>
            <StyledBottomLink href="#terms">Terms</StyledBottomLink>
            <StyledDivider>•</StyledDivider>
            <StyledBottomLink href="#cookies">Cookies</StyledBottomLink>
          </StyledBottomLinks> */}

          <StyledMyLogo>
            <a
              href="http://www.aliyara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                id="Logo__23lg"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 242.64 243.07"
                fill="#3CA7D5"
                width={40}
                height={40}
              >
                <g className="logo_inner">
                  <circle cx="121.26" cy="121.49" r="75.3"></circle>
                  <path
                    className="cls-1"
                    d="M149.36,170.29h-7a25.49,25.49,0,0,1-25.5-25.5V106.48h7a25.49,25.49,0,0,1,25.5,25.5Z"
                    transform="translate(-28.74 -25.51)"
                  ></path>
                  <path
                    className="cls-1"
                    d="M156,195.18h6.08a21.06,21.06,0,0,0,21.06-21.07V125.92a.93.93,0,0,0-.93-.94h-6.08a21.07,21.07,0,0,0-21.06,21.07v48.2A.93.93,0,0,0,156,195.18Z"
                    transform="translate(-28.74 -25.51)"
                  ></path>
                </g>
              </svg>
              <span>Built By Ali Yara</span>
            </a>
          </StyledMyLogo>
        </StyledFooterBottom>
      </StyledContainer>

      {/* Background Elements */}
      <StyledBackgroundPattern />
    </StyledFooter>
  );
};

export default Footer;

// Styled Components
const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: white;
  position: relative;
  overflow: hidden;
  /* margin-top: 8rem; */
`;

const StyledBackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(102, 126, 234, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(118, 75, 162, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
`;

const StyledContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StyledFooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  padding: 8rem 0 6rem;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`;

const StyledCompanySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StyledLogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1.2rem;
  padding: 1rem;

  svg {
    filter: brightness(0) invert(1);
  }
`;

const StyledBrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledBrandName = styled.div`
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1;
`;

const StyledBrandTagline = styled.div`
  font-size: var(--text-sm);
  opacity: 0.8;
  line-height: 1;
`;

const StyledCompanyDescription = styled.p`
  font-size: var(--text-md);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 40rem;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StyledSocialTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: var(--text-xs);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`;

const StyledSocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);

    ${StyledSocialTooltip} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-100%);
    }
  }
`;

const StyledLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StyledLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSectionTitle = styled.h4`
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const StyledLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLink = styled.li`
  a {
    font-size: var(--text-md);
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #667eea;
      transform: translateX(5px);
    }
  }
`;

const StyledNewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 4rem;
  margin-bottom: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    margin-bottom: 3rem;
  }
`;

const StyledNewsletterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const StyledNewsletterText = styled.div`
  flex: 1;
`;

const StyledNewsletterTitle = styled.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const StyledNewsletterDescription = styled.p`
  font-size: var(--text-md);
  opacity: 0.9;
  line-height: 1.6;
`;

const StyledNewsletterForm = styled.form`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  max-width: 40rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledEmailInput = styled.input`
  flex: 1;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: var(--text-md);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StyledSubscribeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  font-size: var(--text-md);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const StyledButtonIcon = styled.span`
  animation: ${pulse} 2s infinite;
`;

const StyledFooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const StyledCopyright = styled.div`
  font-size: var(--text-sm);
  opacity: 0.8;
`;

const StyledBottomLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledBottomLink = styled.a`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #667eea;
  }
`;

const StyledDivider = styled.span`
  opacity: 0.5;

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledMyLogo = styled.div`
  padding-right: 10px;
  border-radius: 3rem;

  a {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      font-size: var(--text-sm);
    }
  }
  .cls-1 {
    fill: #fff;
  }

  svg {
    animation: logo-spinnner 4s infinite;
    /* transition: ani; */
  }
  transition: all 0.2s;
  &:hover {
    background-color: #fff;
    a {
      span {
        color: #2E3348;
      }
    }
  }
  @keyframes logo-spinnner {
    100% {
      rotate: 365deg;
    }
  }
`;

const StyledStatusDot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #22c55e;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;
