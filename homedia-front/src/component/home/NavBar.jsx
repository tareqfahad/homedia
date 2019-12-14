import React from 'react'
import { Navbar, Nav, Dropdown} from 'react-bootstrap'


const NavBar = () => (
  <div>
      <Navbar expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="/home">HoMedia</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href=""></Nav.Link>
    </Nav>

<Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    More    
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Upload</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Dark mode</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Navbar>
  </div>
)

export default NavBar