import React from 'react';
import { colorDesigns } from '../colorDesigns';
import Designs from './Designs';
import Comeback from './Comeback';

function About({ design, handleButtonClick }) {
  return (
    <section
      className={`flex flex-col justify-center items-center h-screen ${colorDesigns[design].background} gap-10`}
    >
      <Comeback design={colorDesigns[design]} />
      <article
        className={`flex flex-col mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl border ${colorDesigns[design].border} p-2 rounded-sm gap-5`}
      >
        <h2
          className={`text-3xl md:text-4xl xl:text-5xl font-black text-center ${colorDesigns[design].title} uppercase`}
        >
          About Me
        </h2>
        <p
          className={`font-medium text-justify ${colorDesigns[design].text} md:text-lg xl:text-xl`}
        >
          Hi! I am Felipe, a full-stack developer who graduated from Microverse,
          a remote software development program that uses pair programming and
          project building to teach software development. So far, I have built
          projects that allow you to interact with the website, authenticate an
          user, charge data who is storing in an api, delete or update it. I
          started by doing simple pages with no interactions and these last few
          months I did a lot of interactive websites using JavaScript, React and
          Ruby on Rails.
        </p>
      </article>
      <div className="flex gap-3">
        <Designs handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default About;
