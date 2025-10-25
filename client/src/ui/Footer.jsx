export default function Footer() {
  return (
    <footer className="bg-[#eaecef] w-full flex flex-col justify-evenly items-center py-10 mt-auto">
      <div className="text-center">
        <p className="font-bold">Compass © 2025</p>
        <p className="text-gray-800 mt-2">For individuals 18 years old and above</p>
      </div>
      <div className="w-[85%] md:w-[65%] lg:w-[50%] mt-5 sm:mt-6 lg:mt-8">
        <p className="text-justify lg:text-center text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-gray-700 leading-relaxed">
          ⓘ <strong>Disclaimer:</strong> Compass is for educational and research
          purposes only. It is not a substitute for professional mental health
          advice, diagnosis, or treatment. If you are in crisis, please contact
          a licensed professional or local hotline immediately.
        </p>
      </div>
    </footer>
  );
}
