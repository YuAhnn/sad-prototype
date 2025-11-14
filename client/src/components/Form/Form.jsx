import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import ResultLoading from '../Form/ResultLoading'
import ResultPage from './ResultPage' //try this component

export default function Form({ assessment }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null)
  const [isCalculate, setCalculate] = useState(false)
  // const [isSubmit, setIsSubmit] = useState(false) //sample: not official

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
  };

  // console.log(answers)//for debug

  const handleNext = () => {
      if (isLastQuestion) {
        setCalculate(true)
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
  };

  const navigate = useNavigate()

  const handleBack = () => {
    if (currentQuestion === 0) {
      navigate('/assessment')
    } else {
      setCurrentQuestion((prev) => prev - 1)
    }
  };

  const progressBar = () => {
    const progressPercent = (currentQuestion + 1) / assessment.questions.length;
    return `${progressPercent * 100}%`;
  };

  useEffect(() => {
    if (!isCalculate) return; 

    let total = 0;

    for (let key in answers) {
      total += Number(answers[key]);
    }
  
  const interpretation = assessment.result.find(
    (range) => total >= range.min && total <= range.max
  )

  setResult(interpretation);

  const timer = setTimeout(() => {  
    setCalculate(false);
  }, 3000)
  
  return () => clearTimeout(timer)

  }, [isCalculate, answers, assessment.result]);

  const question = assessment.questions[currentQuestion]
  const options = Object.entries(assessment.scoring.scale)
  const selected = answers[currentQuestion];
  const isLastQuestion = currentQuestion === assessment.questions.length - 1

  // if (isSubmit) return <ResultPage interpretation={result}/> //sample: not official
  if (isCalculate) return <ResultLoading />
  if (!isCalculate && result) return <ResultPage interpretation={result.result} />

  return (
    <>
      <section className="flex justify-between items-center mt-2 h-10 px-[2%] sm:px-[3%] md:px-[15%] lg:px-[20%] xl:px-[28%]">
          <button onClick={handleBack} className="text-xl hover:underline cursor-pointer">
            <ChevronLeft size={35}/>
          </button>
          
          <div className="grow">
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-primary-color h-3 rounded-full transition-all duration-700 ease-in-out" 
                        style={{ width: progressBar() }}>
                    </div>
                </div>
            </div>
      </section>

      <main className="flex flex-col items-center max-w-xl mx-auto mt-10 px-4">
        <div className="flex items-center mb-13 border-2 border-primary-color bg-[#DAEFE6] h-[100px] p-6 rounded-xl w-[350px] sm:w-[500px] md:w[550px] lg:w-[600px] text-justify">
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
            ${selected !== undefined ? "bg-primary-color text-white hover:bg-[#3fb185c7]" : "bg-gray-300 text-white"}`}>
              {isLastQuestion ? "Submit" : "Continue"}
        </button>

      </main>
    </>
  );
}
