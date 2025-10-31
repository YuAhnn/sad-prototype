import { Link } from "react-router-dom";
export default function Error() {
  return (
      <>
      <div className="flex flex-col justify-center text-[#292828] h-[600px] min-h-screen cursor-pointer">
        <div className="max-w-[1000px] -mt-24 w-full mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-gray-500 text-[20px] sm:text-2xl md:text-3xl lg:text-4xl md:py-2 px-10 leading-tight">The page you are looking for can’t be found.</h1>
            <h1 className="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-black md:py-2 leading-tight transition duration-500 ease-in-out hover:text-red-600">404</h1>
            <Link to="/" className="bg-red-500 w-[150px] lg:w-[200px] text-[12px] lg:text-[16px]  rounded-full font-medium my-6 py-3 text-white text-center hover:bg-[#daefe6] hover:text-[#3fb185] transition-all duration-200 ease-in-out transform hover:scale-[1.03] active:bg-[#daefe6] active:text-[#3fb185] active:scale-95 active:opacity-90 touch-manipulation">Go Back to Homepage</Link>
        </div>
    </div>
      </>
  );
}
