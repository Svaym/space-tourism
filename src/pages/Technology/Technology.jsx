import { info } from "./data"
import { useState } from "react"

export default function Technology() {
  const [launch, setLaunch] = useState(0)
  return (
    <section className="pb-4">
      <div className="container">
        <div className="pl-16 mt-8 lg:pl-0 xs:mt-2">
          <h2 className="text-2xl tracking-wide uppercase lg:text-center">
            <span className="text-gray-400">03</span> Space launch 101
          </h2>
          <div className="mt-12 flex items-center gap-x-12 lg:gap-x-8 lg:flex-col xs:mt-7">
            <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-3 lg:gap-y-0 lg:gap-x-7">
              <button onClick={() => setLaunch(0)} className={`px-7 py-4 rounded-full text-2xl font-bold outline outline-2 outline-white xs:px-4 xs:py-2 xs:text-base ${launch===0 ? 'bg-white text-black' : 'text-white transition-colors duration-300 ease-linear hover:bg-white hover:text-black'}`}>1</button>
              <button onClick={() => setLaunch(1)} className={`px-7 py-4 rounded-full text-2xl font-bold outline outline-2 outline-white xs:px-4 xs:py-2 xs:text-base ${launch===1 ? 'bg-white text-black' : 'text-white transition-colors duration-300 ease-linear hover:bg-white hover:text-black'}`}>2</button>
              <button onClick={() => setLaunch(2)} className={`px-7 py-4 rounded-full text-2xl font-bold outline outline-2 outline-white xs:px-4 xs:py-2 xs:text-base ${launch===2 ? 'bg-white text-black' : 'text-white transition-colors duration-300 ease-linear hover:bg-white hover:text-black'}`}>3</button>
            </div>
            <div className="">
              {info.map((item, id) => (
                <>
                  <div key={id} className={launch === id ? "flex items-center gap-x-14 animate-blurred-fade-in lg:flex-col lg:gap-x-0 lg:mt-10 lg:gap-y-7 xs:mt-3" : "hidden"}>
                    <div className="lg:text-center">
                      <h4 className="uppercase text-lg text-gray-400 xs:mt-3 xs:text-base">The terminology...</h4>
                      <h3 className="uppercase tracking-wide text-4xl mt-2 xs:mt-1 xs:text-2xl">{item.title}</h3>
                      <p className="text-gray-400 mt-5 lg:text-gray-300 lg:w-3/4 lg:mx-auto xs:w-[95%] xs:mt-2 xxs:w-full">{item.desc}</p>
                    </div>
                    <img className="w-[32rem] h-[25rem] object-cover rounded-md lg:h-[22rem] lg:w-[37rem] xs:h-60 xs:w-full xxs:h-60" src={item.img} alt={item.title} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
