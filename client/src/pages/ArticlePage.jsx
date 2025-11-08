import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
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
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-6.png", 
        link: "https://www.christiancounselingwpa.com/articles/anxiety-and-existential-psychology-a-biblical-perspective", 
        title: "Anxiety, Existential Psychology, and Biblical Hope",
        text: 'Anxiety and Existential Psychology: A Biblical Perspective" explores existential concerns like death, meaning, isolation, and freedom, offering biblical responses through faith, hope, and divine purpose, integrating psychology with Christian teachings.',
        source: "Source: Richard Hoffman, Ph.D. – Anxiety and Existential Psychology: A Biblical Perspective"
    },

    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-5.png", 
        link: "https://advancedpsychiatryassociates.com/resources/blog/solo-activities-for-depression", 
        title: "Solo Activities to Help Cope with Depression",
        text: "Solo activities can provide a valuable outlet for those dealing with depression. Engaging in solitary activities such as taking walks, practicing yoga, reading, or working on arts and crafts can help reduce stress, improve mood, and combat feelings of loneliness. These activities, while simple, offer a way to redirect focus from negative thoughts, giving individuals a sense of accomplishment and relaxation, which is essential for mental health recovery.",
        source: "Source: Advanced Psychiatry Associates – Solo Activities for Depression"
    },

    {
        pic: "https://raw.githubusercontent.com/YuAhnn/_compass_img/refs/heads/main/image-7.avif", 
        link: "https://health.clevelandclinic.org/how-to-heal-from-trauma", 
        title: "The Impact of Trauma and Steps Toward Healing",
        text: 'Trauma can be a lasting emotional response that affects both mental and physical health. It can come from big "T" events like violent accidents or natural disasters, or from smaller "t" trauma such as bullying or relationship struggles. Healing is possible through therapy, self-care, mindfulness, and understanding your personal triggers. By addressing the trauma head-on, individuals can begin the process of emotional recovery and reclaim their peace.'  ,
        source: "Source: Cleveland Clinic – How to Heal from Trauma"
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
                            <button className='bg-[#3fb185] p-2 rounded-full w-25 text-white font-bold transition duration-300 ease-in-out hover:bg-[#2a8f6d] active:bg-[#2a8f6d] cursor-pointer'>
                                Prev
                            </button>
                            <button className='bg-[#3fb185] p-2 rounded-full w-25 text-white font-bold transition duration-300 ease-in-out hover:bg-[#2a8f6d] active:bg-[#2a8f6d] cursor-pointer'>
                                Next
                            </button>
                        </section>
                    </main>
                </figure>
                
            <Footer/>
        </>
    )
}