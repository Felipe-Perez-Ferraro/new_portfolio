import React from 'react';
import { Link } from 'react-router-dom';
import { leftArrow } from '../icons';

function Comeback({ design }) {
  return (
    <>
      <Link
        to="/"
        className={`absolute top-1 left-1 p-1 rounded text-sm font-semibold ${design.subtitle} border ${design.border}`}
      >
        {leftArrow} Go Back
      </Link>
    </>
  );
}

export default Comeback;
