export default function ShadowNoBorder( { component } ) {
  return (
    <>
      <div className="relative z-1 w-full min-h-[80vh] overflow-visible">
        <div className="relative z-10 flex items-center justify-center h-full">
            {component}
        </div>
        <div
          className="
            absolute z-[-1]
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
            lg:opacity-40
          "
        ></div>

        <div
          className="
            absolute z-[-1]
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
            lg:opacity-40
          "
        ></div>
      </div>
    </>
  );
}
