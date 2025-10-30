export default function Shadow( { component } ) {
  return (
    <>
      <div className="relative w-full min-h-screen border-b border-b-gray-200 rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[150px] mb-4 shadow-[0_10px_15px_rgba(0,0,0,0.10)] overflow-visible mt-50">
        <div className="relative bottom-35 z-100 flex items-center justify-center h-full">
            {component}
        </div>
        <div
          className="
            absolute z-[-1]
            w-[100px] h-[100px]
            top-100 right-100
            sm:top-100 sm:right-100
            md:top-100 md:right-100
            lg:top-100 lg:left-40
            sm:w-[250px] sm:h-[250px]
            md:w-[350px] md:h-[350px]
            lg:w-[450px] lg:h-[450px]
            rounded-full bg-[#3fb185]
            blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
            opacity-50 sm:opacity-20 md:opacity-23 lg:opacity-40 
          ">
          </div>

          <div
            className="
              absolute z-[-1] 
              top-120 right-90
              w-[100px] h-[100px]
              sm:w-[250px] sm:h-[250px]
              md:w-[350px] md:h-[350px]
              lg:w-[450px] lg:h-[450px]
              rounded-full bg-[#4c65be]
              blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
              opacity-50 sm:opacity-20 md:opacity-23 lg:opacity-40
            ">
          </div>
      </div>
    </>
  );
}
