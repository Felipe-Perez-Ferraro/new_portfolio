import toDoImg from '../src/assets/todolist.png';
import sptImg from '../src/assets/space.png';
import boatImg from '../src/assets/boat.png';
import financialImg from '../src/assets/financial.png';

const projects = [
  {
    id: 1,
    name: 'To do List',
    pairProgramming: false,
    tech: ['CSS', 'JavaScript', 'Webpack'],
    img: toDoImg,
    githubLink: 'https://github.com/Felipe-Perez-Ferraro/ToDo_List',
    view: 'https://felipe-perez-ferraro.github.io/ToDo_List/',
    description:
      'The To Do List project is made in Javascript code using array of objects, where you can add, remove, edit, mark a task as completed and finally remove all the completed tasks using ES6 javascript code and implementing webpack in my project',
  },
  {
    id: 2,
    name: 'Financial Insights',
    pairProgramming: false,
    tech: ['React', 'Tailwindcss', 'Redux'],
    img: financialImg,
    githubLink:
      'https://github.com/Felipe-Perez-Ferraro/REACT-Capstone-project',
    view: 'https://react-capstone-project-77ff.onrender.com/',
    description:
      'This project its about to check the financial insights of big companies since last 5 years. I have used React.js - React Redux toolkit - React Router Dom - Tailwind CSS to make this project',
  },
  {
    id: 3,
    name: 'Space Travelers',
    pairProgramming: true,
    tech: ['React', 'Redux', 'Tailwindcss'],
    img: sptImg,
    githubLink: 'https://github.com/DRT-DISABLED-ACCOUNT/re-spt',
    description:
      'We built an app for a company that provides commercial and scientific space travel services using the SpaceX API. The application allows the users to book rockets and join selected space missions.',
  },
  {
    id: 4,
    name: 'Boats',
    pairProgramming: true,
    tech: ['React', 'Redux', 'Ruby on Rails'],
    img: boatImg,
    githubLink: 'https://github.com/Felipe-Perez-Ferraro/final_capstone_front',
    description:
      'A pair programming project made it in React & Ruby on Rails. A website where you can see, add or delete boats, then you can reserve a selected boat to test it!',
  },
];

export default projects;
