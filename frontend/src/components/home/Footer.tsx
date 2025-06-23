import React from "react";
import styled from "styled-components";
import LogoTypo from "@assets/images/logo-typo.svg";

import XIcon from "@assets/icons/x.svg";
import InstaIcon from "@assets/icons/insta.svg";
import FacebookIcon from "@assets/icons/facebook.svg";
import TiktokIcon from "@assets/icons/tiktok.svg";

import LogoLight from "@components/logo/LogoLight";

const StyledFooter = styled.section`
  margin-top: 8rem;
  background-color: var(--blue);
  border-top-right-radius: 10rem;
  border-top-left-radius: 10rem;
  overflow: hidden;
  padding: 8rem 4rem 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StyledSocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  span {
    font-size: var(--text-xl);
    color: var(--pup-white);
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    li {
      list-style-type: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;

      img {
        width: 35px;
      }
    }
  }
`;

const StyledLogoTypo = styled.div`
  width: 100%;
  padding-top: 6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <LogoLight width={70} height={70} />
      <StyledSocialIcon>
        <span>Follow Us on</span>
        <ul>
          <li>
            <a href="#" aria-label="Follow us on X">
              <img src={XIcon} alt="X social media icon" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Follow us on Instagram">
              <img src={InstaIcon} alt="Instagram social media icon" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Follow us on Facebook">
              <img src={FacebookIcon} alt="Facebook social media icon" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Follow us on TikTok">
              <img src={TiktokIcon} alt="TikTok social media icon" />
            </a>
          </li>
        </ul>
      </StyledSocialIcon>
      <StyledLogoTypo>
        <img src={LogoTypo} alt="Company logo typography" />
      </StyledLogoTypo>
    </StyledFooter>
  );
};

export default Footer;
