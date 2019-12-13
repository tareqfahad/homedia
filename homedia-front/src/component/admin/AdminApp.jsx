import React from 'react'
import Navbar from './Navbar'
import Admin from './Admin'
import Upload from './Upload'
import Settings from './Settings'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


class AdminApp extends React.Component {
  render () {

      return(

        <Router>

          <div>



          <Navbar/>

            <Switch>
              <Route path="/admin/upload">

              <Upload/>

              </Route>

              <Route path="/admin/settings">

              <Settings/>

              </Route>


              <Route path="/admin/home">

              <Admin/>

              </Route>

            </Switch>



          </div>



       </Router>



      )



  }
}

export default AdminApp;
