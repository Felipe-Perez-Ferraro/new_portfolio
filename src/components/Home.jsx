import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Links from './Links';
import Designs from './Designs';
import Social from './Social';

function Home({ design, handleButtonClick }) {
  return (
    <section
      className={`flex justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Links design={colorDesigns[design]} />
      <article>
        <h1 className={`font-bold text-4xl ${colorDesigns[design].title}`}>
          Hello I'm
        </h1>
        <h2
          className={`font-semibold text-3xl ${colorDesigns[design].subtitle}`}
        >
          <span className={`${colorDesigns[design].text}`}>F</span>elipe Perez
          Ferraro
        </h2>
        <h3 className={`font-bold text-2xl ${colorDesigns[design].paragraph}`}>
          Full Stack Developer
        </h3>
        <div className="my-5">
          <Social design={colorDesigns[design]} />
        </div>
        <div className="flex justify-center mt-10 gap-3">
          <Designs handleButtonClick={handleButtonClick} />
        </div>
      </article>
    </section>
  );
}

export default Home;
