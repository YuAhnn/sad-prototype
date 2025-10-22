import { ClipboardCheck, Newspaper, UserRoundPlus, ShieldCheck } from 'lucide-react'

export default function BentoGrid() {
    return (
        <section>
            <section className="max-w-[1190px] mt-[170px] w-full min-h-[600px] mx-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-7 h-full w-full gap-6 px-6 lg:px-0">
                    <div className="col-span-1 md:col-span-3 row-span-1 rounded-3xl min-h-[300px] bg-white transition duration-400 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)] border-gray-200 border-1 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div className="w-full h-full">
                            <figure className='h-20 pl-10 pt-10 flex justify-start items-center'><ClipboardCheck size={50}/></figure>
                            <h1 className='text-3xl md:2xl font-bold mx-11 my-10'>Guide Assessments</h1>
                            <p className="text-gray-600 pl-10 pr-5">Check in with yourself through simple test</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 row-span-1 rounded-3xl min-h-[300px] bg-white transition duration-400 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)] border-gray-200 border-1 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                       <div>
                            <figure className='h-20 pl-10 pt-10 flex justify-start items-center'><Newspaper size={50}/></figure>
                            <h1 className='font-bold text-3xl mx-11 my-9'>Helpful Articles</h1>
                            <p className="text-gray-600 pl-10 text-justify pr-10 pb-5">Discover helpful articles, offering professional advice, coping tips, support for emotional well-being, and wisdom and encouragement drawn from the Bible</p>
                       </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 row-span-1 rounded-3xl min-h-[300px] bg-white transition duration-400 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)] border-gray-200 border-1 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='h-20 pl-10 pt-10 flex justify-start items-center'><UserRoundPlus size={50}/></figure>
                            <h1 className='font-bold text-3xl mx-11 my-10'>Referrals</h1>
                            <p className="text-gray-600 pl-10 pr-5">Find trusted hotlines, clinics, and groups ready to support you.</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 row-span-1 rounded-3xl min-h-[300px] bg-white transition duration-400 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)] border-gray-200 border-1 active:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='h-20 pl-10 pt-10 flex justify-start items-center'><ShieldCheck size={50}/></figure>
                            <h1 className='font-bold text-3xl mx-11 my-10'>Your Privacy</h1>
                            <p className="text-gray-600 pl-10 text-justify pr-5">Your responses stay private, Compass is designed for safe, anonymous use.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    ) 
}