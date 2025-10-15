import { Link } from 'react-router-dom'


export default function Card({ icon, alt, instrument, text, toolId }) {
    return (
        <main className="p-10 rounded-xl border-1 border-gray-200 shadow-lg bg-white leading-15">
            <figure className="flex justify-center mb-6">
                <img src={icon} alt={alt} width={60} />
            </figure>
            <div className="text-center">
                <h1 className="text-lg font-semibold mb-2">{instrument.name}</h1>
                <p className="text-sm text-gray-600 mb-4">{text}</p>
                <Link to={toolId} className="bg-[#3fb185] text-white px-13 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-[#3fb185] active:scale-200">Start</Link>
            </div>
        </main>
    );
}