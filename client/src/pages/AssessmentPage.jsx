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
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <figure className='bg-[#3fb185] min-w-screen  h-[350px] lg:h-[400px] shadow-lg'>
          <div className='relative top-40'>
            <section className='flex flex-col items-center justify-center'>
              <p className='font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-5'>TAKE A STEP TOWARD CLARITY</p>
              <p className='font-bold text-sm sm:text-lg md:xl lg:text-1xl xl:text-2xl text-white'>CHOOSE A TEST - QUICK, FREE, CONFIDENTIAL</p>
            </section>
          </div>
      </figure>
      <main className="flex justify-center min-h-screen mt-10 px-5 py-15">
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

      <Footer/>
      </div>
    </>
  );
}
