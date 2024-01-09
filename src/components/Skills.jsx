import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Designs from './Designs';
import Comeback from './Comeback';
import languages from '../languages';

function Skills({ design, handleButtonClick }) {
  return (
    <section
      className={`flex flex-col gap-10 justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Comeback design={colorDesigns[design]} />
      <article className="flex flex-col mx-auto max-w-xs gap-5">
        <div className="flex flex-col gap-4">
          <h2
            className={`text-center text-3xl uppercase font-black ${colorDesigns[design].title}`}
          >
            Languages
          </h2>
          <div className="flex flex-wrap justify-center">
            {languages.map((lang) => (
              <div key={lang.id} className="flex flex-col w-24 items-center p-1">
                <h3 className={`text-2xl ${colorDesigns[design].paragraph}`}>{lang.icon}</h3>
                <p className={`text-center ${colorDesigns[design].text}`}>{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <div className="flex gap-3">
        <Designs handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Skills;
