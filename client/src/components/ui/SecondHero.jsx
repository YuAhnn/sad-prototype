import { Link } from "react-router-dom"

export default function SecondHero() {
    return(
        <div className="pt-60" >
            <div className="max-w-[1000px] mt-20 w-full h-[600px] mx-auto flex flex-col items-center justify-center">
                <h1 className="text-[28px] sm:text-5xl md:text-5xl lg:text-6xl font-black md:py-2 text-center leading-14 text-[#292828]">Let's start your</h1>
                <h1 className="text-[28px] sm:text-5xl md:text-5xl lg:text-6xl font-black md:py-2 text-center leading-tight text-[#292828]">Wellness Journey</h1>
                <p className="text-xs sm:text-xm md:text-[15px] lg:text-lg  text-[#4f4f4fe0] font-normal py-2">Come explore a safe space made for you well-being</p>
                <Link to="/assessment" className="bg-[#3fb185] w-[200px] rounded-full font-medium my-6 mx-auto py-3 cursor-pointer hover:bg-[#daefe6] hover:text-[#3fb185] text-white transition-all duration-200 ease-in-out text-center hover:scale-[1.03] active:bg-[#daefe6] active:text-[#3fb185] active:scale-95 active:opacity-90 touch-manipulation">Get Started</Link>
            </div>
        </div>
    )
}