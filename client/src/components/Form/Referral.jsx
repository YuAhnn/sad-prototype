import { UserRoundPlus, Newspaper} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Referral() {
  return(
    <>
    <nav className='flex justify-between items-center px-[28%] h-20 bg-linear-to-r from-primary-color to-[#2a8f6d] '>
        <div className='flex items-center gap-6 text-white'>
            <div className='bg-[#daefe6] p-2 rounded-full'>
                <UserRoundPlus size={30} className='text-primary-color'/>
            </div>
            <div>
                <p className='font-bold text-lg'>Find Support</p>
            </div>
        </div>

        <div>
            <select name="clinic" id="clinic">
                <option value="" disabled selected>Choose clinic</option>
                <option value="clinic1">Clinic 1</option>
                <option value="clinic2">Clinic 2</option>
                <option value="clinic3">Clinic 3</option>
                <option value="clinic4">Clinic 4</option>
            </select>
        </div>
    </nav>

    <main className="flex items-center justify-center min-h-screen mx-auto">

        <section className="flex flex-col items-center min-h-screen p-4 gap-4">
            <section className='flex flex-col w-[90vh] border rounded-2xl h-auto p-4'>                
                <div className='h-auto '>
                    <div className="w-auto h-90 bg-gray-200 rounded-xl">
                    </div>
                </div>
            </section>


        <section className='flex justify-between w-[90vh] h-auto gap-4'>
            <div className='border rounded-2xl flex-1 h-[30vh]'>
                <div className='flex '>
                    <div>
                    <Newspaper size={50}/> 
                    </div>

                    <div>
                        <p>Articles</p>
                        <p>Explore Articles Relevant To Your Experience</p>
                    </div>
                </div>

                <div>
                <p>www.website.com</p>
                <p>www.website.com</p>
                <p>www.website.com</p>
            </div>
            </div>


            <div className='flex-1'>
            <div className='flex flex-col items-center border rounded-2xl h-[30vh]'>
                <h1>QUOTE</h1>
                <div>
                    <p>Whatever you’re going through, it’s time for deep rest. Let go, breathe, and live, 
                    knowing God is with you and sees you.
                    </p>
                </div>
            </div>
            </div>

        </section>


        <section>   
            <div className='flex justify-around w-[90vh] h-auto border rounded-2xl p-4'>
                <div className='w-70 h-40'>1</div>
                <div className='w-70 h-40'>2</div>
                <div className='w-70 h-40'>3</div>
            </div>
        </section>
         <Link to="/assessment" className="bg-[#3fb185] w-[150px] lg:w-[200px] text-[14px] lg:text-[16px]  rounded-full font-medium my-6 py-3 text-white text-center hover:bg-[#daefe6] hover:text-[#3fb185] transition-all duration-200 ease-in-out transform hover:scale-[1.03] active:bg-[#daefe6] active:text-[#3fb185] active:scale-95 active:opacity-90 touch-manipulation">Take Care</Link>
        </section>
    </main>
    </>
  )
}