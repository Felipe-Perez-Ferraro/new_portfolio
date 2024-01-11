import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Designs from './Designs';
import Comeback from './Comeback';
import languages from '../languages';
import skills from '../skills';

function Skills({ design, handleButtonClick }) {
  return (
    <section
      className={`flex flex-col gap-20 justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Comeback design={colorDesigns[design]} />
      <article className="flex flex-col mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-screen-xl xl:flex-row gap-8">
        <div className="flex flex-col gap-4 xl:w-1/2">
          <h2
            className={`text-center text-3xl xl:text-4xl uppercase font-black ${colorDesigns[design].title}`}
          >
            Languages
          </h2>
          <div className="flex flex-wrap justify-center">
            {languages.map((lang) => (
              <div
                key={lang.id}
                className="flex flex-col w-24 items-center p-1"
              >
                <h3 className={`text-2xl xl:text-3xl ${colorDesigns[design].paragraph}`}>
                  {lang.icon}
                </h3>
                <p className={`text-center ${colorDesigns[design].text}`}>
                  {lang.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:w-1/2">
          <h2
            className={`text-center text-3xl xl:text-4xl uppercase font-black ${colorDesigns[design].title}`}
          >
            Skills
          </h2>
          <div className="flex flex-col flex-wrap">
            {skills.map((skill) => (
              <ul key={skill.id} className="flex flex-col p-1">
                <li
                  className={`text-lg xl:text-xl text-center ${colorDesigns[design].text}`}
                >
                  {skill.skill}
                </li>
              </ul>
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
