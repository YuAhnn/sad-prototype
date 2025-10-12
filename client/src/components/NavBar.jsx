import { useState } from "react";
import logo  from '../assets/compass-logo.svg'
import { Link } from "react-router-dom";
import { Sun, Moon } from 'lucide-react';

const NavLinks = [
  { label: "Articles", path: '/articles' },
  { label: "Assessments", path: '/assessment' },
  { label: "Referral", path: '/referral' }
];

export default function NavBar() {

    const[theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }

  return (
    <nav className="flex flex-wrap justify-around items-center px-[14%] pt-[2%] max-[1240px] mx-auto">
      
      <div className="flex-1 mb-2">
          <Link to="/"> <img src={logo} alt="Compass" width={245} /> </Link>
      </div>
      
      <div className="flex-2">
       <div className="flex justify-center">
         <div className="bg-white px-2 py-7 w-[550px] rounded-full drop-shadow-sm">
        
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
      
      <div className="flex-1">
        <div className="flex justify-evenly items-center">
          <div className="ml-20">
            <Link to="/about" className="bg-[#3fb185] text-white px-4 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-[#3fb185]">About</Link>
          </div>
          <div className="mr-10">
            <button onClick={handleTheme} className="bg-white p-2 rounded-full cursor-pointer transition duration-300 ease-in-out border-1 border-gray-400">
            {theme ? <Sun size={25} /> : <Moon  size={25} />}
          </button>
          </div>
        </div>
      </div>

    </nav>
  );
}