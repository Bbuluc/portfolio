export default function MobileNavbar({action}) {
  return (
    <div className="absolute top-16 left-0 w-[50%] sm:hidden p-8">
      <ul className="pt-8">
          <li className="pb-8">
            <a
              href="#home"
              className=" text-blue-200 font-extrabold hover:text-blue-400 border-b-1 border-blue-400"
              onClick={action}
            >
              Home
            </a>
          </li>
          <li className="pb-8">
            <a
              href="#about"
              className=" text-blue-200 font-extrabold hover:text-blue-400 border-b-1 border-blue-400"
              onClick={action}
            >
              About me
            </a>
          </li>
          <li className="pb-16">
            <a
              href="#contact"
              className="\ text-blue-200 font-extrabold hover:text-blue-400 border-b-1 border-blue-400"
              onClick={action}
            >
              Contact
            </a>
          </li>
        </ul>
    </div>
  )
}
