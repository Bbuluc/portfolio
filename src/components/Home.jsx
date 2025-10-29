import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div
      id="home"
      className="scroll-mt-54 sm:scroll-mt-84 flex flex-col justify-center items-center mt-40 mb-32 sm:mt-70 sm:mb-72"
    >
      <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold text-blue-200">
        Hello, I'm <span class="text-orange-500">Baran Buluc</span>
      </h1>
      <h2 class="text-2xl sm:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text pb-8">
        Full-Stack Developer
      </h2>
      <p className="text-blue-200 px-10 sm:max-w-[600px] lg:max-w-[700px] lg:text-xl">
        I'm a Full-Stack Developer passionate about building responsive,
        user-friendly, and visually appealing web applications. I enjoy turning
        ideas into reality with clean, efficient code, combining frontend and
        backend technologies to create seamless digital experiences.
      </p>
      <p className="text-blue-200 px-10 sm:max-w-[600px] lg:max-w-[700px] lg:text-xl p-4">
        I am committed to continuous learning, exploring new frameworks, tools, and best practices every day. Currently, I’m also expanding my skills in Data Science and Machine Learning. I am seeking a professional entry-level position where I can contribute, grow, and deepen my expertise in full-stack development.
      </p>
      <div className="flex gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/baran-bulu%C3%A7-999a88123/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-800 w-[60px] h-[60px] hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://github.com/Bbuluc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="text-white w-[60px] h-[60px] hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}
