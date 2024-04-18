// import "./styles/SocialNews.css";
import instagramVideon from "../Assests/instagramVideo.mp4"
const SocialNews = () => {
  return (
    <div className="hidden md:flex flex-col gap-[60px] justify-center items-center my-20 px-16 lg:px-0">
      <h1 className="text-[32px] font-lato font-bold text-[#17324A]">Some Social News From Our Patients</h1>
      <div className="flex flex-col justify-center items-center gap-[30px] w-full">
      <div className="w-full md:w-[598px] lg:w-[783px] h-[385px] md:h-[385px] lg:h-[504px] bg-[#E1E3E4] rounded-[10px]">
        {/* <div className="w-96">

        <video controls>
            <source src={instagramVideon} type="video/mp4" />
            
          </video>
        </div> */}
      </div>

         <div className="flex justify-center">
         <button
            className="flex items-center text-lg p-4 rounded-lg border border-[#00A79D] text-[#00A79D]"
          >
            View More
          </button>
         </div>
      </div>

    </div>
  );
};

export default SocialNews;
