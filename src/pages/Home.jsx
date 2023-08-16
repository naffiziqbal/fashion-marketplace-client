import BrandSection from "../components/brandSection/BrandSection";
import HeroSection from "../components/heroSection/HeroSection";
import CreatorsMarketButton from "../components/ui/buttons/CreatorsMarketButton";
import MainCollectionButton from "../components/ui/buttons/MainCollectionButton";

const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center pt-12 mb-24">
        <MainCollectionButton />
        <CreatorsMarketButton />
      </div>
      <HeroSection />
      <BrandSection />
    </div>
  );
};

export default Home;
