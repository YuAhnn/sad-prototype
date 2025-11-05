import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import Btn from '../components/ui/Btn'
import ArticleCard from '../components/cards/ArticleCard'

//only example content:))
const sample = [
    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-1.png", 
        link: "https://my.clevelandclinic.org/health/diseases/9290-depression", 
        title: "Depression Explained",
        text: "Depression is more than just feeling sad – it’s a serious mental health condition that affects how a person thinks, feels, and behaves. Learn about symptoms, causes, treatment, and types of depression",
        source: "Source: Cleveland Clinic – Depression"
    },

    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-1.png", 
        link: "https://my.clevelandclinic.org/health/diseases/9290-depression", 
        title: "Depression Explained",
        text: "Depression is more than just feeling sad – it’s a serious mental health condition that affects how a person thinks, feels, and behaves. Learn about symptoms, causes, treatment, and types of depression",
        source: "Source: Cleveland Clinic – Depression"
    },

    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-1.png", 
        link: "https://my.clevelandclinic.org/health/diseases/9290-depression", 
        title: "Depression Explained",
        text: "Depression is more than just feeling sad – it’s a serious mental health condition that affects how a person thinks, feels, and behaves. Learn about symptoms, causes, treatment, and types of depression",
        source: "Source: Cleveland Clinic – Depression"
    },

    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-1.png", 
        link: "https://my.clevelandclinic.org/health/diseases/9290-depression", 
        title: "Depression Explained",
        text: "Depression is more than just feeling sad – it’s a serious mental health condition that affects how a person thinks, feels, and behaves. Learn about symptoms, causes, treatment, and types of depression",
        source: "Source: Cleveland Clinic – Depression"
    }
]

export default function ArticlePage(){
    return(
        <>
            <NavBar/> 

                <figure className=" my-10 w-auto min-h-[250px] lg:min-h-[300px] bg-linear-to-r from-[#3fb185] to-[#2a8f6d]
                shadow-xl flex items-center justify-center text-center px-6 sm:px-10 py-12">
                </figure>
                    <main className='relative bottom-50 mx-8 sm:mx-16 md:mx-25 lg:mx-40 my-10 w-auto min-h-[90px] lg:min-h-[100px] bg-white rounded-3xl shadow-xl flex items-center justify-center text-center px-6 sm:px-10'>
                        <section>

                            {sample.map((s, id) => (
                                <ArticleCard
                                    key={id}
                                    img={s.pic}
                                    title={s.title}
                                    link={s.link}
                                    text={s.text}
                                    source={s.source}
                                />
                            ))}

                        </section>
                    </main>

                <figure className="relative top-20 my-10 w-auto min-h-[150px] lg:min-h-[71px] border-t-2 border-gray-300 flex items-center justify-end text-center px-6 sm:px-10 py-8">
                    <main className='flex flex-col items-end gap-10 px-[5%]'>
                        <section className='flex gap-6'>
                            <Btn label="Prev"></Btn>
                            <Btn label="Next"></Btn>
                        </section>
                    </main>
                </figure>
                
            <Footer/>
        </>
    )
}