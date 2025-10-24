import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="pt-35 sm:pt-60 md:pt-60 lg:pt-60 text-[#292828]">
        <div className="max-w-[1000px] mt-[-96px] w-full h-[500px] mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-[26px] sm:text-5xl md:text-5xl font-black md:py-2 leading-tight">Guiding Your Emotional</h1>
            <h1 className="text-[26px] sm:text-5xl md:text-5xl font-black md:py-2 leading-tight">Wellness Journey</h1>
            <p className="text-[11px] sm:text-[14px] md:text-[15px] text-[#4f4f4fe0] font-normal py-2 mx-2">Compass delivers support and emotional guidance for your well-being</p>
            <Link to="/assessment" className="bg-[#3fb185] w-[150px] lg:w-[200px] text-[14px] lg:text-[16px]  rounded-full font-medium my-6 py-3 text-white text-center hover:bg-[#daefe6] hover:text-[#3fb185] transition-all duration-200 ease-in-out transform hover:scale-105 active:bg-[#daefe6] active:text-[#3fb185]">Begin Assessment</Link>
        </div>
    </div>
  );
}

