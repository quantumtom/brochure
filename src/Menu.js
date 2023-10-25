import './Menu.css';
import { useState, useEffect, useReducer } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <Navbar expand={"md"} className={"bg-body-tertiary navigation-menu"}>
        <Container>
          <Navbar.Brand href={"/about"}>
            <h1>Socktan Digital</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} className={"float-start"} />
          <Navbar.Collapse id={"basic-navbar-nav"}>
            <Nav className={"me-auto"}>
              <Nav.Item>
                <Nav.Link href={"/about"}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/research"}>Research</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/development"}>Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/contact"}>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle variant={'secondary'}>
                    Light/Dark Mode
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      Light mode
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Dark mode
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Auto mode
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Menu;