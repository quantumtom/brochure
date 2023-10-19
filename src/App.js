import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About.js';
import Development from './Development.js';
import Contact from './Contact.js';
import Services from './Research.js';

function App() {
  return (
      <div className={"custom-wrapper"}>
        <BrowserRouter>
          <main>
            <Routes>
                <Route path={"/"} element={<About />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/development"} element={<Development />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/research"} element={<Services />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
