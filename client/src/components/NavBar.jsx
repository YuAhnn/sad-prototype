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
         <div className="bg-white px-2 py-7 w-[550px] rounded-full">
        
          <ul className="flex justify-evenly items-center">

          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} className="transition duration-350 ease-in-out hover:bg-[#3fb185] hover:text-white px-4 py-4 rounded-2xl transform">
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
          <Link to="/about" className="underline decoration-3 decoration-transparent hover:decoration-[#3fb185] transition-all duration-300 ease-in-out">About</Link>
          <button onClick={handleTheme} className="bg-white p-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
            {theme ? <Sun size={30}/> : <Moon  size={32}/>}
          </button>
        </div>
      </div>

    </nav>
  );
}