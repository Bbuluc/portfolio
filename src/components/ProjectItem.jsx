export default function ProjectItem({ image, title, description,link }) {
  return (
    <div className="flex border rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 bg-gray-800 text-white m-4 sm:w-[80%]">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-md mb-4"
      />
      <div className="ml-4">
        <a className="text-xl font-bold text-orange-400 mb-2 hover:text-orange-900" href={link} target="_blank">{title}</a>
        <p className="text-blue-200">{description}</p>
      </div>
    </div>
  );
}
