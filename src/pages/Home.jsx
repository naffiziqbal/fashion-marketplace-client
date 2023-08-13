import CreatorsMarketButton from "../components/ui/buttons/CreatorsMarketButton";
import MainCollectionButton from "../components/ui/buttons/MainCollectionButton";

const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center pt-12">
        <MainCollectionButton />
        <CreatorsMarketButton />
      </div>
    </div>
  );
};

export default Home;
