import bannerImg from "../../assets/banner.png";

const Supercharge = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between w-[95%] md:w-[80%] mx-auto items-center gap-10 my-10">
      <div className="md:w-[50%] space-y-4">
        <p className="text-[#4F39F7] bg-[#E1E7FF] new-badge relative w-80  text-center rounded-full py-2">New: AI-Powered Tools Available</p>
        <h1 className="text-5xl font-black ">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-10 ">
          <button className="common-btn">Explore Products</button>
          <button className=" border-2 border-[#4F39F7] px-5 py-3 rounded-full text-[#4F39F7] bg-white cursor-pointer" style={{boxShadow:"8px 8px 16px rgba(0,0,0,0.3)"}}>Watch Demo</button>
        </div>
      </div>
      <div className=" ">
        <img src={bannerImg} className="w-150 md:h-[600px]" alt="" />
      </div>
    </div>
  );
};

export default Supercharge;
