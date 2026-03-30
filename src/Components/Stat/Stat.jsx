import "./stat.css"

const Stat = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F7] to-[#700fde] py-5">
      <div className="w-[95%] md:w-[80%] mx-auto py-5 flex flex-col md:flex-row justify-center items-center text-white font-bold shadow gap-10">
        <div className="stat place-items-center ">
          <div className="stat-value">50K+</div>
          <div className="font-medium">Active Users</div>
        </div>
        {/* <div className="divider divider-horizontal border-white"></div> */}

        <div className="stat place-items-center ">
          <div className="stat-value ">200+</div>
          <div className="font-medium">Premium Tools</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value">4.9</div>
          <div className="font-medium">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
