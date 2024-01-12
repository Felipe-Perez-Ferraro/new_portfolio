import { Link } from 'react-router-dom';

function Links({ design }) {
  return (
    <>
      <Link
        className={`w-32 text-center absolute top-2 left-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
        to="about"
      >
        About
      </Link>
      <Link
        className={`w-32 text-center absolute top-2 right-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
        to="projects"
      >
        Projects
      </Link>
      <Link
        className={`w-32 text-center absolute bottom-2 left-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
        to="education"
      >
        Education
      </Link>
      <Link
        className={`w-32 text-center absolute bottom-2 right-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
        to="skills"
      >
        Skills
      </Link>
    </>
  );
}

export default Links;
