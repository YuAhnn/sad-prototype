import logo  from '../assets/compass-logo.svg'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Sun, Moon, Menu, X, FileText, FileCheck, UserRoundPlus, CircleQuestionMark } from 'lucide-react';

const NavLinks = [
  { label: "Articles", path: '/articles', logo: <FileText size={30}/> },
  { label: "Assessments", path: '/assessment', logo: <FileCheck  size={30}/>},
  { label: "Referral", path: '/referral', logo: <UserRoundPlus  size={30}/> }
];

export default function NavBar() {

    const[theme, setTheme] = useState(false)
    const[sideBar, setSideBar] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

  return (
    <nav className="flex justify-between items-center h-35 max-w-[1240px] mx-auto">
     <div className="flex-0.5">
      <Link to="/">
        <img src={logo} alt="Compass" className="w-[245px] h-auto pb-2" />
      </Link>
    </div>
      <div className="flex-2">
       <div className="flex justify-center">
         <div className="bg-white mr-20 px-2 py-6 hidden lg:block lg:w-[550px] rounded-full drop-shadow-sm">
          <ul className="flex justify-evenly items-center">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} className="transition duration-350 ease-in-out hover:bg-[#3fb185] hover:text-white px-4 py-4 rounded-full transform">
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
       </div>
      </div>
      <div className="flex-0.5">
        <div className="flex justify-evenly items-center">
          <div className="ml-4 mr-4">
            <Link to="/about" className="hidden lg:block bg-[#3fb185] text-white px-4 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-[#3fb185] active:-scale-200">About</Link>
          </div>
          <div className="mr-5">
            <button onClick={handleTheme} className="hidden md:block active:-scale-150 hover:shadow-md bg-white p-2 rounded-full cursor-pointer transition duration-300 ease-in-out border-1 border-gray-400">
            {theme ? <Moon  size={25} /> : <Sun size={25} />}
          </button>
          </div>
          {/* sideBar */}
          <div onClick={handleSideBar} className="block lg:hidden mr-5 cursor-pointer transform active:-scale-150 hover:shadow-md hover:bg-[#3fb185] hover:text-white p-2 rounded-full duration-300 ease-in-out">
          {sideBar ?  <X size={25}/> : <Menu size={25}/>}
          </div>
          <div className={`fixed top-0 w-[70%] h-full border-r border-r-gray-300 bg-[#ffffff] ease-in-out duration-700
                          ${sideBar ? 'left-0' : 'left-[-100%]'} lg:hidden `}>
            <div className="mt-10 ml-2">
              <Link to="/">
                <img src={logo} alt="Compass" className="w-[245px] h-auto pb-2" />
              </Link>
            </div>
            <ul className="mt-10">
              {NavLinks.map((link, index) => (
                <li key={index} className="">
                  <Link 
                    to={link.path} className="block pl-8 transition duration-400 ease-in-out hover:bg-[#3fb185] hover:text-white px-4 py-4 transform">
                   
                    <div className="flex justify-start items-center">
                      <div>{link.logo}</div>
                      <div className="ml-6">{link.label}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
             <Link to="/about" className="block pl-8 transition duration-300 ease-in-out hover:bg-[#3fb185] hover:text-white px-4 py-4 transform">
              <div className="flex justify-start items-center">
                <div> <CircleQuestionMark size={30} /> </div>
                <div className="ml-6">About</div>
              </div>
            </Link>
              <aside className="absolute bottom-10 left-5">
                <button onClick={handleTheme} className="block active:-scale-150 hover:shadow-md bg-white  p-2 rounded-full cursor-pointer transition ease-in-out border-1 border-gray-400">
                  {theme ? <Moon  size={30} /> : <Sun size={30} />}
                </button>
              </aside>
          </div>
        </div>
      </div>
    </nav>
  );
}