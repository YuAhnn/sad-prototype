import ResultCard from './ResultCard'
import { useState } from 'react'
import Referral from './Referral'
import ShadowNoBorder from '../background/ShadowNoBorder'

export default function ResultPage( { interpretation, feedback } ){
    const [isClick, setClick] = useState(false)

    const handleSetClick = () => {
        setClick(true)
    }

    if (isClick) return <Referral/>

    return(
        <>
        <main className="relative min-h-screen min-w-screen overflow-x-hidden bg-[#f9f9f9] flex flex-col items-center justify-center">
            <div className="w-full">
                <ShadowNoBorder component={ <ResultCard interpretation={interpretation} feedback={feedback} className="max-w-[800px] mx-auto bg-transparent"/> }> </ShadowNoBorder>
            </div>

            <button onClick={handleSetClick} className="absolute bottom-2 sm:bottom-8 md:bottom-8 lg:bottom-10 py-4 px-20 rounded-full font-semibold cursor-pointer transition transform active:scale-[.97] drop-shadow-[2px_5px_2px_rgba(0,0,0,0.2)] bg-[#3FB185] text-white hover:bg-[#3fb185c7] z-50">
                Continue
            </button>
        </main>
        </>
    )
}