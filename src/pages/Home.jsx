import AboutSection from "../components/aboutSection/AboutSection";
import BrandSection from "../components/brandSection/BrandSection";
import HeroSection from "../components/heroSection/HeroSection";
import CreatorsMarketButton from "../components/ui/buttons/CreatorsMarketButton";
import MainCollectionButton from "../components/ui/buttons/MainCollectionButton";

const Home = () => {
  return (
    <div className=" mx-6">
      <div className="flex items-center justify-center pt-12 mb-24">
        <MainCollectionButton />
        <CreatorsMarketButton />
      </div>
      <HeroSection />
      <BrandSection />
      <AboutSection />
    </div>
  );
};

export default Home;
