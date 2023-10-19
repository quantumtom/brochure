import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hello from './Hello.js';
import Development from './Development.js';
import Contact from './Contact.js';
import Research from './Research.js';
import Test from './Test.js';

function App() {
  return (
      <div>
        <BrowserRouter>
          <main>
            <Routes>
                <Route path={"/about"} element={<Hello />} />
                <Route path={"/development"} element={<Development />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/research"} element={<Research />} />
                <Route path={"/test"} element={<Test />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
