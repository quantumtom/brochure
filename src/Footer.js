import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
      <footer className={"footer py-3 bg-body-tertiary sticky-bottom text-center"}>
        <div className="copyright">
          Socktan, Inc. &copy; 2023 &bull;&nbsp;<strong>Santa Monica, California</strong>
        </div>
      </footer>
  );
}

export default Footer;