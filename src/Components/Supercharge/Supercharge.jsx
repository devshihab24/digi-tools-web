import bannerImg from "../../assets/banner.png";
import playIcon from "../../assets/Play.png"

const Supercharge = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between w-[95%] md:w-[80%] mx-auto items-center gap-10 my-10">
      <div className="md:w-[50%] space-y-4 flex flex-col justify-center items-center md:justify-start md:items-start text-center">
        <p className="text-[#4F39F7] bg-[#E1E7FF] new-badge relative w-80  text-center rounded-full py-2">New: AI-Powered Tools Available</p>
        <h1 className="text-3xl md:text-5xl font-black ">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex justify-center md:justify-start gap-10 ">
          <button className="common-btn">Explore Products</button>
          <button className=" border-2 border-[#4F39F7] px-5 py-3 rounded-full text-[#4F39F7] bg-white cursor-pointer flex gap-1 " style={{boxShadow:"8px 8px 16px rgba(0,0,0,0.3)"}}> <img src={playIcon} className="h-5" alt="" /> Watch Demo</button>
        </div>
      </div>
      <div className=" ">
        <img src={bannerImg} className="w-150 md:h-150" alt="" />
      </div>
    </div>
  );
};

export default Supercharge;
