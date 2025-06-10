import Header from "@components/home/Header";
import Footer from "@components/home/Footer";
import Hero from "@components/home/Hero";
import Banner from "@components/home/Banner";
import Button from "@/components/app/button/Button";
// import Avatar from "@/components/app/avatar/Avatar";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <Avatar /> */}
      {/* <Button
        target="blank"
        link="https://www.youtube.com"
        title="Delete Account"
        variant="cancel"
      /> */}
      <Hero />
      <Banner />
      <Footer />
    </>
  );
};

export default HomePage;
