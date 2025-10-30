export default function ArticleCard({ img, title, link, text, source }) {
    return (
     <div className="w-full">
        <figure className="max-w-7xl mx-auto my-6 bg-[#f3f4f6] rounded-xl transition duration-300 ease-in-out hover:shadow-xl flex flex-col md:flex-row shadow-md">

            <div className="shrink-0 md:max-w-xs lg:max-w-sm">
                <img  src={img} alt={title} className="w-full h-48 md:h-full rounded-t-xl md:rounded-t-none md:rounded-l-xl object-cover"/>
            </div>

            <main className="flex flex-col items-start p-4 lg:p-6 grow">
                <a href={link} target="_blank" className="font-bold text-xl sm:text-2xl text-[#253267] drop-shadow-md mb-2 sm:mb-3 transition duration-200 ease-in-out hover:underline hover:decoration-[#8791b9] hover:underline-offset-4 active:underline active:decoration-[#8791b9] active:underline-offset-4 line-clamp-2">
                    {title}
                </a>
                    <p className="text-sm sm:text-[18px] text-justify text-[#333333] mt-6 line-clamp-5 sm:line-clamp-3">{text}</p>
                    <p className="text-[#666666] mt-auto text-xs lg:text-sm">{source}</p>
            </main>
        </figure>
     </div>
    )
}