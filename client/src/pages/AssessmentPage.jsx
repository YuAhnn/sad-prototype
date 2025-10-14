import NavBar from '../ui/NavBar'
import Footer from '../ui/Footer'
import Photo from '../assets/illus.png'
import Card from '../components/Card';
import rainy from '../assets/rainy.png'

const Depression = {
  name: "Depression",
  id: "depression"
};

export default function AssessmentPage() {
    return (
        <>
            <NavBar />

            <figure className="flex justify-center mt-20 px-5">
                <div className="relative z-[-1] w-full max-w-[1250px]">
                    <img src={Photo} alt="Illustration" className="w-full object-contain rounded-4xl" />
                    <section className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <p className="font-black text-2xl sm:text-2xl md:text-4xl lg:text-6xl mb-6"> Take a Step <span id="ok">Towards</span> Clarity</p>
                        <p className="font-bold text-xl lg:text-3xl">Choose a test - quick, free, confidential</p>
                    </section>
                </div>
            </figure>

            <main className='flex justify-center mt-10 px-5 py-15 '>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card 
                        icon={rainy} 
                        alt="Depression" 
                        instrument={Depression} 
                        text="A quiet moment to relax and reflect" 
                        toolId={`/assessment/${Depression.id}`} 
                    />
                </div>
            </main>

            <Footer/>
        </>
    );
}

