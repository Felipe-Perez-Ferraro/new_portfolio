import React, { useState } from 'react';
import { colorDesigns } from '../colorDesigns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Links from './Links';
import Designs from './Designs';

function Home() {
  const [design, setDesign] = useState('designOne');

  const handleButtonClick = (designObject) => {
    console.log('Clicked on button. Design object:', designObject);
    setDesign(designObject);
  };

  console.log('Current design state:', design);

  const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <main
      className={`flex justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Links design={colorDesigns[design]} />
      <article>
        <h1 className={`font-bold text-4xl ${colorDesigns[design].title}`}>Hello I'm</h1>
        <h2 className={`font-semibold text-3xl ${colorDesigns[design].subtitle}`}>
          <span className={`${colorDesigns[design].text}`}>F</span>elipe Perez Ferraro
        </h2>
        <h3 className={`font-bold text-2xl ${colorDesigns[design].paragraph}`}>
          Full Stack Developer
        </h3>
        <div className="my-5">
          <ul className="flex justify-center gap-4">
            <li className={`text-4xl ${colorDesigns[design].text}`}>
              <a
                href="https://www.linkedin.com/in/felipe-perez-ferraro-6b9358218/"
                target="_blank"
              >
                {linkedin}
              </a>
            </li>
            <li className={`text-4xl ${colorDesigns[design].text}`}>
              <a href="https://github.com/Felipe-Perez-Ferraro" target="_blank">
                {github}
              </a>
            </li>
            <li className={`text-4xl ${colorDesigns[design].text}`}>
              <a
                href="https://www.instagram.com/fperezferraro/"
                target="_blank"
              >
                {instagram}
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center mt-10 gap-3'>
          <Designs handleButtonClick={handleButtonClick} />
        </div>
      </article>
    </main>
  );
}

export default Home;
