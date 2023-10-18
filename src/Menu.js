import './Menu.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Menu() {
  return (
      <Navbar expand={"md"} className={"bg-body-tertiary navigation-menu"}>
        <Container>
          <Navbar.Brand href={"/about"}>
            <p>Socktan, Inc.</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} className={"float-start"} />
          <Navbar.Collapse id={"basic-navbar-nav"}>
            <Nav className={"me-auto mb-2 mb-lg-0"}>
              <Nav.Item>
                <Nav.Link href={"/research"}>Research</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/development"}>Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/about"}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/contact"}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Menu;