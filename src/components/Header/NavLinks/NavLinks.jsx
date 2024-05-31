import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLinks({closeMenu}) {
  return (
    <nav>
      <ul className="flex items-center gap-x-8 font-bold text-lg text-white uppercase md:text-base md:gap-x-4 sm:fixed sm:z-40 sm:flex sm:flex-col sm:justify-around sm:w-3/4 sm:h-1/3 sm:top-20 sm:left-1/2 sm:-translate-x-1/2 sm:bg-white sm:rounded-md sm:text-black sm:animate-blurred-fade-in">
        <li>
          <Link to="/space-tourism" onClick={closeMenu} className="relative transition-all duration-300 ease-in-out after:h-1 after:w-0 after:bg-white after:block after:left-0 after:absolute hover:after:-bottom-4 hover:after:animate-fade after:content-[''] hover:after:w-full hover:text-neutral-300 active:text-neutral-95">00 Home</Link>
        </li>
        <li>
          <Link to="/space-tourism/destination" onClick={closeMenu} className="relative transition-all duration-300 ease-in-out after:h-1 after:w-0 after:bg-white after:block after:left-0 after:absolute hover:after:-bottom-4 hover:after:animate-fade after:content-[''] hover:after:w-full hover:text-neutral-300 active:text-neutral-95">01 Destination</Link>
        </li>
        <li>
          <Link to="/space-tourism/crew" onClick={closeMenu} className="relative transition-all duration-300 ease-in-out after:h-1 after:w-0 after:bg-white after:block after:left-0 after:absolute hover:after:-bottom-4 hover:after:animate-fade after:content-[''] hover:after:w-full hover:text-neutral-300 active:text-neutral-95">02 Crew</Link>
        </li>
        <li>
          <Link to="/space-tourism/technology" onClick={closeMenu} className="relative transition-all duration-300 ease-in-out after:h-1 after:w-0 after:bg-white after:block after:left-0 after:absolute hover:after:-bottom-4 hover:after:animate-fade after:content-[''] hover:after:w-full hover:text-neutral-300 active:text-neutral-95">03 Technology</Link>
        </li>
      </ul>
    </nav>
  );
}

