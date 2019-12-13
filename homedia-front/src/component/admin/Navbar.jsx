import React from 'react'
import { Menu, Sidebar , Icon , Buttton } from 'semantic-ui-react'
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

          <Menu.Item as='a' >
             <Icon name='home'/>
             Home
           </Menu.Item>
           <Menu.Item as='a' >
             <Icon name='cloud upload' />

                Upload content

           </Menu.Item>
           <Menu.Item as='a'>
             <Icon name='settings' />
             Sttings
           </Menu.Item>

         </Sidebar>


          </div>


        )





  }
}

export default Navbar;
