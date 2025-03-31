import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Aboutme() {
  return (
    <div
      id="about"
      className="h-screen flex flex-col sm:flex-col justify-center items-center pt-16 sm:mt-0"
    >
      <div className="flex flex-col justify-center items-center pb-16 sm:pb-24">
        <h1 className="text-blue-400 text-xl lg:text-2xl font-extrabold p-4">
          Dokuz Eylul University
        </h1>
        <p className="text-blue-200 lg:text-xl font-bold sm:max-w-[600px]">
          Bachelor in Mechanical Engineering
        </p>

        <h1 className="text-blue-400 text-xl lg:text-2xl pt-8 font-extrabold">
          University of Economics
        </h1>
        <h1 className="text-blue-400 text-xl lg:text-2xl font-extrabold">and</h1>
        <h1 className="text-blue-400 text-xl lg:text-2xl pb-2 font-extrabold">
          Human Sciences in Warsaw
        </h1>
        <p className="text-blue-200 font-bold lg:text-xl sm:max-w-[600px]">
          Master in Computer Science
        </p>
      </div>

      <div className="w-full grid grid-cols-3 items-center justify-items-center sm:flex sm:flex-row sm:justify-center">
        <div>
          <FaReact className="text-blue-500 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaJsSquare className="text-yellow-500 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaPython className="text-blue-400 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <RiTailwindCssFill className="text-blue-500 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaCss3 className="text-blue-300 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaHtml5 className="text-orange-600 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaGitAlt className="text-gray-100 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaBootstrap className="text-blue-800 w-[60px] h-[60px] mb-4" />
        </div>
        <div>
          <FaSass className="text-pink-500 w-[60px] h-[60px] mb-4" />
        </div>
      </div>
    </div>
  );
}
