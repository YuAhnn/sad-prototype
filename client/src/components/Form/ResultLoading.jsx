import Loading from "../Loading"

export default function ResultLoading() {
    return(
        <>  
            <main className="flex flex-col items-center">
                 <Loading/>
                 <h1 className="absolute bottom-55 sm:bottom-80 md:bottom-80 lg:bottom-80 text-gray-700 font-black text-xl sm:text-2xl md:text-3xl lg:text-3xl" id="loading">Preparing your result...</h1>
            </main>
        </>
    )
}