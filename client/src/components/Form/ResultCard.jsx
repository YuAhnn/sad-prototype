import { MessageSquareText, ClipboardCheck } from "lucide-react"
import logo from '../../assets/compass-alone.svg'

export default function Result( {interpretation = "Moderate Depression", feedback = "Thank you for completing this self-check. Your responses suggest you may be carrying feelings that make daily life more difficult. It’s okay to feel this way, and you don’t have to face it alone. If you have someone you trust, sharing how you feel can bring relief. If not, there are still safe places—such as helplines, supportive communities, or quiet moments of prayer—where comfort and strength can be found."}) {

  return (
    <>
      <main className="flex items-center justify-center min-w-screen">
        <section className="flex flex-col items-center justify-center mb-15 sm:mb-20 md:mb-30 lg:mb-40">

          <main className="flex flex-col items-center max-w-xl mx-auto mt-10 px-4">
              <img src={logo} alt="" className="relative left-22 sm:left-30 md:left-30 lg:left-30"/>
              <p className="mt-2 text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#094509] font-bold">SELF-ASSESSMENT RESULT</p>
              <p className="mt-2 text-[15px] sm:text-[16px] md:text-lg lg:text-lg mb-12 text-[#8f8787] italic">A moment to reflect</p>
          </main>

          <section className="flex items-center gap-10 mb-13 border-3 border-[#d8d8d8] bg-white h-[100px] p-15 rounded-xl w-[350px] sm:w-[500px] md:w-[550px] lg:w-[800px] text-justify transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:border-[#98c69f] hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
            <figure> <ClipboardCheck size={60}/> </figure>

            <div className="flex-2 px-auto">
              <section className="flex flex-col gap-2">
              <p className="font-bold text-sm sm:text-xl md:text-xl lg:text-2xl">Your Reflections</p>
              <p className="text-[#312E2E] text-[13px] sm:text-base md:text-lg lg:text-lg">{interpretation}</p>
              </section>
            </div>

          </section>

          <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-13 border-3 border-[#d8d8d8] bg-white h-auto p-6 sm:p-8 rounded-xl w-[350px] sm:w-[500px] md:w-[550px] lg:w-[800px] text-justify transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:border-[#98c69f] hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
            <figure className="w-full md:w-auto flex justify-center md:justify-start"> 
              <MessageSquareText size={60} /> 
            </figure>

          <div className="flex-2">
            <section className="flex flex-col gap-2 text-center md:text-left">
              <p className="font-bold text-xl sm:text-2xl">A Message for You</p>
              <p className="text-[#312E2E] text-[14px] sm:text-[15px] md:text-[16px] text-justify">
                {feedback}
              </p>
            </section>
          </div>
          </section>

        </section>
      </main>
    </>
  );
}
