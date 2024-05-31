import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mt-28 md:mt-16">
      <div className="container">
        <div className='pl-16 flex items-end md:pl-0 md:flex-col'>
          <div className="md:text-center">
            <h2 className='text-xl uppercase xs:text-lg'>So, you want to travel to</h2>
            <h1 className="text-9xl font-bold uppercase xs:text-7xl">Space</h1>
            <p className='w-[35%] mt-5 lg:w-2/3 md:mx-auto xs:w-[85%]'>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <Link to="/space-tourism/destination" className='uppercase text-2xl font-medium text-black bg-white rounded-full px-16 py-20 transition duration-700 ease-in hover:shadow-3xl hover:animate-duration-[1500] hover:animate-pulse md:mx-auto md:px-12 md:py-16 md:mt-20 xs:px-8 xs:py-12 xs:text-lg'>Explore</Link>
        </div>
      </div>
    </section>
  );
}
