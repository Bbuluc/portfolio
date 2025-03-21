export default function Aboutme() {
  return (
    <div id='about' className="h-screen flex flex-col justify-center items-center">
      <h1 class="text-2xl sm:text-4xl font-bold text-blue-200">
        Hello, I'm <span class="text-orange-500">Baran Buluc</span>
      </h1>
      <h2 class="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text pb-8">
        Front-End Developer
      </h2>
      <p className="text-blue-200 px-10 sm:max-w-[600px]">I'm a passionate Front-End Developer with a strong focus on creating responsive, user-friendly, and visually appealing web applications. Eager to improve myself, I constantly explore new technologies and best practices to enhance my skills. I enjoy turning ideas into reality with clean and efficient code, striving to build seamless digital experiences.</p>
    </div>
  );
}

