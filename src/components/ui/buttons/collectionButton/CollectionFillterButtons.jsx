import { useState } from "react";
import style from "./CollectionBtn.module.css";
import Products from "../../../products/Products";
import VerifiedProducts from "../../../products/VerifiedProducts";
const CollectionFillterButtons = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "All Collection", content: <Products /> },
    { title: "Verified Brands", content: <VerifiedProducts /> },
    { title: "Verified Artists", content: <p /> },
    { title: "New Drops", content: <p /> },
    { title: "Live Shows", content: <p /> },
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className={style.collection}>
      <div className="">
        <div className={`flex justify-evenly gap-5 flex-wrap`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={
                activeTab === index ? style.active : style.collectionBtn
              }
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="my-12">
          {/* Content for the active tab */}
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default CollectionFillterButtons;
