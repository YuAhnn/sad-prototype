import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Form/Modal';
import { X, CircleAlert, Ban, Phone } from 'lucide-react'

export default function Card({ icon, iconProps = {}, alt, instrument, text, toolId, buttonText = "Start" }) {
  const IconComponent = LucideIcons[icon];
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen); 
  };

  return (
      <>
      <main className="p-8 rounded-xl border border-gray-200 shadow-lg bg-white leading-15 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)] h-70 hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)] ">

        <figure className="flex justify-center mb-6">
          {IconComponent ? ( <IconComponent {...iconProps} aria-label={alt} /> ) : ( <span className="text-gray-400 text-sm">Icon not found</span> )}
        </figure>
        
        <div className="flex flex-col text-center">
        <h1 className="text-lg font-semibold mb-2">{instrument.name}</h1>
        <p className="text-sm text-gray-600 mb-4">{text}</p>

        <div>
          <button onClick={handleModal} className="bg-primary-color text-white px-13 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-primary-color active:scale-[1.05] active:bg-[#daefe6] active:text-primary-color cursor-pointer">
            {buttonText}
          </button>
        </div>
      </div>

      </main>
      


      {/* 🤮🤮🤮*/}
      <Modal isOpen={isOpen} onClose={handleModal}>

        <h3 className="text-lg mb-2 p-4">By clicking <span className='font-bold'>"Agree"</span> you understand that:</h3>
        
        <section className="flex justify-between p-2 text-center">
          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl p-4 w-45 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:border-[#3FB185] ">
            <Ban size={30} className="mb-2 text-[#2E7D5A]"/>
            <p className='text-gray-600'>It's not replacement for medical or mental health advice</p>
          </div>

          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl p-4 w-45 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:border-[#3FB185]">
            <CircleAlert size={30}  className="mb-2 text-[#2E7D5A]"/>
            <p className='text-gray-600'>It's for informational use only by those 18 years old and above</p>
          </div>

          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl p-4 w-45 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:border-[#3FB185]">
            <X size={30} className="mb-2 text-[#2E7D5A]" />
            <p className='text-gray-600'>This test is not a diagnostic tool</p>
          </div>
        </section>
        
        <section className="flex gap-5 text-base mt-2 border-2 border-red-200 bg-red-50 rounded-xl p-4 items-center">
          <Phone size={40} className='text-red-400'/>
          <h3>If you need urgent help, call<span className='font-bold text-red-400'> "911"</span> or local emergency services. Call <span className='font-bold text-red-400'>1553</span>(DOH-NCHM Hotline, 24/7)</h3>
        </section>

        <div className="flex justify-center w-full mt-9">
          <Link to={toolId} onClick={handleModal} className="bg-primary-color text-white px-30 py-4 rounded-full transition-all duration-300 ease-in-out hover:bg-[#daefe6] hover:text-primary-color hover:scale-[1.06] active:bg-[#daefe6] active:text-primary-color">
            Agree
          </Link>
        </div>

      </Modal>
      </>
  );
}