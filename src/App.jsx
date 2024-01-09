import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [design, setDesign] = useState('designOne');

  const handleButtonClick = (designObject) => {
    setDesign(designObject);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home design={design} handleButtonClick={handleButtonClick} />} />
        <Route path='/about' element={<About design={design} handleButtonClick={handleButtonClick} />} />
        <Route path='/projects' element={<Projects design={design} handleButtonClick={handleButtonClick} />} />
        <Route path='/education' element={<Education design={design} handleButtonClick={handleButtonClick} />} />
        <Route path='/skills' element={<Skills design={design} handleButtonClick={handleButtonClick} />} />
      </Routes>
    </Router>
  );
}

export default App;
