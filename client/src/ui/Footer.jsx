export default function Footer() {
    return(
        <footer className="relative bottom-0 z-[-1] bg-[#eaecef] h-full flex flex-col justify-evenly items-center py-10">
            <div>
                <p className="font-bold text-center">Compass © 2025</p>
                <p className="text-gray-800 mt-2">For individuals 18 years old and above</p>
            </div>
            <div className="w-[80%] md:w-[60%] lg:w-[49%] mt-5 sm:mt-6 lg:mt-8">
                 <p className="text-justify lg:text-center text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-gray-700">
                    ⓘ Disclaimer: Compass is for education and research purposes only. It is not substitute
                    for professional mental health advice, diagnosis, or treatment. If you are in crisis,
                    please contact a licensed professional or local hotline immediately. 
                </p>
            </div>
        </footer>
    )
}