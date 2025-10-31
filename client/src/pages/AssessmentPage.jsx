import { useEffect, useState } from 'react';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import Loading from '../components/ui/Loading'
import Error from '../components/ui/Error';
import Photo from '../assets/illus.png';
import Card from '../components/cards/Card';
import { fetchTests } from '../firebase/db'

export default function AssessmentPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTests()
        setTools(data)
      } catch (error) {
        console.error("Error fetching tools:", error);
        setError(error)
      } finally {
         setLoading(false)
      }
    };

    fetchData();

  }, []);

  if(loading) return <Loading/>
  if(error) return <Error/>
  
  return (
    <>
      <NavBar />

      <figure className="mx-4 sm:mx-8 lg:mx-20 my-10 w-auto min-h-[350px] lg:min-h-[400px] bg-linear-to-r from-[#3fb185] to-[#2a8f6d] rounded-3xl 
      shadow-xl flex items-center justify-center text-center px-6 sm:px-10 py-12 hover:scale-[1.01] transition-transform duration-500 ease-in-out">
        <section>
          <p className="font-extrabold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md mb-4">TAKE A STEP TOWARD CLARITY</p>
          <p className="font-semibold text-gray-200 text-sm sm:text-lg md:text-xl lg:text-2xl">CHOOSE A TEST — QUICK, FREE, CONFIDENTIAL</p>
        </section>
      </figure>

      <main className="flex justify-center min-h-screen mt-10 px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  max-w-360 mx-auto">
          {tools.map((tool) => (
            <Card
              key={tool.toolId}
              icon={tool.icon}
              iconProps={tool.iconProps}
              alt={tool.title}
              instrument={{ name: tool.title }}
              text={tool.description}
              toolId={`/assessment/${tool.toolId}`}
              buttonText={tool.buttonText}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
