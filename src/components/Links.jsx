import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Links({ design }) {
  return (
    <>
      <motion.button
        className="absolute top-0 left-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        type="button"
      >
        <Link
          className={`w-32 text-center absolute top-2 left-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
          to="about"
        >
          About
        </Link>
      </motion.button>
      <motion.button
        type="button"
        className="absolute top-0 right-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          className={`w-32 text-center absolute top-2 right-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
          to="projects"
        >
          Projects
        </Link>
      </motion.button>
      <motion.button
        type="button"
        className="absolute bottom-0 left-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          className={`w-32 text-center absolute bottom-2 left-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
          to="education"
        >
          Education
        </Link>
      </motion.button>
      <motion.button
        type="button"
        className="absolute bottom-0 right-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          className={`w-32 text-center absolute bottom-2 right-3 border ${design.border} px-2 py-1 rounded text-lg font-bold ${design.paragraph} md:text-2xl md:w-40 xl:text-3xl xl:w-48 hover:scale-105 ease-in duration-150`}
          to="skills"
        >
          Skills
        </Link>
      </motion.button>
    </>
  );
}

export default Links;
