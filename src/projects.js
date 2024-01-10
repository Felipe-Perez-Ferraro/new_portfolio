import toDoImg from '../src/assets/todolist.png';
import bookstoreImg from '../src/assets/bookstore.png';
import sptImg from '../src/assets/space.png';
import boatImg from '../src/assets/boat.png';

const projects = [
  {
    id: 1,
    name: 'To do List',
    pairProgramming: false,
    tech: ['css', 'javascript', 'webpack'],
    img: toDoImg,
    githubLink: 'https://github.com/Felipe-Perez-Ferraro/ToDo_List',
  },
  {
    id: 2,
    name: 'Bookstore',
    pairProgramming: false,
    tech: ['react', 'css'],
    img: bookstoreImg,
    githubLink: 'https://github.com/Felipe-Perez-Ferraro/bookstore',
  },
  {
    id: 3,
    name: 'Space Travelers',
    pairProgramming: true,
    tech: ['react', 'redux', 'tailwindcss'],
    img: sptImg,
    githubLink: 'https://github.com/DRT-DISABLED-ACCOUNT/re-spt',
  },
  {
    id: 4,
    name: 'Boats',
    pairProgramming: true,
    tech: ['react', 'redux', 'ruby on rails'],
    img: boatImg,
    githubLink: 'https://github.com/Felipe-Perez-Ferraro/final_capstone_front',
  },
];

export default projects;
