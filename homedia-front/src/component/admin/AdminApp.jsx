import React from 'react'
import Navbar from './Navbar'
import Admin from './Admin'
import Upload from './Upload'
import Settings from './Settings'

class AdminApp extends React.Component {
  render () {

      return(

        <div>
        
        <Settings/>
        <Admin/>
        <Navbar/>

        </div>


      )



  }
}

export default AdminApp;
