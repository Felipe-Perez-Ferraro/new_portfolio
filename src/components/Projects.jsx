import React, { useMemo, useState } from 'react';
import { colorDesigns } from '../colorDesigns';
import Comeback from './Comeback';
import Designs from './Designs';
import projects from '../projects';
import ReactPaginate from 'react-paginate';
import { leftArrow, rightArrow } from '../icons';

function Projects({ design, handleButtonClick }) {
  const [page, setPage] = useState(0);
  const n = 2;

  const filterData = useMemo(() => {
    return projects.filter((item, index) => {
      return (index >= page * n) & (index < (page + 1) * n);
    });
  }, [page]);

  return (
    <section
      className={`flex flex-col gap-6 justify-center items-center h-screen ${colorDesigns[design].background}`}
    >
      <Comeback design={colorDesigns[design]} />
      {filterData && filterData.length > 0 && (
        <article className="flex flex-col max-w-xs xl:max-w-screen-xl mx-auto gap-4">
          <h2
            className={`text-4xl text-center uppercase font-black ${colorDesigns[design].title}`}
          >
            Projects
          </h2>
          {filterData.map((pro) => (
            <div
              className={`flex flex-col gap-2 border ${colorDesigns[design].border} rounded p-1 xl:w-96`}
              key={pro.id}
            >
              <figure>
                <img
                  src={pro.img}
                  alt="project image"
                  className="rounded h-36 w-full"
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
              <div className="flex justify-center mt-2">
                <a
                  href={pro.githubLink}
                  target="_blank"
                  className={`font-bold ${colorDesigns[design].paragraph}`}
                >
                  See Code
                </a>
              </div>
            </div>
          ))}
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
      <div className="flex gap-3">
        <Designs handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Projects;
