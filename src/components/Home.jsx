import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Links from './Links';
import Designs from './Designs';
import Social from './Social';
import { motion } from 'framer-motion';

function Home({ design, handleButtonClick }) {

  return (
    <section
      className={`flex justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Links design={colorDesigns[design]} />
      <motion.article initial={{scale: 0}} animate={{scale: 1}}>
        <motion.div
          className="cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          <h1
            className={`font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${colorDesigns[design].title}`}
          >
            Hello I'm
          </h1>
          <h2
            className={`font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${colorDesigns[design].subtitle}`}
          >
            <span className={`${colorDesigns[design].text}`}>F</span>elipe Perez
            Ferraro
          </h2>
          <h3
            className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${colorDesigns[design].paragraph}`}
          >
            Full Stack Developer
          </h3>
        </motion.div>
        <div className="my-7">
          <Social design={colorDesigns[design]} />
        </div>
        <div className="flex justify-center mt-10 gap-3">
          <Designs handleButtonClick={handleButtonClick} />
        </div>
      </motion.article>
    </section>
  );
}

export default Home;
