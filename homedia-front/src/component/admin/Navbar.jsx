import React from 'react'
import { Menu, Sidebar , Icon , Buttton } from 'semantic-ui-react'
import { Link } from "react-router-dom";
class Navbar extends React.Component {
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
         </Sidebar>


          </div>


        )





  }
}

export default Navbar;
