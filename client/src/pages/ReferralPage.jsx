import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { UserRoundPlus} from 'lucide-react'

export default function ReferralPage() {
  return(
  <>
  <NavBar/> 

  <figure className=" my-10 w-auto min-h-[250px] lg:min-h-[300px] bg-linear-to-r from-[#3fb185] to-[#2a8f6d] shadow-xl flex items-center justify-center text-center px-6 sm:px-10 py-12"> </figure>
    <main className='relative bottom-50 mx-8 sm:mx-16 md:mx-25 lg:mx-40 my-10 w-auto min-h-[90px] lg:min-h-[100px] bg-white rounded-3xl shadow-xl flex items-center justify-center text-center px-6 sm:px-10'>
        <section>
            <main className="flex items-center justify-center min-h-screen mx-auto">
                <section className="flex flex-col items-center min-h-screen p-4 gap-4">
                    <section className='flex flex-col w-[90vh] border rounded-2xl h-auto p-4'>
                        <div className='flex items-center justify-around '>

                            <div className='flex-1'>
                                <div className='flex flex-col items-center'>
                                    <UserRoundPlus size={50}/>
                                    <p>Referral</p>
                                </div>
                            </div> 

                            <div className='bg-green-500 flex-1'>
                                <select name="clinic" id="clinic">
                                    <option value="" disabled selected>Choose clinic</option>
                                    <option value="clinic1">Clinic 1</option>
                                    <option value="clinic2">Clinic 2</option>
                                    <option value="clinic3">Clinic 3</option>
                                    <option value="clinic4">Clinic 4</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className='h-auto '>
                            <div className="w-auto h-90 bg-gray-200 rounded-xl">
                            </div>
                        </div>
                    </section>
                </section>
            </main>  

         </section>
    </main>
    
    <figure className="relative top-20 my-10 w-auto min-h-[150px] lg:min-h-[71px] border-t-2 border-gray-300 flex items-center justify-end text-center px-6 sm:px-10 py-8">
        <main className='flex flex-col items-end gap-10 px-[5%]'>
            <section className='flex gap-6 border'>
                <p>EMAILS section</p>
            </section>
        </main>
    </figure>   

    <Footer/>
    </>
  )
}