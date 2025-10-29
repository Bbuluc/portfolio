export default function ProjectItem({
  image,
  title,
  description,
  link,
  github,
  tech,
}) {
  return (
    <div className="flex border rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 bg-gray-800 text-white m-4 sm:w-[80%]">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-md mb-4"
      />
      <div className="ml-4">
        <a
          className="text-xl font-bold text-orange-400 mb-2 hover:text-orange-900"
          href={link}
          target="_blank"
        >
          {title}
        </a>
        <p className="text-blue-200">{description}</p>

        {/*tect stack with map function*/}
        <h4 className="mt-2 font-semibold text-orange-400 ">Tech Stack:</h4>
        <ul>
        {tech.map((techItem) => (
          <li key={techItem} className="text-blue-200">{techItem} </li>
        ))}
        </ul>
        <div className="mt-4 flex gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-sm font-semibold"
          >
            Live Demo
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-semibold"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
