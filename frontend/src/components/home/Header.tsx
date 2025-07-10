import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "@components/logo/Logo";
import { Link } from "react-router-dom";
import LogoLight from "../logo/LogoLight";
import { useAuth } from "@/contexts/AuthContext";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "CTA", href: "#cta" },
    { label: "Trust", href: "#trust" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledContainer>
        <StyledNavigation>
          <StyledLogoSection>
            <StyledLogo>
              {isScrolled ? (
                <Logo />
              ) : (
                <LogoLight />
              )}
            </StyledLogo>
            <StyledBrandName isScrolled={isScrolled}>Mendam</StyledBrandName>
          </StyledLogoSection>

          {/* Desktop Navigation */}
          <StyledDesktopNav>
            <StyledNavList>
              {navigationItems.map((item, index) => (
                <StyledNavItem key={index}>
                  <StyledNavLink isScrolled={isScrolled}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </StyledNavLink>
                </StyledNavItem>
              ))}
            </StyledNavList>
          </StyledDesktopNav>

          {/* Actions */}
          <StyledActionsSection>
            {!isAuthenticated && (
              <>
                <Link to="/auth/login">
                  <StyledLoginLink isScrolled={isScrolled}>
                    Sign In
                  </StyledLoginLink>
                </Link>
                <Link to="/auth/register">
                  <StyledSignupButton>
                    Get Started
                  </StyledSignupButton>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <Link to="/app/@me">
                <StyledSignupButton>
                  Open Mendam
                </StyledSignupButton>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <StyledMobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpen={isMobileMenuOpen}
              isScrolled={isScrolled}
            >
              <span></span>
              <span></span>
              <span></span>
            </StyledMobileMenuButton>
          </StyledActionsSection>
        </StyledNavigation>

        {/* Mobile Menu */}
        <StyledMobileMenu isOpen={isMobileMenuOpen}>
          <StyledMobileNavList>
            {navigationItems.map((item, index) => (
              <StyledMobileNavItem key={index}>
                <StyledMobileNavLink
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={item.href}>

                    {item.label}
                  </a>
                </StyledMobileNavLink>
              </StyledMobileNavItem>
            ))}
            <StyledMobileNavDivider />
            <StyledMobileNavItem>
              <Link to="/auth/login">
                <StyledMobileNavLink>
                  Sign In
                </StyledMobileNavLink>
              </Link>
            </StyledMobileNavItem>
            <StyledMobileNavItem>
              <Link to={"/auth/register"}>
                <StyledMobileNavLink
                  isPrimary
                >
                  Get Started
                </StyledMobileNavLink>
              </Link>
            </StyledMobileNavItem>
          </StyledMobileNavList>
        </StyledMobileMenu>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

// Styled Components
const StyledHeader = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 0;
  background: ${props => props.isScrolled ?
    'rgba(255, 255, 255, 0.95)' :
    'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.isScrolled ?
    '1px solid rgba(0, 0, 0, 0.1)' :
    '1px solid transparent'};
  transition: all 0.3s ease;
  animation: ${fadeInDown} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const StyledContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const StyledBrandName = styled.div<{ isScrolled: boolean }>`
  font-size: var(--text-xl);
  font-weight: 700;
  color: ${props => props.isScrolled ? '#1a202c' : 'white'};
  transition: color 0.3s ease;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledDesktopNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavItem = styled.li`
  position: relative;
`;

const StyledNavLink = styled.div<{ isScrolled: boolean }>`
a {
  color: ${props => props.isScrolled ? '#4a5568' : 'rgba(255, 255, 255, 0.9)'};
  
}
  font-size: var(--text-md);
  font-weight: 500;
  color: ${props => props.isScrolled ? '#4a5568' : 'rgba(255, 255, 255, 0.9)'};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${props => props.isScrolled ? '#667eea' : 'white'};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.isScrolled ? '#667eea' : 'rgba(255, 255, 255, 0.8)'};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const StyledActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledLoginLink = styled.a<{ isScrolled: boolean }>`
  font-size: var(--text-md);
  font-weight: 500;
  color: ${props => props.isScrolled ? '#4a5568' : 'rgba(255, 255, 255, 0.9)'};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  
  &:hover {
    color: ${props => props.isScrolled ? '#667eea' : 'white'};
    background: ${props => props.isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledSignupButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-md);
  font-weight: 600;
  color: #667eea;
  background: white;
  text-decoration: none;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: #f8fafc;
  }
  
  @media (max-width: 640px) {
    padding: 1rem 2rem;
    font-size: var(--text-sm);
  }
`;

const StyledMobileMenuButton = styled.button<{ isOpen: boolean; isScrolled: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 2px;
    background: ${props => props.isScrolled ? '#4a5568' : 'white'};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const StyledMobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  overflow: hidden;
  max-height: ${props => props.isOpen ? '50rem' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledMobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledMobileNavItem = styled.li`
  width: 100%;
`;

const StyledMobileNavLink = styled.div<{ isPrimary?: boolean }>`
  display: block;
  padding: 1.5rem 2rem;
  font-size: var(--text-md);
  font-weight: ${props => props.isPrimary ? '600' : '500'};
  color: ${props => props.isPrimary ? 'white' : '#4a5568'};
  text-decoration: none;
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: ${props => props.isPrimary ?
    '#667eea' :
    'transparent'};
  text-align: center;
  
  &:hover {
    background: ${props => props.isPrimary ?
    '#5a67d8' :
    'rgba(102, 126, 234, 0.1)'};
    color: ${props => props.isPrimary ? 'white' : '#667eea'};
    transform: translateY(-1px);
  }
`;

const StyledMobileNavDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  margin: 1rem 0;
`;