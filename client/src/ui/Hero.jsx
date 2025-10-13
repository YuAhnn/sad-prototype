import { Link } from "react-router-dom"

export default function Hero() {
    return(
        <div className="pt-60" >
            <div className="max-w-[1000px] mt-[-96px] w-full h-[500px] mx-auto flex flex-col items-center justify-center">
                <h1 className="text-[28px] sm:text-5xl md:text-5xl font-black md:py-2 text-center leading-14">Guiding Your Emotional </h1>
                <h1 className="text-[28px] sm:text-5xl md:text-5xl font-black md:py-2 text-center leading-tight">Wellness Journey</h1>
                <p className="text-xs sm:text-xm md:text-[15px]  text-[#7e7e7ee0] font-normal py-2">Compass delivers support emotional guidance for your well-being</p>
                <Link to="/assessment" className="bg-[#3fb185] w-[200px] rounded-full font-medium my-6 mx-auto py-3 cursor-pointer hover:bg-[#daefe6] hover:text-[#3fb185] text-white transition-all duration-200 ease-in-out text-center">Begin Assessment</Link>
            </div>
        </div>
    )
}