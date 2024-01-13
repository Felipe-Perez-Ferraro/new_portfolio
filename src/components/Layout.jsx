import React from 'react';
import { colorDesigns } from '../colorDesigns';

const Layout = ({ children, design }) => {
  return (
    <main className={`${colorDesigns[design].background}`}>{children}</main>
  );
};

export default Layout;
