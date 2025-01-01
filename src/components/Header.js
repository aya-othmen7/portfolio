import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/back.PNG)' }}>
      <div className="h-full flex flex-col justify-between text-white bg-black bg-opacity-50">
        {/* Title Section */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center px-6 sm:text-6xl md:text-7xl lg:text-8xl">Welcome to My Portfolio</h1>
        </div>
        
        {/* Navigation Section */}
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Aya Othmen</h1>
          <nav className="bg-gray-800 shadow-lg rounded-lg py-3 px-6 m-0">
  <ul className="flex space-x-0 m-0">
    <li className="w-full">
      <Link
        to="about"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        About
      </Link>
    </li>
    <li className="w-full">
      <Link
        to="education"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        Education
      </Link>
    </li>
    <li className="w-full">
      <Link
        to="experience"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        Experience
      </Link>
    </li>
    <li className="w-full">
      <Link
        to="projects"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        Projects
      </Link>
    </li>
    <li className="w-full">
      <Link
        to="skills"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        Skills
      </Link>
    </li>
    <li className="w-full">
      <Link
        to="contact"
        smooth
        duration={500}
        className="relative block text-white font-medium cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg no-underline hover:bg-white hover:text-gray-800 w-full text-center"
      >
        Contact
      </Link>
    </li>
  </ul>
</nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
