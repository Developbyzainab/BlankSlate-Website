
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      
      <div className="flex flex-row items-center gap-16">
        
        {/* Big 404 */}
        <h1 className="text-[220px] md:text-[260px]  leading-none text-black">
          404
        </h1>

        {/* Text */}
        <div className="flex flex-col">
          <h2 className="text-4xl  mb-2">We’re Sorry.</h2>

          <p className=" mb-6 max-w-md text-xl">
            We couldn’t find the page you’re looking for.
          </p>

           <div className="relative inline-block">
                    <Image
                      src="/cile.png"
                      alt="Button Shape"
                      width={35}
                      height={35}
                      className="absolute -mt-1"
                    />
                    <button className="ml-3">
                      Go back to home.
                    </button>
                  </div>
        </div>

      </div>

    </div>
  );
}