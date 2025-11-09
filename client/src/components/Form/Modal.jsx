import { X, ShieldCheck}  from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null;

  return (
    <main className=" flex items-center justify-center fixed inset-0 backdrop-blur-lg bg-black/40 min-h-screen min-w-full z-1">
      <section>
        <section className="relative bg-linear-to-r from-[#2a8f6d] to-primary-color rounded-tr-2xl rounded-tl-2xl shadow-xl w-full max-w-2xl mx-auto p-10">
          <div className="flex gap-4 items-center">

            <div className='flex-10'>            
              <div className='flex'>
                <figure className='p-2'>
                <ShieldCheck size={40} className='text-white'/>
              </figure>
              <div >
                <h2 className="text-2xl font-bold text-white">Before You Start</h2>
                <h2 className="text-md text-white">Please review important information</h2>
              </div>
              </div>
            </div>

            <div className='flex-1'>
                <button onClick={onClose}>
                <X className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:text-black hover:bg-gray-100 hover:shadow-md rounded-full cursor-pointer p-1" />
              </button>
            </div>
          </div>
        </section>

      <section className="relative bg-white p-8 rounded-br-2xl rounded-bl-2xl shadow-xl w-full max-w-2xl mx-auto">

        <div className="text-gray-700">
          {children}
        </div>

      </section>
        </section>
    </main>
  );
}