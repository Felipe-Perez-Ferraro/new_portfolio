import { motion } from 'framer-motion';
import React from 'react';
import { xMark } from '../icons';

function Popup({ index, close, design }) {
  return (
    <motion.div
      layout
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      className={`absolute ${design.hov} p-1 border ${design.border} rounded-md top-10 max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl h-[90%] flex flex-col gap-3`}
    >
      <button
        className={`text-slate-50 absolute -right-3 -top-3 px-2 rounded-full bg-red-700`}
        type="button"
        onClick={close}
      >
        {xMark}
      </button>
      <h2 className={`text-2xl font-black ${design.text} text-center`}>
        {index.name}
      </h2>
      <figcaption>
        <figure>
          <img src={index.img} className="rounded h-[180px] md:h-auto w-full" alt="Project" />
        </figure>
      </figcaption>
      <ul className="flex gap-2">
        {index.tech.map((t, idx) => (
          <li
            className={`font-semibold ${design.background} ${design.text} px-1 rounded-lg`}
            key={idx}
          >
            {t}
          </li>
        ))}
      </ul>
      {index.pairProgramming ? (
        <p className={`font-semibold ${design.text}`}>Pair Programming: Yes</p>
      ) : (
        <p className={`font-semibold ${design.text}`}>Pair Programming: No</p>
      )}
      <p className={`font-semibold ${design.text} text-justify`}>
        {index.description}
      </p>
      <div className="flex justify-evenly mt-auto pb-2">
        <a
          href={index.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg font-bold p-2 border ${design.border} ${design.background} ${design.text} rounded w-28 text-center`}
        >
          See Code
        </a>
        {index.view && (
          <a
            href={index.view}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg font-bold p-2 border ${design.border} ${design.background} ${design.text} rounded w-28 text-center`}
          >
            See Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default Popup;
