import React from 'react'
import { Menu, Sidebar , Icon , Buttton } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './assets/adminstyle.css'
class Navbar extends React.Component {
  logout = () => {
    localStorage.removeItem("usertoken");
    window.location.reload()
  }
  render () {

let test =()=>{
  console.log("Hello")
}



        return(



          <div>

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >


          <Link to="/admin/home">
          <Menu.Item as='a'  >
             <Icon name='home'/>
             Home
           </Menu.Item>
           </Link>

           <Link to="/admin/upload">
           <Menu.Item as='a' >
             <Icon name='cloud upload' />

                Upload content

           </Menu.Item>
           </Link>

           <Link to="/admin/settings">
           <Menu.Item as='a'>
             <Icon name='settings' />
             Settings
           </Menu.Item>
            </Link>

            <Link >
            <Menu.Item onClick={this.logout}>Logout</Menu.Item>
            </Link>

                {/*Needs to Redirect to home page */}
              <Link to="/home">
            <a className="toMainPage">Homedia</a>
            </Link>

         </Sidebar>


          </div>


        )





  }
}

export default Navbar;
