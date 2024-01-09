import React from 'react';

function Designs({ handleButtonClick }) {
  return (
    <>
      <button
        className="px-2 py-1 border border-teal-100 bg-sky-800 font-bold text-amber-400 rounded"
        type="button"
        onClick={() => handleButtonClick('designOne')}
      >
        Design 1
      </button>
      <button
        className="px-2 py-1 border border-orange-600 bg-amber-800 font-bold text-orange-100 rounded"
        type="button"
        onClick={() => handleButtonClick('designTwo')}
      >
        Design 2
      </button>
      <button
        type="button"
        className="px-2 py-1 border border-purple-100 bg-purple-600 font-bold text-violet-950 rounded"
        onClick={() => handleButtonClick('designThree')}
      >
        Design 3
      </button>
    </>
  );
}

export default Designs;
