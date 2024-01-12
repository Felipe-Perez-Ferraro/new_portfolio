import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGem, faTrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const languages = [
  { id: 1, name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { id: 2, name: 'CSS', icon: <FontAwesomeIcon icon={faCss3} /> },
  { id: 3, name: 'JS', icon: <FontAwesomeIcon icon={faJs} /> },
  { id: 4, name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { id: 5, name: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} /> },
  { id: 6, name: 'Ruby', icon: <FontAwesomeIcon icon={faGem} /> },
  { id: 7, name: 'Ruby on Rails', icon: <FontAwesomeIcon icon={faTrain} /> },
];

export default languages;
