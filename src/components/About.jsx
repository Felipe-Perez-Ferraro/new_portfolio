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
        className={`flex flex-col mx-auto max-w-xs border ${colorDesigns[design].border} p-2 rounded-sm gap-5`}
      >
        <h2
          className={`text-3xl font-black text-center ${colorDesigns[design].title} uppercase`}
        >
          About Me
        </h2>
        <p className={`font-medium text-justify ${colorDesigns[design].text}`}>
          Hi! I am Felipe, a full-stack developer currently improving my skills
          at Microverse, a remote software development program that uses pair
          programming and project building to teach software development. So
          far, I have built projects such as Awesome Books, a website that
          allows charging your favorite books and storing them. I started by
          doing simple pages with no interactions and these last few months I
          did a lot of interactive websites using HTML, CSS, JavaScript, React
          and Ruby on Rails.
        </p>
      </article>
      <div className="flex gap-3">
        <Designs handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default About;
