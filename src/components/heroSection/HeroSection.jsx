import img from "../../assets/images/Rectangle 15.png";
import img2 from "../../assets/images/Rectangle 16.png";
import img3 from "../../assets/images/Rectangle 17.png";
import img4 from "../../assets/images/Rectangle 19.png";
import img5 from "../../assets/images/Rectangle 21.png";
import img6 from "../../assets/images/image 3.png";
import img7 from "../../assets/images/image 2.png";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  mt-12 gap-12 ">
      <div>
        <h2 className="font-bold text-[60px] mb-[15px]">
          Clothes are the <br /> Spirit of Fashion
        </h2>
        <p className="text-xl text-[#ffffff8c] lg:w-1/2 mb-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        {/* Button Groups */}
        <div className="flex w-1/2 justify-between">
          <button className="py-[10px] px-[20px] bg-primary rounded-xl text-xl font-semibold">
            Explore Now
          </button>
          <button className="py-[10px] px-[20px] border rounded-xl text-xl font-semibold">
            {" "}
            Create
          </button>
        </div>
        {/* --------------------------------- */}
        {/* --------------------------------- */}

        {/*  Statics */}
        <div className="flex justify-between mt-[50px] w-3/4">
          <div>
            <h4 className="0 font-bold  text-4xl ">100+</h4>
            <p className="text-[#ffffff8a] text-xl">Bands</p>
          </div>
          <div>
            <h4 className="0  font-bold text-4xl ">200+</h4>
            <p className="text-[#ffffff8a] text-xl">Fsahion Design</p>
          </div>
          <div>
            <h4 className="0  font-bold text-4xl ">20+</h4>
            <p className="text-[#ffffff8a] text-xl">Shows</p>
          </div>
        </div>
        {/* --------------------------------- */}
        {/* --------------------------------- */}
      </div>
      {/* Image Gallery */}
      <div className={style.gallery}>
        <div className={"grid grid-cols-3 gap-5  relative"}>
          <div className="flex flex-col gap-3">
            <img src={img} alt="" />
            <img src={img3} alt="" />
            <img
              className="bg-green-500 rounded-xl max-h-[160px]"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex flex-col  gap-3">
            <img src={img2} alt="" />

            <img src={img4} alt="" />
            <img className="bg-blue-600 rounded-xl  " src={img7} alt="" />
          </div>
          <div className="relative">
            <img
              className="absolute top-1/2 -translate-y-1/2"
              src={img5}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
    </div>
  );
};

export default HeroSection;
