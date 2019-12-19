import logo from '../../logo.png';
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import {
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {

    return (
      <div>
          <Menu inverted visible >
              <Menu.Item>
                <Image size='mini' src={logo} />
              </Menu.Item>

             
              <div style={{"marginTop":"8px"}}>
              <Link to="/home">
              <Menu.Item header>
                <b>Home</b>
                </Menu.Item>
                </Link>
                </div>

                <div style={{"marginTop":"8px"}}>
          <Link to="/allvideos">
          <Menu.Item >
             Videos
           </Menu.Item>
           </Link>
           </div>
           <div style={{"marginTop":"8px"}}>
          <Link to="/allmusic">
          <Menu.Item >
             Music
             </Menu.Item>
             </Link>
             </div>
             

              <Menu.Menu position='right'>
                <Dropdown style={{"marginRight":"10px"}}text='More' pointing className='link item'>
                  <Dropdown.Menu>
                  <Link to="/admin">
                    <Dropdown.Item><p style={{"color":"black"}}>Upload</p></Dropdown.Item>
                    </Link>
                    <Link to="/about">
                    <Dropdown.Item><p style={{"color":"black"}}>About</p></Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
          </Menu>
      </div>
    )
  }
}