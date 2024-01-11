import React from 'react';
import { github, instagram, linkedin } from '../icons';

function Social({ design }) {
  return (
    <>
      <ul className="flex justify-center gap-4">
        <li className={`text-4xl lg:text-5xl ${design.text} hover:-translate-y-1`}>
          <a
            href="https://www.linkedin.com/in/felipe-perez-ferraro-6b9358218/"
            target="_blank"
          >
            {linkedin}
          </a>
        </li>
        <li className={`text-4xl lg:text-5xl ${design.text} hover:-translate-y-1`}>
          <a href="https://github.com/Felipe-Perez-Ferraro" target="_blank">
            {github}
          </a>
        </li>
        <li className={`text-4xl lg:text-5xl ${design.text} hover:-translate-y-1`}>
          <a href="https://www.instagram.com/fperezferraro/" target="_blank">
            {instagram}
          </a>
        </li>
      </ul>
    </>
  );
}

export default Social;
