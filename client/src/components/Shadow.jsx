export default function Shadow( { component } ) {
  return (
    <>
      <div className="relative border-t-2 border-t-gray-200 rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[150px] w-full min-h-[80vh] overflow-visible">
        <div className="relative z-10 flex items-center justify-center h-full">
            {component}
        </div>
        <div
          className="
            absolute z-[-1] pointer-events-none
            top-70 left-20
            lg:top-50 lg:left-40
            w-[150px] h-[150px]
            sm:w-[250px] sm:h-[250px]
            md:w-[350px] md:h-[350px]
            lg:w-[450px] lg:h-[450px]
            rounded-full bg-[#3fb185]
            blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
            opacity-20
            sm:opacity-20
            md:opacity-23
            lg:opacity-26
            animate-none
            // [animation-duration:6s]
            // [animation-timing-function:ease-in]
          "
        ></div>

        <div
          className="
            absolute z-[-1] pointer-events-none
            top-60 right-20
            lg:top-50 lg:right-40
            w-[150px] h-[150px]
            sm:w-[250px] sm:h-[250px]
            md:w-[350px] md:h-[350px]
            lg:w-[450px] lg:h-[450px]
            rounded-full bg-[#4c65be]
            blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
            opacity-40
            sm:opacity-15
            md:opacity-20
            lg:opacity-25
            animate-none
            // [animation-duration:6s]
            // [animation-timing-function:ease-in]
          "
        ></div>
      </div>
    </>
  );
}
