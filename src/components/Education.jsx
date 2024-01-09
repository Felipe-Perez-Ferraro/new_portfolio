import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Designs from './Designs';
import Comeback from './Comeback';

function Education({ design, handleButtonClick }) {
  return (
    <section
      className={`flex flex-col gap-10 justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Comeback design={colorDesigns[design]} />
      <article className='flex flex-col mx-auto max-w-xs gap-5'>
        <div
          className={`flex flex-col gap-1 border ${colorDesigns[design].border} p-2 rounded`}
        >
          <h2
            className={`text-center text-3xl font-black uppercase mb-2 ${colorDesigns[design].title}`}
          >
            School
          </h2>
          <h3
            className={`text-xl font-semibold ${colorDesigns[design].subtitle}`}
          >
            Escuela Argentina del Oeste
          </h3>
          <p className={`${colorDesigns[design].paragraph}`}>
            Feb 2008 - Nov 2020
          </p>
          <h4
            className={`text-sm font-bold text-center mt-2 ${colorDesigns[design].text}`}
          >
            Graduated
          </h4>
        </div>
        <div
          className={`flex flex-col gap-1 border ${colorDesigns[design].border} p-2 rounded`}
        >
          <h2
            className={`text-center text-3xl font-black uppercase mb-2 ${colorDesigns[design].title}`}
          >
            Certificates
          </h2>
          <h3
            className={`text-xl font-semibold ${colorDesigns[design].subtitle}`}
          >
            Microverse - Full Stack
          </h3>
          <p className={`${colorDesigns[design].paragraph}`}>
            Jun 2023 - Jan 2024
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="https://www.credential.net/72a92c95-fee1-4f70-a7d9-dbe3a3fcc916#gs.2taqh8"
              target="_blank"
              rel="noreferrer"
              className={`text-sm font-bold ${colorDesigns[design].text}`}
            >
              View Certificate
            </a>
          </div>
        </div>
      </article>
      <div className="flex gap-3">
        <Designs handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Education;