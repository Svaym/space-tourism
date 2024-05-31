import { planet } from "./planets";
import { useState } from "react";

export default function Destination() {
  const [planets, setPlanets] = useState(0);
  return (
    <section className="">
      <div className="container">
        <div className="pl-16 mt-8 md:pl-0">
          <h2 className="text-2xl tracking-wide uppercase md:text-center">
            <span className="text-gray-400">01</span> Pick your destination
          </h2>
          <div className="mt-10 flex items-center gap-x-20 md:flex-col">
            {planet.map((item, id) => (
              <>
                <div key={id} className={planets === id ? 'block w-1/2' : 'hidden'}>
                  <img
                    src={item.img}
                    className={planets === id ? 'block mx-auto animate-fade-out w-76 md:w-64' : 'hidden'}
                    key={item.id}
                    alt="planet"
                  />
                </div>
                <div className={planets === id ? "block px-12 w-1/2 max-w-full animate-slide-in-bottom md:w-full" : 'hidden'}>
                  <div className="flex items-center gap-x-9 font-medium tracking-widest text-gray-400 lg:gap-x-6 md:gap-x-0 md:justify-around md:mt-5">
                    <button onClick={() => setPlanets(0)} className={`relative uppercase transition-all duration-300 ease-in-out after:h-[2px] after:w-0 after:bg-white after:block after:left-0 after:absolute after:content-[''] active:text-neutral-95 ${planets===0 ? 'text-neutral-300 after:w-full after:-bottom-1' : 'hover:after:-bottom-1 hover:after:animate-fade hover:after:w-full hover:text-neutral-300'}`}>moon</button>
                    <button onClick={() => setPlanets(1)} className={`relative uppercase transition-all duration-300 ease-in-out after:h-[2px] after:w-0 after:bg-white after:block after:left-0 after:absolute after:content-[''] active:text-neutral-95 ${planets===1 ? 'text-neutral-300 after:w-full after:-bottom-1' : 'hover:after:-bottom-1 hover:after:animate-fade hover:after:w-full hover:text-neutral-300'}`}>mars</button>
                    <button onClick={() => setPlanets(2)} className={`relative uppercase transition-all duration-300 ease-in-out after:h-[2px] after:w-0 after:bg-white after:block after:left-0 after:absolute after:content-[''] active:text-neutral-95 ${planets===2 ? 'text-neutral-300 after:w-full after:-bottom-1' : 'hover:after:-bottom-1 hover:after:animate-fade hover:after:w-full hover:text-neutral-300'}`}>europa</button>
                    <button onClick={() => setPlanets(3)} className={`relative uppercase transition-all duration-300 ease-in-out after:h-[2px] after:w-0 after:bg-white after:block after:left-0 after:absolute after:content-[''] active:text-neutral-95 ${planets===3 ? 'text-neutral-300 after:w-full after:-bottom-1' : 'hover:after:-bottom-1 hover:after:animate-fade hover:after:w-full hover:text-neutral-300'}`}>titan</button>
                  </div>
                  <h2 className={planets === id ? "font-bold text-8xl mt-5 md:text-center" : 'hidden'}>
                    {item.name}
                  </h2>
                  <p className={planets === id ? 'text-gray-300 mt-4 w-5/8 font-medium lg:w-full md:w-full md:mx-auto md:text-center md:font-semibold' : 'hidden'}>
                    {item.description}
                  </p>
                  <div className={planets === id ? 'w-full h-[1px] bg-gray-700 mt-8' : 'hidden'}></div>
                  <div className="flex gap-x-40 mt-3 xl:gap-x-32 lg:gap-x-20 md:font-semibold md:justify-between">
                    <div className={planets === id ? 'block' : 'hidden'}>
                      <h3 className="text-gray-300 xxs:text-[15px]">Avg. distance</h3>
                      <h3 className="uppercase text-2xl lg:text-lg xxs:text-base">
                        {item.distance}
                      </h3>
                    </div>
                    <div className={planets === id ? 'block' : 'hidden'}>
                      <h3 className="text-gray-300 xxs:text-[15px]">Est. travel time</h3>
                      <h3 className="uppercase text-2xl lg:text-lg xxs:text-base">
                        {item.travelTime}
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
