import Header from "@components/home/Header";
import Footer from "@components/home/Footer";
import Hero from "@components/home/Hero";
import Banner from "@components/home/Banner";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
// import Avatar from "@/components/app/avatar/Avatar";
import styled from "styled-components";

const StyledHomePage = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8rem;

`

const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <Hero />
      <Features />
      <Stats />
      {/* <Banner /> */}
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
