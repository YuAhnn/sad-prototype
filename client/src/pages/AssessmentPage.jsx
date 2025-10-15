import { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import LoadingPage from './LoadingPage'
import ErrorPage from './ErrorPage';
import Photo from '../assets/illus.png';
import Card from '../components/Card';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
export default function AssessmentPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tests'));
        const toolsList = querySnapshot.docs.map(doc => doc.data());
        setTools(toolsList);
      } catch (error) {
        console.error("Error fetching tools:", error);
        setError(error)
      } finally {
         setLoading(false)
      }
    };

    fetchTools();
  }, []);

  if(loading) return <LoadingPage/>
  if(error) return <ErrorPage/>
  return (
    <>
      <NavBar />

      <figure className="flex justify-center mt-20 px-5">
        <div className="relative z-[-1] w-full max-w-[1250px]">
          <img src={Photo} alt="Illustration" className="w-full object-contain rounded-4xl" />
          <section className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <p className="font-black text-2xl sm:text-2xl md:text-4xl lg:text-6xl mb-6">Take a Step <span id="ok">Towards</span> Clarity</p>
            <p className="font-bold text-xl lg:text-3xl">Choose a test - quick, free, confidential</p>
          </section>
        </div>
      </figure>

      <main className="flex justify-center mt-10 px-5 py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map(tool => (
            <Card
              key={tool.toolId}
              icon={tool.icon}
              iconProps={tool.iconProps || { size: 60, color: "#4b5563" }}
              alt={tool.title}
              instrument={{ name: tool.title }}
              text={tool.description}
              toolId={`/assessment/${tool.toolId}`}
              buttonText={tool.buttonText || "Start"}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
