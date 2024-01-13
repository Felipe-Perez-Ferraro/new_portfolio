import React, { useMemo, useState } from 'react';
import { colorDesigns } from '../colorDesigns';
import Comeback from './Comeback';
import projects from '../projects';
import ReactPaginate from 'react-paginate';
import { leftArrow, rightArrow } from '../icons';
import Popup from './Popup';
import { AnimatePresence, motion } from 'framer-motion';

function Projects({ design }) {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState({ index: undefined, id: undefined });
  const [page, setPage] = useState(0);
  const n = 2;

  const filterData = useMemo(() => {
    return projects.filter((item, index) => {
      return (index >= page * n) & (index < (page + 1) * n);
    });
  }, [page]);

  const handleOpenClick = (id, idx) => {
    setPopup({
      index: idx,
      id: id,
    });
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.section
        className={`flex flex-col gap-6 justify-center items-center h-screen ${
          colorDesigns[design].background
        } ${open ? 'backdrop-blur-sm' : null}`}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 40 },
          opacity: { duration: 0.2 },
        }}
      >
        <Comeback design={colorDesigns[design]} />
        {filterData && filterData.length > 0 && (
          <article className="flex flex-col max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto gap-4">
            <h2
              className={`text-4xl text-center uppercase font-black ${colorDesigns[design].title}`}
            >
              Projects
            </h2>
            <div className="flex flex-col gap-2 lg:flex-row">
              {filterData.map((pro, idx) => (
                <div
                  className={`flex flex-col gap-2 border ${colorDesigns[design].border} rounded p-1 md:w-[400px]`}
                  key={pro.id}
                  id={pro.id}
                >
                  <figure>
                    <img
                      src={pro.img}
                      alt="project image"
                      className="rounded w-full h-40"
                    />
                  </figure>
                  <h2
                    className={`text-lg font-bold text-center ${colorDesigns[design].subtitle}`}
                  >
                    {pro.name}
                  </h2>
                  {pro.pairProgramming ? (
                    <p className={`font-semibold ${colorDesigns[design].text}`}>
                      Pair Programming: Yes
                    </p>
                  ) : (
                    <p className={`font-semibold ${colorDesigns[design].text}`}>
                      Pair Programming: No
                    </p>
                  )}
                  <ul className="flex gap-3">
                    {pro.tech.map((t, idx) => (
                      <li
                        className={`font-semibold ${colorDesigns[design].linkBg} ${colorDesigns[design].text} px-1 rounded-lg`}
                        key={idx}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center gap-4 mt-2">
                    <button
                      className={`${colorDesigns[design].paragraph} font-bold uppercase`}
                      type="button"
                      onClick={() => handleOpenClick(pro.id, idx)}
                    >
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {filterData[popup.index] &&
            filterData[popup.index].id === popup.id ? (
              <AnimatePresence>
                {open && (
                  <Popup
                    key={filterData[popup.index].id}
                    index={filterData[popup.index]}
                    close={handleCloseClick}
                    design={colorDesigns[design]}
                  />
                )}
              </AnimatePresence>
            ) : null}
          </article>
        )}
        <ReactPaginate
          className="flex gap-5"
          activeClassName="active"
          pageClassName={`${colorDesigns[design].text}`}
          onPageChange={(e) => setPage(e.selected)}
          pageCount={Math.ceil(projects.length / n)}
          breakLabel="..."
          previousLabel={leftArrow}
          previousClassName={`${colorDesigns[design].paragraph}`}
          nextLabel={rightArrow}
          nextClassName={`${colorDesigns[design].paragraph}`}
        />
      </motion.section>
    </AnimatePresence>
  );
}

export default Projects;
