import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-align-justify"
    >
      <path d="M3 12h18" />
      <path d="M3 18h18" />
      <path d="M3 6h18" />
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#000F14]">

      <div className="h-12 flex justify-between items-center py-8 px-8 border-b-4 border-blue-200">
        <div>
          <a
            href="#home"
            className="text-2xl font-extrabold text-blue-400 cursor:pointer"
          >
            Baran.<span>buluc</span>
          </a>
        </div>
        <a
          className="text-blue-200 sm:hidden hover:text-blue-400 cursor-pointer"
          onClick={handleClick}
        >
          {icon}
        </a>

        {isOpen && <MobileNavbar action={handleClick}/>}

        <ul className="hidden sm:flex items-center gap-x-10 pr-4">
          <li>
            <a
              href="#home"
              className="relative text-blue-200 font-extrabold after:block after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative text-blue-200 font-extrabold after:block after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative text-blue-200 font-extrabold after:block after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative text-blue-200 font-extrabold after:block after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
