import { CircleChevronUp } from 'lucide-react'

export default function Footer() {

  const toTop = () => {
    window.scrollTo( { top: 0, behavior: 'smooth' } );
  };

  const year = new Date().getFullYear()

  return (
    <>
    <figure className="relative top-10 my-10 w-auto h-30 bg-linear-to-r from-[#2a8f6d] to-primary-color shadow-xl flex items-center justify-center text-center px-6 sm:px-10 py-12">
      <button onClick={toTop} className="flex items-center justify-center p-3 rounded-full bg-white/10 text-white shadow-md transition-all duration-300 ease-in-outhover:bg-white/20 hover:shadow-2xl hover:-translate-y-1.5 hover:scale-110 active:scale-95 cursor-pointer">
      <CircleChevronUp size={50} className="transition-transform duration-300 ease-in-out"/>
      </button>
    </figure>

    <footer className="bg-[#eaecef] w-full flex flex-col justify-evenly items-center py-10 mt-auto">
      <div className="text-center">
        <p className="font-bold">
          Compass © {year}
        </p>
        <p className="text-gray-800 mt-2">
          For individuals 18 years old and above
        </p>
      </div>
      <div className="w-[85%] md:w-[65%] lg:w-[50%] mt-5 sm:mt-6 lg:mt-8">
        <p className="text-justify lg:text-center text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-gray-700 leading-relaxed">
          ⓘ <strong>Disclaimer:</strong> Compass is for educational and research
          purposes only. It is not a substitute for professional mental health
          advice, diagnosis, or treatment. If you are in crisis, please contact
          a licensed professional or local hotline immediately.
        </p>
      </div>
    </footer>
    </>
  );
}
