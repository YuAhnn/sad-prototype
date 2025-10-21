import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

export default function Form({ assessment }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate()

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
      setCurrentQuestion((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      navigate('/assessment')
    } else {
      setCurrentQuestion((prev) => prev - 1)
    }
  };
  
  const question = assessment.questions[currentQuestion];
  const options = Object.entries(assessment.scoring.scale);
  const selected = answers[currentQuestion];
  const isLastQuestion = currentQuestion === assessment.questions.length - 1;

  return (
    <>
      <section className="flex justify-start mt-2 h-[40px] px-[29%] pt-4">
          <button onClick={handleBack} className="text-xl hover:underline cursor-pointer">
            <ChevronLeft size={35}/>
          </button>
          {/* ProgessBar (×_x）*/}
      </section>

      <main className="flex flex-col items-center max-w-xl mx-auto mt-10 px-4">
        <div className="flex items-center mb-13 border-2 border-[#3FB185] bg-[#DAEFE6] h-[100px] p-6 rounded-xl w-[350px] sm:w-[500px] md:w[550px] lg:w-[600px] text-justify">
          <p className="mt-2 text-[15px] sm:text-[16px] md:text-lg lg:text-lg">
            {question.text}
          </p>
        </div>

        <ul className="mb-6 space-y-3">
          {options.map(([score, label]) => (
            <li key={score}>
              <button
                onClick={() => handleSelect(score)}
                className={`p-4 rounded-xl px-10 text-left text-black border-2 transtion transoform duration-300 active:scale-[.97] w-[330px] sm:w-[440px] md:w-[460px] lg:w-[570px] cursor-pointer 
                ${selected == score ? "bg-[#D7E3ED] border-[#7084D2]" : "border-gray-300 hover:bg-gray-100"}`}>
                    {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleNext}
          disabled={!selected}
          className={`absolute bottom-5 sm:bottom-10 md:bottom-10 lg:bottom-10 py-4 px-20 rounded-full font-semibold cursor-pointer transition transform active:scale-[.97] drop-shadow-[2px_5px_2px_rgba(0,0,0,0.2)] 
            ${selected !== undefined ? "bg-[#3FB185] text-white hover:bg-[#3fb185c7]" : "bg-gray-300 text-white"}`}>
              {isLastQuestion ? "Submit" : "Continue"}
        </button>

      </main>
    </>
  );
}
