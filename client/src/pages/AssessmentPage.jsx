import { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import Loading from '../components/Loading'
import Error from '../components/Error';
import Photo from '../assets/illus.png';
import Card from '../components/Card';
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
      <figure className="flex justify-center mt-20 px-5">
        <div className="relative z-[-1] w-full max-w-[1250px]">
          <img src={Photo} alt="Illustration" className="w-[600px] h-[300px] brightness-90 sm:w-full lg:w-full lg:brightness-100 lg:h-auto lg:object-contain rounded-4xl" />
          <section className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <p className="font-black text-2xl sm:text-2xl md:text-4xl lg:text-6xl mb-6">Take a Step <span id="ok">Towards</span> Clarity</p>
            <p className="font-bold text-[13px] lg:text-3xl">Choose a test - quick, free, confidential</p>
          </section>
        </div>
      </figure>

      <main className="flex justify-center mt-10 px-5 py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {tools.map(tool => (
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
