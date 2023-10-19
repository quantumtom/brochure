import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hello from './Hello.js';
import Development from './Development.js';
import Contact from './Contact.js';
import Research from './Research.js';

function App() {
  return (
      <div>
        <BrowserRouter>
          <main>
            <Routes>
                <Route path={"/"} element={<Hello />} />
                <Route path={"/about"} element={<Hello />} />
                <Route path={"/development"} element={<Development />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/research"} element={<Research />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
