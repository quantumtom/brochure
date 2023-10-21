import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About.js';
import Research from './Research.js';
import Development from './Development.js';
import Contact from './Contact.js';
import Services from './Services.js';

function App() {
  return (
      <div className={"custom-wrapper"}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path={"/"} element={<About />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/research"} element={<Research />} />
              <Route path={"/development"} element={<Development />} />
              <Route path={"/services"} element={<Services />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
