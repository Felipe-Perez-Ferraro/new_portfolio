import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <About />
      </>
    ),
  },
]);

export default router;
