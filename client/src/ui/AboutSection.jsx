import AboutLogo from '../assets/about-us.png'
import { Link } from 'react-router-dom'

export default function AboutSection() {
    return(
     <div className="w-full px-4">
        <div className="max-w-[1200px] mt-60 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-15">         
            <div className="flex flex-col justify-evenly">
                <p className='bg-[#daefe6] text-[#3fb185] w-[150px] h-[45px] font-bold text-lg text-center pt-2 rounded-full'>About Us</p>
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black py-2 mb-5 text-[#292828]">Compass</h1>
                    <p className="text-justify text-gray-700 ml-2 mr-5">
                    Compass is a web-based research project developed to promote emotional awareness. 
                    It offers guided assessments, resources, and supportive feedback to help individuals reflect on their well-being. 
                    While Compass encourages self-awareness, it does not replace professional mental health care.
                    </p>
                </div>
                <Link to="/about" className="bg-[#3fb185] text-white w-[200px] rounded-full font-medium text-center mt-6 mx-auto md:mx-0 py-3 cursor-pointer hover:bg-[#daefe6] hover:text-[#3fb185] transition-transform duration-300 hover:scale-103 active:bg-[#daefe6] active:text-[#3fb185]">Learn More</Link>
            </div>
            <img src={AboutLogo} alt="/compass"   className="relative z-[-1] cursor-pointer w-[350px] sm:w-[400px] lg:w-[500px] mx-auto my-4 rounded-3xl drop-shadow-xl border-gray-200 border-1 "/>
        </div>
    </div>
    ) 
}