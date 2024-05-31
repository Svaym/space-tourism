import { useState } from "react";
import { teammate } from "./teammates";

export default function Crew() {
  const [crew, setCrew] = useState(0);
  return (
    <section className="">
      <div className="container">
        <div className="pl-16 mt-8 md:pl-0 md:mt-6 xs:mt-2">
          <h2 className="text-2xl tracking-wide uppercase md:text-center">
            <span className="text-gray-400">02</span> Meet your crew
          </h2>
          {teammate.map((item, id) => (
            <>
              <div key={id} className={crew === id ? "flex animate-slide-up-fade md:flex-col-reverse md:text-center md:mt-12 xs:mt-16" : "hidden"}>
                <div className="mt-24 md:mt-10">
                  <h3 className="uppercase text-gray-400 text-3xl lg:text-xl">
                    {item.position}
                  </h3>
                  <h2 className="uppercase text-5xl font-medium mt-2 lg:text-3xl">
                    {item.name}
                  </h2>
                  <blockquote className="w-3/5 mt-5 xl:w-[85%] lg:text-[15px] lg:mt-3 md:mx-auto sm:mt-0">{item.quote}</blockquote>
                </div>
                <img src={item.img} className="h-[38rem] lg:h-[26rem] md:mx-auto xs:h-[24rem]" alt="author" />
              </div>
            </>
          ))}
          <div className="flex items-center gap-x-5 relative -mt-36 lg:-mt-12 md:static md:justify-center md:-mt-[39rem] sm:-mt-[40.5rem] xs:-mt-[40.5rem]">
            <button onClick={() => setCrew(0)} className={`p-2 rounded-full ${crew===0 ? 'bg-gray-300 lg:bg-gray-900' : 'bg-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-400 lg:bg-gray-700'}`}></button>
            <button onClick={() => setCrew(1)} className={`p-2 rounded-full ${crew===1 ? 'bg-gray-300 lg:bg-gray-900' : 'bg-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-400 lg:bg-gray-700'}`}></button>
            <button onClick={() => setCrew(2)} className={`p-2 rounded-full ${crew===2 ? 'bg-gray-300 lg:bg-gray-900' : 'bg-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-400 lg:bg-gray-700'}`}></button>
            <button onClick={() => setCrew(3)} className={`p-2 rounded-full ${crew===3 ? 'bg-gray-300 lg:bg-gray-900' : 'bg-gray-600 transition-colors duration-300 ease-linear hover:bg-gray-400 lg:bg-gray-700'}`}></button>
          </div>
        </div>
      </div>
    </section>
  );
}
