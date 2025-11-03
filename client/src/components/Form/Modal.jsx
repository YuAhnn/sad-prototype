import { X, ShieldCheck}  from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null;

  return (
    <div className=" flex items-center justify-center fixed inset-0 backdrop-blur-lg bg-black/40 min-h-screen min-w-full z-1">

      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
        <div className="flex gap-4 items-center mb-4">

          <div className='flex-10'>
            <div className='flex'>
              <figure className='p-2'>
              <ShieldCheck size={40} className='text-[#2E7D5A]'/>
            </figure>
            <div>
              <h2 className="text-xl font-bold text-[#2E7D5A]">Before You Start</h2>
              <h2 className="text-md text-gray-500">Please review important information</h2>
            </div>
            </div>
          </div>

          <div className='flex-1'>
              <button onClick={onClose} className=" text-gray-500 hover:text-gray-800 transition duration-150 cursor-pointer" aria-label="Close modal">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-gray-700">
          {children}
        </div>

      </div>
    </div>
  );
}