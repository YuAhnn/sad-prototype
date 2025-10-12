import { useState } from "react";
import logo  from '../assets/compass-logo.svg'
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X} from 'lucide-react';

const NavLinks = [
  { label: "Articles", path: '/articles' },
  { label: "Assessments", path: '/assessment' },
  { label: "Referral", path: '/referral' }
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
      
     <div className="flex- 1">
      <Link to="/">
        <img src={logo} alt="Compass" className="w-[245px] h-auto pb-2" />
      </Link>
    </div>

      <div className="flex-2">
       <div className="flex justify-center">
         <div className="bg-white px-2 py-7 hidden lg:block lg:w-[550px] rounded-full drop-shadow-sm">
        
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
            {theme ? <Sun size={25} /> : <Moon  size={25} />}
          </button>
          </div>
          <div onClick={handleSideBar} className="block lg:hidden mr-5 cursor-pointer transform active:-scale-150 hover:shadow-md hover:bg-[#3fb185] hover:text-white p-2 rounded-full duration-300 ease-in-out">
          {!sideBar ? <Menu size={25}/> : <X size={25}/>}
          </div>
        </div>
      </div>
      
    </nav>
  );
}