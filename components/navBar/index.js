import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="shadow-md">
      <nav className="bg-gray-100 -mb-[5px] border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href={`/`}>
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                className="h-[70px] mr-3"
                alt="Flowbite Logo"
              />
              {/* <span className="self-center text-black text-xl font-semibold whitespace-nowrap dark:text-white">
                Eagle Lighting
              </span> */}
            </a>
          </Link>
          <div className="flex items-center">
            <a
              href="tel:5555555555"
              className="mr-6 underline text-md font-medium text-gray-500 decoration-[#ffce58] decoration-2 underline-offset-4 dark:text-white hover:underline"
            >
              (555) 555-5555
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-100 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex justify-center items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-[#5d5d5d] text-[16px] dark:text-white decoration-[#ffce58] decoration-2 underline-offset-4 hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5d5d5d] text-[16px] dark:text-white decoration-[#ffce58] decoration-2 underline-offset-4 hover:underline"
                >
                  Gallary
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5d5d5d] text-[16px] dark:text-white decoration-[#ffce58] decoration-2 underline-offset-4 hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5d5d5d] text-[16px] dark:text-white decoration-[#ffce58] decoration-2 underline-offset-4 hover:underline"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
