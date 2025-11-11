// import AboutLogo from '../../assets/about-us.png'
import Compass from '../../assets/compass-about.png'
import Paper from '../../assets/paper.png'
import { Link } from 'react-router-dom'

export default function AboutSection() {
    return(
     <div className="w-full px-4">
        <div className="max-w-[1200px] mt-60 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-15">         
            <div className="flex flex-col justify-evenly">
                <p className='bg-[#daefe6] text-primary-color w-[150px] h-[45px] font-bold text-lg text-center pt-2 rounded-full'>
                    About Us
                </p>
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black py-2 mb-5 text-[#292828]">
                        Compass
                    </h1>
                    <p className="text-justify text-gray-700 ml-2 mr-5">
                    Compass is a web-based research project developed to promote emotional awareness. 
                    It offers guided assessments, resources, and supportive feedback to help individuals reflect on their well-being. 
                    While Compass encourages self-awareness, it does not replace professional mental health care.
                    </p>
                </div>
                <Link to="/about" className="bg-primary-color text-white w-[200px] rounded-full font-medium text-center mt-6 mx-auto md:mx-0 py-3 cursor-pointer hover:bg-[#daefe6] hover:text-primary-color transition-transform duration-300 hover:scale-[1.03] active:bg-[#daefe6] active:text-primary-color active:scale-95 active:opacity-90 touch-manipulation">
                    Learn More
                </Link>
            </div>
             <div className="relative mt-30 sm:mt-20 md:mt-0 lg:mt-0  flex justify-center items-center">
                <img src={Compass} alt="Compass" className="relative z-20 cursor-pointer w-[400px] sm:w-[500px] md:w-[500px] lg:w-[450px] xl:w-[500px] 
                transition-transform duration-300 hover:scale-105"/>
                
                <img src={Paper} alt="Paper" className="absolute top-[50%] left-[70%] sm:left-[70%] md:left-[70%] lg:left-[90%] -translate-x-1/2 z-20 cursor-pointer 
                w-[400px] sm:w-[500px] md:w-[450px] lg:w-[500px] xl:w-[600px] transition-transform duration-300 hover:scale-105"/>
            </div>
        </div>
    </div>
    ) 
}