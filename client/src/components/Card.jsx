import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Card({ icon, iconProps = {}, alt, instrument, text, toolId, buttonText = "Start" }) {
  const IconComponent = LucideIcons[icon];

  return (
    <main className="p-10 rounded-xl border border-gray-200 shadow-lg bg-white leading-15 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
      <figure className="flex justify-center mb-6">
        {IconComponent ? ( <IconComponent {...iconProps} aria-label={alt} /> ) : ( <span className="text-gray-400 text-sm">Icon not found</span> )}
      </figure>
      <div className="text-center">
        <h1 className="text-lg font-semibold mb-2">{instrument.name}</h1>
        <p className="text-sm text-gray-600 mb-4">{text}</p>
        <Link to={toolId} className="bg-[#3fb185] text-white px-13 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-[#3fb185] active:scale-200 active:bg-[#daefe6] active:text-[#3fb185]">
          {buttonText}
        </Link>
      </div>
    </main>
  );
}
