import styled from "styled-components";
import heroImage from "@assets/images/home-hero.jpg";

const StyledHero = styled.section`
  /* width: 100%; */
  margin: 3rem;
  margin-top: 2rem;;
  height: 57rem;
  background-color: #563298;
  border-radius: 10rem;
  background-image: url(${heroImage});
  background-position: 50% 10%;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000056;
  }
`;

const StyledTitle = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  z-index: 2;
  h1 {
    max-width: 70rem;
    font-size: var(--text-big);
    color: var(--light);
  }
  p {
    max-width: 70rem;
    color: var(--light);
    font-size: var(--text-xl);
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledTitle>
          <h1>Get ready for the future of work with Mendam</h1>
          <p>
            Transform the way you work with next-generation AI capabilities and
            bring together your physical and digital worlds.
          </p>
        </StyledTitle>
      </StyledHero>
    </>
  );
};

export default Hero;
