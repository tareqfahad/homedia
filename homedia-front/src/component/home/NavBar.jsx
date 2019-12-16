import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import React from 'react'


const NavBar = () => (
  <div>
<Menu inverted visible attached='top'>

      <Link to="/home">
          <Menu.Item >
             Home
           </Menu.Item>
           </Link>

      <Link to="/videos">
          <Menu.Item >
             Videos
           </Menu.Item>
           </Link>

           <Link to="/music">
          <Menu.Item >
             Music
           </Menu.Item>
           </Link>
      <Menu.Item position='right'>
      <Dropdown item icon='align justify' >
      <Dropdown.Menu >
      <Link to="/admin">
          <Dropdown.Item><p style={{"color":"black"}}>Upload</p></Dropdown.Item>
          </Link>
          <Dropdown.Item>Dark Mode</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
    </Menu>

  </div>
)

export default NavBar
