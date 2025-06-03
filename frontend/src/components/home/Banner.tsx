import styled from "styled-components";
import BannerImage from "@assets/images/Mendam-banner.png";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <StyledBannerImage>
          <img src={BannerImage} alt="Banner" />
        </StyledBannerImage>
        <StyledBannerText>
          <div>
            <h1>Streamline Group Chats with Custom Tools</h1>
          </div>
          <div>
            <p>
              Enhance your team communication with custom emoji and personalized
              profiles. Set a unique avatar and status to represent yourself
              clearly in text chats. Designed for focused, professional
              collaboration with a personal touch.
            </p>
          </div>
        </StyledBannerText>
      </StyledBanner>
    </>
  );
};

export default Banner;


const StyledBanner = styled.section`
  /* width: 100%; */
  margin: 3rem;
  margin-top: 8rem;
  height: 65rem;
  background-color: #7615f567;
  backdrop-filter: blur(30px);
  border-radius: 10rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  /* gap: 3rem; */
  position: relative;
`;

const StyledBannerImage = styled.div`
  /* grid-column: span 3 / span 3; */
  width: 100%;
  height: 100%;
  border-radius: 8rem;
  overflow: hidden;
  background-color: #492f89;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledBannerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;
  h1 {
    font-size: var(--text-giant);
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }
  p {
    font-size: var(--text-xl);
    width: 80%;
    text-align: center;
    margin: 0 auto;
    line-height: 1.4;
  }
`;