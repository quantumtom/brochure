import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hello from './Hello.js';
import Development from './Development.js';
import Contact from './Contact.js';

function App() {
  return (
      <div className={"content"}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path={"/"} element={<Hello />} />
              <Route path={"/about"} element={<Hello />} />
              <Route path={"/development"} element={<Development />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </main>
        </BrowserRouter>
        <footer className={"footer py-3 bg-body-tertiary sticky-bottom text-center"}>
          <div className="copyright">
            Socktan, Inc. &copy; 2023 &bull;&nbsp;<strong>Santa Monica, California</strong>
          </div>
        </footer>
      </div>
  );
}

export default App;
