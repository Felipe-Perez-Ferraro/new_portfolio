import { Link } from 'react-router-dom';

function Links({ design }) {
  return (
    <>
      <Link
        className={`w-32 text-center absolute top-1 left-1 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph}`}
        to="about"
      >
        About
      </Link>
      <Link
        className={`w-32 text-center absolute top-1 right-1 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph}`}
        to="projects"
      >
        Projects
      </Link>
      <Link
        className={`w-32 text-center absolute bottom-1 left-1 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph}`}
        to="education"
      >
        Education
      </Link>
      <Link
        className={`w-32 text-center absolute bottom-1 right-1 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph}`}
        to="skills"
      >
        Skills
      </Link>
    </>
  );
}

export default Links;
